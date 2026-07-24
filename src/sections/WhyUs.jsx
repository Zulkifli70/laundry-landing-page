import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award } from "lucide-react";
import { whyItems } from "../data";
import { useGSAP } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

function WhyCard({ item }) {
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      },
    });
    return () => trigger.kill();
  }, []);
  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-x-[-30px] flex gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-400"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose transition-all duration-400 hover:bg-rose hover:text-white">
        <item.icon size={22} />
      </div>
      <div>
        <h3 className="text-base font-bold text-navy mb-1">{item.title}</h3>
        <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-50 text-rose text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            <Award size={12} />
            Keunggulan
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-navy leading-tight">
            Mengapa Memilih{" "}
            <span className="gradient-accent">Jojo Laundry?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {whyItems.map((item) => (
            <WhyCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
