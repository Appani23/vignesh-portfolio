import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 20);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();

    if (prefersReduced) {
      setProgress(0);
      setVisible(false);
    }

    return () => window.removeEventListener('scroll', update);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      className="fixed left-0 top-0 z-[9999] h-[3px] origin-left"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(to right, #7c3aed, #a855f7, #38bdf8)',
        transition: 'width 80ms linear',
      }}
    />
  );
}
