import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "../data";
import { useGSAP } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
  const statsRef = useGSAP(() => {
    gsap.utils.toArray(".stat-cell").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          once: true,
        },
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section ref={statsRef} className="relative -mt-16 z-20 max-w-[1440px] mx-auto px-6 md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="stat-cell spec-cell text-center p-6"
          >
            <s.icon size={22} className="mx-auto mb-3 text-m-blue-light" />
            <div className="text-display-sm font-bold text-on-dark">{s.value}</div>
            <div className="text-label-uppercase text-body mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}