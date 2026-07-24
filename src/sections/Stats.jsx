import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "../data";
import { useGSAP } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
  const statsRef = useGSAP(() => {
    gsap.utils.toArray(".stat-card").forEach((card, i) => {
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
    <section ref={statsRef} className="relative -mt-16 z-20 max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="stat-card bg-white rounded-xl border border-slate-100 shadow-sm p-5 md:p-6 text-center">
            <s.icon size={22} className="mx-auto mb-2 text-rose" />
            <div className="text-2xl md:text-3xl font-black text-navy">{s.value}</div>
            <div className="text-xs text-slate mt-0.5 uppercase tracking-wider font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
