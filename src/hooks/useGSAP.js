import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAP(animation, deps = []) {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(animation, containerRef.current);
    return () => ctx.revert();
  }, deps);
  return containerRef;
}

export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => setShown(true),
    });
    return () => trigger.kill();
  }, []);
  return [ref, shown];
}
