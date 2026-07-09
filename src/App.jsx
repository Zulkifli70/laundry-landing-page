import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-media", {
        opacity: 0,
        y: 48,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-copy > :not(.hero-cta)", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        y: 16,
        scale: 0.98,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.utils.toArray(".layer-section").forEach((section, index) => {
        gsap.set(section, { zIndex: index + 1 });

        const layerCard = section.querySelector(".layer-card");
        const layerTitles = section.querySelectorAll(".layer-title");

        gsap.fromTo(
          layerCard,
          {
            opacity: 0,
            y: 90,
            scale: 0.92,
            clipPath: "inset(18% 8% 0% 8% round 24px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              end: "top 18%",
              scrub: 1,
            },
          },
        );

        gsap.from(layerTitles, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 55%",
          },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { label: "Jojo Laundry", href: "#" },
    { label: "Services", href: "#" },
    { label: "Location", href: "#" },
    { label: "Contact Us", href: "#" },
  ];
  return (
    <>
      <header className="flex justify-center h-(--header-height) shadow-lg fixed top-0 left-0 right-0 z-20 backdrop-blur-sm">
        <div className="flex items-center justify-between w-full h-full md:max-w-4/5 px-7">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-25 md:w-35" />
          </div>
          <nav className="hidden md:flex md:gap-6 md:px-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-800 hover:text-amber-600"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open Navigation"
            aria-expanded={isOpen}
            className="relative size-8 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`absolute inset-0 size-8 transition-all duration-200 ${isOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`absolute inset-0 size-8 transition-all duration-200 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </header>
      <div
        className={`fixed top-16 left-0 right-0 z-10 md:hidden bg-white shadow-md transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-5">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="py-2 text-gray-800">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <main ref={mainRef}>
        <section className="flex min-h-screen justify-center overflow-hidden bg-linear-to-b from-white via-white to-jojo-pink-light pt-(--header-height)">
          <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-6 py-8 sm:px-8 md:flex-row-reverse md:gap-10 md:py-12 lg:gap-16">
            <div className="hero-media flex w-full justify-center md:flex-1">
              <img
                src="/hero4.png"
                alt="hero image"
                className="h-[38vh] max-h-80 w-full object-contain drop-shadow-[0_24px_45px_rgba(255,107,139,0.16)] sm:h-[42vh] md:h-[min(62vh,35rem)] md:max-h-none"
              />
            </div>
            <div className="hero-copy flex w-full max-w-xl flex-col items-center gap-6 text-center md:flex-1 md:items-start md:text-start">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-jojo-pink">
                  Laundry express Malang
                </p>
                <h1 className="text-3xl font-extrabold leading-tight text-jojo-dark sm:text-4xl md:text-5xl lg:text-6xl">
                  Cucian Numpuk?
                  <span className="block text-jojo-pink">
                    Jojo yang beresin.
                  </span>
                </h1>
                <p className="mx-auto max-w-md text-sm leading-7 text-jojo-gray sm:text-base md:mx-0">
                  Jemput, cuci, setrika, dan antar kembali dengan hasil bersih
                  rapi tanpa mengganggu jadwal harianmu.
                </p>
              </div>

              <button className="hero-cta flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-full border border-[#f94772] bg-[#ff4f78] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(255,79,120,0.32)] transition hover:-translate-y-0.5 hover:bg-[#f94772] active:translate-y-0 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-pink-200 sm:w-auto">
                <Truck size={20} />
                Pesan sekarang
              </button>

              <div className="grid w-full max-w-lg grid-cols-1 gap-3 pt-2 text-left sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-white/75 p-4 shadow-sm">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pink-50 text-jojo-pink">
                    <Truck size={20} />
                  </span>
                  <h4 className="text-sm font-bold leading-5 text-jojo-dark">
                    Gratis antar jemput area Malang Kota
                  </h4>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-white/75 p-4 shadow-sm">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pink-50 text-jojo-pink">
                    <Zap size={20} />
                  </span>
                  <h4 className="text-sm font-bold leading-5 text-jojo-dark">
                    8 Jam Layanan Kilat
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layer-section flex min-h-screen flex-col items-center justify-start gap-10 bg-sky-50 px-6 py-[calc(var(--header-height)+1em)] md:sticky md:top-0 md:justify-center md:py-0">
          <h2
            className="font-extrabold text-3xl text-center
          "
          >
            Mengapa Harus Jojo Laundry ?
          </h2>
          <div className="layer-card flex w-full flex-col gap-5 rounded-3xl p-3 md:w-11/12 md:flex-row md:flex-wrap">
            <div className="flex flex-col flex-1 justify-center gap-3 text-center shadow-md bg-white p-5 rounded-md">
              <h3 className="layer-title text-3xl font-bold text-gray-950 md:text-5xl">
                Cuci Kiloan, Setrika, dan Express
              </h3>
              <p className="text-lg leading-8 text-gray-700">
                Pilih layanan sesuai kebutuhan harianmu. Pakaian ditangani rapi,
                bersih, dan siap dipakai tanpa bikin jadwalmu berantakan.
              </p>
            </div>

            <div className="flex flex-col flex-1 justify-center gap-3 text-center shadow-md bg-white p-5 rounded-md">
              <h3 className="layer-title text-3xl font-bold text-gray-950 md:text-5xl">
                Cuci Kiloan, Setrika, dan Express
              </h3>
              <p className="text-lg leading-8 text-gray-700">
                Pilih layanan sesuai kebutuhan harianmu. Pakaian ditangani rapi,
                bersih, dan siap dipakai tanpa bikin jadwalmu berantakan.
              </p>
            </div>

            <div className="flex flex-col flex-1 justify-center gap-3 text-center shadow-md bg-white p-5 rounded-md">
              <h3 className="layer-title text-3xl font-bold text-gray-950 md:text-5xl">
                Cuci Kiloan, Setrika, dan Express
              </h3>
              <p className="text-lg leading-8 text-gray-700">
                Pilih layanan sesuai kebutuhan harianmu. Pakaian ditangani rapi,
                bersih, dan siap dipakai tanpa bikin jadwalmu berantakan.
              </p>
            </div>

            <div className="flex flex-col flex-1 justify-center gap-3 text-center shadow-md bg-white p-5 rounded-md">
              <h3 className="layer-title text-3xl font-bold text-gray-950 md:text-5xl">
                Cuci Kiloan, Setrika, dan Express
              </h3>
              <p className="text-lg leading-8 text-gray-700">
                Pilih layanan sesuai kebutuhan harianmu. Pakaian ditangani rapi,
                bersih, dan siap dipakai tanpa bikin jadwalmu berantakan.
              </p>
            </div>
          </div>
        </section>
        <section className="layer-section flex flex-col min-h-screen items-center justify-center bg-emerald-50 px-6 py-[calc(var(--header-height)+1em)] md:sticky md:top-0 md:h-screen md:py-0 md:gap-5">
          <h2
            className="font-extrabold text-3xl text-center
          "
          >
            Layanan Jojo Laundry
          </h2>
          <div className="layer-card grid w-full grid-cols-2 gap-3 rounded-3xl p-3 sm:grid-cols-4 md:w-11/12 md:grid-cols-4 md:grid-rows-2 md:gap-4 lg:max-w-6xl">
            <div className="flex h-40 flex-col justify-between gap-2 rounded-md bg-white p-4 text-center shadow-md md:h-52 lg:h-56">
              <div className="flex h-24 items-center justify-center md:h-32">
                <img
                  src="/baju.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="layer-title text-2xl font-bold text-gray-950 md:text-3xl lg:text-4xl">
                Pakaian
              </h3>
            </div>

            <div className="flex h-40 flex-col justify-between gap-2 rounded-md bg-white p-4 text-center shadow-md md:h-52 lg:h-56">
              <div className="flex h-24 items-center justify-center md:h-32">
                <img
                  src="/boneka.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="layer-title text-2xl font-bold text-gray-950 md:text-3xl lg:text-4xl">
                Boneka
              </h3>
            </div>

            <div className="flex h-40 flex-col justify-between gap-2 rounded-md bg-white p-4 text-center shadow-md md:h-52 lg:h-56">
              <div className="flex h-24 items-center justify-center md:h-32">
                <img
                  src="/karpet.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="layer-title text-2xl font-bold text-gray-950 md:text-3xl lg:text-4xl">
                Karpet
              </h3>
            </div>

            <div className="flex h-40 flex-col justify-between gap-2 rounded-md bg-white p-4 text-center shadow-md md:h-52 lg:h-56">
              <div className="flex h-24 items-center justify-center md:h-32">
                <img
                  src="/tas.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="layer-title text-2xl font-bold text-gray-950 md:text-3xl lg:text-4xl">
                Tas
              </h3>
            </div>

            <div className="flex h-40 flex-col justify-between gap-2 rounded-md bg-white p-4 text-center shadow-md md:h-52 lg:h-56">
              <div className="flex h-24 items-center justify-center md:h-32">
                <img
                  src="/helm.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="layer-title text-2xl font-bold text-gray-950 md:text-3xl lg:text-4xl">
                Helm
              </h3>
            </div>

            <div className="flex h-40 flex-col justify-between gap-2 rounded-md bg-white p-4 text-center shadow-md md:h-52 lg:h-56">
              <div className="flex h-24 items-center justify-center md:h-32">
                <img
                  src="/sprei.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="layer-title text-2xl font-bold text-gray-950 md:text-3xl lg:text-4xl">
                Sprei
              </h3>
            </div>

            <div className="flex h-40 flex-col justify-between gap-2 rounded-md bg-white p-4 text-center shadow-md md:h-52 lg:h-56">
              <div className="flex h-24 items-center justify-center md:h-32">
                <img
                  src="/selimut.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="layer-title text-2xl font-bold text-gray-950 md:text-3xl lg:text-4xl">
                Selimut
              </h3>
            </div>

            <div className="flex h-40 flex-col justify-between gap-2 rounded-md bg-white p-4 text-center shadow-md md:h-52 lg:h-56">
              <div className="flex h-24 items-center justify-center md:h-32">
                <img
                  src="/sepatu.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="layer-title text-2xl font-bold text-gray-950 md:text-3xl lg:text-4xl">
                Sepatu
              </h3>
            </div>
          </div>
        </section>
        <section className="layer-section flex min-h-screen items-center justify-center bg-amber-50 px-6 py-[calc(var(--header-height)+1em)] md:sticky md:top-0 md:h-screen md:py-0">
          <div className="layer-card grid w-full max-w-5xl gap-5 rounded-3xl bg-white p-8 shadow-2xl shadow-amber-200/60 md:grid-cols-[1fr_1.2fr] md:p-12">
            <div className="flex flex-col justify-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                Antar Jemput
              </p>
              <h1 className="layer-title text-3xl font-bold text-gray-950 md:text-5xl">
                Tinggal Chat, Kami Datang
              </h1>
            </div>
            <p className="text-lg leading-8 text-gray-700">
              Cocok untuk anak kos, keluarga, dan pekerja sibuk di Malang.
              Jadwalkan pickup, lalu lanjutkan harimu seperti biasa.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
