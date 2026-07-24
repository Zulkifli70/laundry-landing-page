import { useState, useEffect, useRef, useCallback } from "react";
import {
  Truck,
  Zap,
  BadgeCheck,
  HandCoins,
  Phone,
  Mail,
  Navigation,
  Sparkles,
  ShieldCheck,
  Clock,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function AnimateIn({ children, className = "", delay = 0, type = "up" }) {
  const [ref, inView] = useInView(0.1);
  const animClass =
    type === "left"
      ? "animate-on-scroll-left"
      : type === "right"
        ? "animate-on-scroll-right"
        : type === "scale"
          ? "animate-on-scroll-scale"
          : "animate-on-scroll";

  return (
    <div
      ref={ref}
      className={`${animClass} ${className} ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function FloatingBubble({ size, color, left, top, duration, delay }) {
  return (
    <div
      className="absolute rounded-full opacity-20 pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-gray-700 font-medium hover:text-jojo-pink transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-jojo-pink after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </a>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Mengapa Kami", href: "#why" },
    { label: "Layanan", href: "#services" },
    { label: "Lokasi", href: "#location" },
  ];

  const whyItems = [
    {
      icon: ShieldCheck,
      color: "bg-green-100",
      iconColor: "text-green-600",
      title: "Sudah Terpercaya",
      desc: "Ratusan pelanggan telah mempercayakan pakaian mereka kepada kami. Proses higienis, aman, dan bergaransi.",
    },
    {
      icon: HandCoins,
      color: "bg-pink-100",
      iconColor: "text-jojo-pink",
      title: "Cuci Kiloan Murah",
      desc: "Dari kaos harian sampai Karpet dan bed cover. Solusi lengkap untuk segala jenis bahan pakaianmu.",
    },
    {
      icon: Zap,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Layanan Express",
      desc: "Butuh pakaian bersih besok pagi? Layanan kilat kami siap mengembalikan pakaianmu dalam kondisi rapi dan wangi.",
    },
  ];

  const serviceItems = [
    { label: "Pakaian", image: "/baju.png" },
    { label: "Boneka", image: "/boneka.png" },
    { label: "Karpet", image: "/karpet.png" },
    { label: "Tas", image: "/tas.png" },
    { label: "Helm", image: "/helm.png" },
    { label: "Sprei", image: "/sprei.png" },
    { label: "Selimut", image: "/selimut.png" },
    { label: "Sepatu", image: "/sepatu.png" },
  ];

  const locations = [
    {
      nama: "Merjosari",
      jalan: "Jl Kenangan",
      gambar: "/hero.png",
      jadwal: "Senin-Jumat: 7.00-17-00",
    },
    {
      nama: "Sigura-gura",
      jalan: "Jl Sigura gura",
      gambar: "/hero.png",
      jadwal: "Senin-Jumat: 7.00-17-00",
    },
    {
      nama: "Sengkaling",
      jalan: "Jl Sengkaling",
      gambar: "/hero.png",
      jadwal: "Senin-Jumat: 7.00-17-00",
    },
  ];

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Floating Background Bubbles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <FloatingBubble size={300} color="#ff6b8b" left={-5} top={10} duration={7} delay={0} />
        <FloatingBubble size={200} color="#f97316" left={85} top={20} duration={9} delay={1} />
        <FloatingBubble size={250} color="#ff6b8b" left={70} top={60} duration={8} delay={2} />
        <FloatingBubble size={180} color="#60a5fa" left={10} top={70} duration={10} delay={0.5} />
        <FloatingBubble size={150} color="#ff6b8b" left={45} top={85} duration={7.5} delay={3} />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl h-(--header-height) mx-auto px-7">
          <a href="#home" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="logo" className="w-25 md:w-35 transition-transform duration-300 group-hover:scale-105" />
          </a>
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} label={link.label} />
            ))}
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
            aria-expanded={isOpen}
            className="relative size-10 md:hidden rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-all"
          >
            {isOpen ? <X size={22} className="text-jojo-dark" /> : <Menu size={22} className="text-jojo-dark" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-(--header-height) left-0 right-0 z-40 md:hidden transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 p-6 bg-white/90 backdrop-blur-xl shadow-xl border-t border-pink-100">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="py-3 px-4 text-gray-800 font-medium rounded-xl hover:bg-pink-50 hover:text-jojo-pink transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <main className="relative z-10">
        {/* ============ HERO ============ */}
        <section id="home" className="relative min-h-screen flex justify-center overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white pt-(--header-height)">
          <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-6 py-8 sm:px-8 md:flex-row-reverse md:gap-12 md:py-12 lg:gap-20">
            {/* Hero Image */}
            <AnimateIn type="right" className="hero-media flex w-full justify-center md:flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-jojo-pink/20 via-transparent to-orange-200/20 rounded-full blur-3xl -z-10 animate-float" />
                <img
                  src="/hero4.png"
                  alt="hero image"
                  className="h-[38vh] max-h-80 w-full object-contain drop-shadow-[0_30px_60px_rgba(255,107,139,0.2)] animate-float sm:h-[42vh] md:h-[min(62vh,35rem)] md:max-h-none"
                />
              </div>
            </AnimateIn>

            {/* Hero Copy */}
            <div className="hero-copy flex w-full max-w-xl flex-col items-center gap-6 text-center md:flex-1 md:items-start md:text-start">
              <AnimateIn type="up" className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jojo-pink/10 border border-jojo-pink/20 text-jojo-pink text-xs font-semibold uppercase tracking-[0.2em]">
                  <Sparkles size={14} />
                  Laundry Malang
                  <Sparkles size={14} />
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight text-jojo-dark">
                  Cucian
                  <br />
                  <span className="gradient-text">Numpuk?</span>
                  <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-jojo-dark mt-2">
                    <span className="gradient-text-alt">Jojo</span> yang beresin.
                  </span>
                </h1>
                <p className="mx-auto max-w-md text-base leading-7 text-jojo-gray/80 sm:text-lg md:mx-0">
                  Jemput, cuci, setrika, dan antar kembali dengan hasil bersih
                  rapi tanpa mengganggu jadwal harianmu.
                </p>
              </AnimateIn>

              <AnimateIn type="up" delay={200}>
                <button className="group relative flex min-h-14 w-full max-w-xs items-center justify-center gap-3 rounded-full bg-gradient-to-r from-jojo-pink to-orange-400 px-8 py-4 text-base font-bold text-white shadow-[0_12px_32px_rgba(255,107,139,0.35)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(255,107,139,0.45)] hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-pink-200 sm:w-auto overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Truck size={20} className="group-hover:animate-wiggle" />
                  <span>Pesan sekarang</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </AnimateIn>

              <AnimateIn type="up" delay={400}>
                <div className="grid w-full max-w-lg grid-cols-1 gap-3 pt-2 text-left sm:grid-cols-2">
                  <div className="group flex items-center gap-3 rounded-2xl border border-pink-100 bg-white/60 backdrop-blur-sm p-4 shadow-sm hover:shadow-md hover:bg-white/80 hover:border-jojo-pink/30 transition-all duration-300">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-jojo-pink group-hover:bg-jojo-pink group-hover:text-white transition-all duration-300">
                      <Truck size={20} />
                    </span>
                    <h4 className="text-sm font-bold leading-5 text-jojo-dark">
                      Gratis antar jemput area Malang Kota
                    </h4>
                  </div>
                  <div className="group flex items-center gap-3 rounded-2xl border border-pink-100 bg-white/60 backdrop-blur-sm p-4 shadow-sm hover:shadow-md hover:bg-white/80 hover:border-jojo-pink/30 transition-all duration-300">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-jojo-pink group-hover:bg-jojo-pink group-hover:text-white transition-all duration-300">
                      <Zap size={20} />
                    </span>
                    <h4 className="text-sm font-bold leading-5 text-jojo-dark">
                      8 Jam Layanan Kilat
                    </h4>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* ============ WHY US ============ */}
        <section id="why" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-sky-50/50 to-white">
          <div className="max-w-7xl mx-auto">
            <AnimateIn type="up" className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jojo-pink/10 border border-jojo-pink/20 text-jojo-pink text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                <Star size={14} />
                Keunggulan Kami
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-jojo-dark leading-tight">
                Mengapa Harus{" "}
                <span className="relative inline-block px-2">
                  <span className="absolute left-0 bottom-1 md:bottom-2 z-0 h-4 md:h-6 w-full rounded-sm bg-jojo-pink/70 -rotate-1"></span>
                  <span className="relative z-10 gradient-text">Jojo Laundry</span>
                </span>
                ?
              </h2>
            </AnimateIn>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {whyItems.map((item, i) => (
                <AnimateIn key={item.title} type="up" delay={i * 150}>
                  <div className="group relative h-full rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-jojo-pink/20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-jojo-pink/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:from-jojo-pink/10" />
                    <div className={`relative z-10 flex size-16 items-center justify-center rounded-2xl ${item.color} mb-6 group-hover:scale-110 transition-all duration-500`}>
                      <item.icon size={32} className={item.iconColor} />
                    </div>
                    <h3 className="text-2xl font-bold text-jojo-dark mb-4 group-hover:text-jojo-pink transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="leading-7 text-jojo-gray/80">
                      {item.desc}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section id="services" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-emerald-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <AnimateIn type="up" className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jojo-pink/10 border border-jojo-pink/20 text-jojo-pink text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                <Sparkles size={14} />
                Layanan Kami
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-jojo-dark leading-tight">
                Apa Saja yang{" "}
                <span className="gradient-text-alt">Kami Cuci?</span>
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {serviceItems.map((item, i) => (
                <AnimateIn key={item.label} type="scale" delay={i * 80}>
                  <div className="group relative h-44 md:h-56 lg:h-64 flex flex-col justify-between gap-2 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-jojo-pink/20 overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-jojo-pink/0 via-transparent to-jojo-pink/0 group-hover:from-jojo-pink/5 group-hover:to-orange-200/10 transition-all duration-500" />
                    <div className="relative z-10 flex h-24 shrink-0 items-center justify-center md:h-32">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_8px_16px_rgba(255,107,139,0.25)]"
                      />
                    </div>
                    <h3 className="relative z-10 flex h-9 shrink-0 items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold text-jojo-pink group-hover:text-jojo-dark transition-colors duration-300">
                      {item.label}
                    </h3>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============ LOCATION ============ */}
        <section id="location" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <AnimateIn type="up" className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jojo-pink/10 border border-jojo-pink/20 text-jojo-pink text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                <Navigation size={14} />
                Lokasi Kami
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-jojo-dark leading-tight">
                Temukan Cabang{" "}
                <span className="gradient-text">Terdekat</span>
              </h2>
              <p className="mt-4 text-lg text-jojo-gray/70 max-w-xl mx-auto">
                Temukan cabang Jojo Laundry terdekat dari rumahmu
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {locations.map((loc, i) => (
                <AnimateIn key={loc.nama} type="up" delay={i * 150}>
                  <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-jojo-pink/20">
                    <div className="absolute bottom-0 left-0 top-0 z-10 w-1.5 bg-gradient-to-b from-jojo-pink to-orange-400 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="h-52 overflow-hidden">
                      <img
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={loc.gambar}
                        alt={loc.nama}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="flex grow flex-col p-6">
                      <div className="mb-3 flex items-start justify-between">
                        <h3 className="text-2xl font-bold text-jojo-dark group-hover:text-jojo-pink transition-colors duration-300">
                          {loc.nama}
                        </h3>
                        <span className="flex size-10 items-center justify-center rounded-full bg-jojo-pink/10 text-jojo-pink group-hover:bg-jojo-pink group-hover:text-white transition-all duration-300">
                          <Navigation size={18} />
                        </span>
                      </div>
                      <p className="mb-4 text-sm leading-6 text-jojo-gray/70">
                        {loc.jalan}
                      </p>
                      <div className="mb-5 flex flex-col gap-1 text-sm text-jojo-gray/70 sm:flex-row sm:items-center sm:gap-3">
                        <span>Jam Buka</span>
                        <span className="font-semibold text-jojo-dark">
                          {loc.jadwal}
                        </span>
                      </div>
                      <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
                        <div className="flex gap-3">
                          <a
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-jojo-gray transition-all duration-300 hover:bg-jojo-pink hover:text-white hover:shadow-lg"
                            href="tel:+62215550123"
                            title="Telepon"
                          >
                            <Phone size={18} />
                          </a>
                          <a
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-jojo-gray transition-all duration-300 hover:bg-jojo-pink hover:text-white hover:shadow-lg"
                            href="mailto:hq@geolocate.co.id"
                            title="Email"
                          >
                            <Mail size={18} />
                          </a>
                        </div>
                        <a
                          className="flex items-center gap-2 text-sm font-semibold text-jojo-pink hover:text-orange-500 transition-colors group/link"
                          href="#"
                        >
                          Petunjuk Jalan
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-b from-white to-jojo-pink/5 border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img src="/logo.png" alt="Jojo Laundry" className="h-12 mx-auto mb-4 opacity-60" />
          <p className="text-jojo-gray/60 text-sm">
            &copy; {new Date().getFullYear()} Jojo Laundry. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
