import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Sparkles, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { useGSAP } from "../hooks/useGSAP";

export function Hero() {
  const bubbleRefs = useRef([]);

  const heroRef = useGSAP(() => {
    gsap.from(".hero-line", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3,
    });
    gsap.from(".hero-cta", {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 1.0,
    });
    gsap.from(".hero-sub", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.7,
      ease: "power2.out",
    });
    gsap.from(".hero-badge", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.5)",
      delay: 0.1,
    });
    gsap.from(".hero-img", {
      x: 60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  useEffect(() => {
    bubbleRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: -30 - Math.random() * 40,
        x: -10 + Math.random() * 20,
        opacity: 0.3 + Math.random() * 0.3,
        duration: 3 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  return (
    <>
      {/* Soap bubbles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {bubbleRefs.current.length === 0 &&
          Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el && !bubbleRefs.current.includes(el)) {
                  bubbleRefs.current.push(el);
                }
              }}
              className="soap-bubble"
              style={{
                width: `${20 + Math.random() * 60}px`,
                height: `${20 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(0,102,177,0.03))`,
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          ))}
      </div>

      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-canvas hero-photo-band"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-m-blue-dark/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-m-red/10 blur-3xl" />
          <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-white/[0.01] blur-2xl" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 pt-(--header-height) pb-[96px]">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-surface-card border border-hairline text-m-blue-light text-xs font-semibold uppercase tracking-[0.15em] mb-6">
                <Sparkles size={12} />
                Laundry Profesional Malang
              </div>
              <h1 className="hero-line text-display-xl text-on-dark mb-4">
                Solusi Cuci
              </h1>
              <h1 className="hero-line text-display-xl text-on-dark mb-4">
                <span className="text-m-blue-dark">Profesional</span>
              </h1>
              <h1 className="hero-line text-display-xl text-on-dark mb-8">
                untuk Anda
              </h1>
              <p className="hero-sub text-body-md text-body-strong max-w-lg mb-10">
                Jemput, cuci, setrika, dan antar kembali — dengan standar
                kebersihan tertinggi. Tanpa Anda harus keluar rumah.
              </p>
              <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#contact"
                  className="btn-primary"
                >
                  Booking Sekarang
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#services"
                  className="btn-primary-outline"
                >
                  Lihat Layanan
                </a>
              </div>
              <div className="hero-sub flex items-center gap-5 mt-4 text-body-sm text-body">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-m-blue-light" />
                  Gratis antar jemput
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={15} className="text-m-red" />
                  8 jam kilat
                </span>
              </div>
            </div>

            <div className="hero-img order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-m-blue-dark/10 via-m-blue-dark/5 to-m-red/10 rounded-none blur-2xl" />
                <img
                  src="/hero4.png"
                  alt="Jojo Laundry"
                  className="relative h-[30vh] sm:h-[35vh] md:h-[55vh] lg:h-[65vh] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}