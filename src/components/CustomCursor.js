import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const dotScale = useRef(1);
  const ringScale = useRef(1);
  const isHovering = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Only activate on fine pointer (mouse), never on touch / coarse
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide the native cursor globally while our custom cursor is live
    document.documentElement.classList.add('custom-cursor-active');

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible.current) {
        isVisible.current = true;
        // Snap ring to starting position so it doesn't drift in from (−200, −200)
        ringPos.current = { x: e.clientX, y: e.clientY };
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const onMouseOver = (e) => {
      const nowHovering = !!e.target.closest(
        'a, button, [role="button"], [tabindex="0"], label, select, input, textarea'
      );
      if (nowHovering !== isHovering.current) {
        isHovering.current = nowHovering;
        dot.classList.toggle('cursor-hover', nowHovering);
        ring.classList.toggle('cursor-hover', nowHovering);
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      isVisible.current = false;
    };

    const tick = () => {
      const { x, y } = mouse.current;

      // Ring position lags behind with lerp
      ringPos.current.x = lerp(ringPos.current.x, x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, y, 0.12);

      // Scale lightly bounces on hover
      const tDot = isHovering.current ? 1.6 : 1;
      const tRing = isHovering.current ? 1.4 : 1;
      dotScale.current = lerp(dotScale.current, tDot, 0.18);
      ringScale.current = lerp(ringScale.current, tRing, 0.14);

      // 4 = half of 8px dot; 16 = half of 32px ring
      dot.style.transform = `translate3d(${x - 4}px,${y - 4}px,0) scale(${dotScale.current.toFixed(3)})`;
      ring.style.transform = `translate3d(${(ringPos.current.x - 16).toFixed(2)}px,${(ringPos.current.y - 16).toFixed(2)}px,0) scale(${ringScale.current.toFixed(3)})`;

      rafId.current = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}
