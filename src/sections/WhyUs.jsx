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
      className="opacity-0 translate-x-[-30px] flex gap-5 p-6 feature-photo-card transition-all duration-400"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-none bg-surface-elevated border border-hairline text-m-blue-light transition-all duration-400">
        <item.icon size={22} />
      </div>
      <div>
        <h3 className="text-title-md text-on-dark mb-1">{item.title}</h3>
        <p className="text-body-sm text-body leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="bg-canvas px-6 md:px-10" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-card border border-hairline text-m-blue-light text-xs font-semibold uppercase tracking-[0.15em] mb-6">
            <Award size={12} />
            Keunggulan
          </span>
          <h2 className="text-display-lg text-on-dark">
            Mengapa Memilih{" "}
            <span className="text-m-blue-dark">Jojo Laundry?</span>
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