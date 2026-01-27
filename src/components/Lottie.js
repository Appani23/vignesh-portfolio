import { useEffect, useRef } from "react";

export default function Lottie({ animationData, loop = true, autoplay = true, style }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let anim;

    if (typeof window === "undefined") return;

    const load = async () => {
      const lottie = (await import("lottie-web")).default;

      if (!containerRef.current) return;

      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      });
    };

    load();

    return () => {
      if (anim) anim.destroy();
    };
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} style={style} />;
}
