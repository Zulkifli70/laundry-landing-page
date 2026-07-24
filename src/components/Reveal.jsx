import { useReveal } from "../hooks/useGSAP";

export function Reveal({ children, className = "", delay = 0, dir = "up" }) {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={`${shown ? "reveal-visible" : "reveal-hidden"} ${className}`}
      data-reveal-dir={dir}
      data-reveal-delay={delay}
    >
      {children}
    </div>
  );
}
