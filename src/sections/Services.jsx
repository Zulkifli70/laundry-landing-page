import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shirt } from "lucide-react";
import { serviceItems } from "../data";
import { useGSAP } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

function ServiceCard({ item }) {
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
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
      className="opacity-0 translate-y-8 scale-95 overflow-hidden rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-rose-200/50 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-50 p-6 flex items-center justify-center">
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-contain transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-navy mb-1.5">{item.label}</h3>
        <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export function Services() {
  const serviceRefs = useGSAP(() => {
    gsap.utils.toArray(".service-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true,
        },
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.5,
        delay: i * 0.05,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-slate-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-50 text-rose text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            <Shirt size={12} />
            Layanan
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-navy leading-tight">
            Jenis Layanan{" "}
            <span className="gradient-accent">Kami</span>
          </h2>
          <p className="text-slate mt-3 text-sm">
            Kami menangani berbagai jenis bahan dan barang dengan teknik pencucian yang sesuai.
          </p>
        </div>

        <div ref={serviceRefs} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {serviceItems.map((item) => (
            <ServiceCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
