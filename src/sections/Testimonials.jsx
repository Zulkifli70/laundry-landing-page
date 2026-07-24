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
    <section className="bg-surface-soft px-6 md:px-10" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-card border border-hairline text-m-blue-light text-xs font-semibold uppercase tracking-[0.15em] mb-6">
            <Quote size={12} />
            Testimonial
          </span>
          <h2 className="text-display-lg text-on-dark">
            Apa Kata{" "}
            <span className="text-m-blue-dark">Pelanggan</span>
          </h2>
        </div>

        <div ref={testimonialRefs} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card opacity-0 magazine-article-card text-on-dark">
              <StarRating rating={t.rating} />
              <p className="text-body-sm text-body leading-relaxed mt-4 mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-hairline">
                <div className="size-10 rounded-none bg-surface-elevated flex items-center justify-center text-body-strong font-bold text-sm border border-hairline">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-body-sm font-bold text-on-dark">{t.name}</div>
                  <div className="text-caption text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}