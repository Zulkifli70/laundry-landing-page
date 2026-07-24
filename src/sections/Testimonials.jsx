import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { testimonials } from "../data";
import { useGSAP } from "../hooks/useGSAP";
import { StarRating } from "../components/StarRating";

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const testimonialRefs = useGSAP(() => {
    gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: i * 0.12,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-slate-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-50 text-rose text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            <Quote size={12} />
            Testimonial
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-navy leading-tight">
            Apa Kata{" "}
            <span className="gradient-accent">Pelanggan</span>
          </h2>
        </div>

        <div ref={testimonialRefs} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card opacity-0 bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all duration-400">
              <StarRating rating={t.rating} />
              <p className="text-sm text-slate leading-relaxed mt-4 mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="size-10 rounded-full bg-rose-50 flex items-center justify-center text-rose font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-slate">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
