import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

      gsap.from(".hero-copy > *", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray(".layer-section").forEach((section, index) => {
        gsap.set(section, { zIndex: index + 1 });

        gsap.fromTo(
          section.querySelector(".layer-card"),
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

        gsap.from(section.querySelector(".layer-title"), {
          opacity: 0,
          y: 24,
          duration: 0.7,
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
    { label: "Contact", href: "#" },
  ];
  return (
    <>
      <header className="flex justify-center h-(--header-height) border-y fixed top-0 left-0 right-0 z-20 backdrop-blur-sm md:border-y-0">
        <div className="flex items-center justify-between h-full w-11/12">
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
        <section className="flex h-screen flex-col gap-5 px-6 pb-5 pt-[calc(var(--header-height)+.5em)] md:flex-row-reverse md:items-center md:justify-center md:gap-10 md:px-10 lg:gap-16 lg:px-15">
          <div className="hero-media flex-3 min-h-0 w-full overflow-hidden rounded-md md:h-[min(62vh,34rem)] md:min-w-0 md:flex-[1.1_1_0] lg:flex-[1.25_1_0]">
            <img
              src="/hero.png"
              alt="hero image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hero-copy flex-2 flex flex-col gap-4 text-center md:min-w-0 md:flex-[0.9_1_0] md:gap-7 md:text-start lg:gap-10">
            <h1 className="text-2xl font-bold md:max-w-xl md:text-4xl lg:text-5xl">
              Solusi Cuci Bersih & Wangi
            </h1>
            <p className="text-lg md:max-w-lg">
              Kami hadir untuk memberikan solusi mencuci yang higienis dan
              profesional. Nikmati waktu Anda selagi kami merawat pakaian
              kesayangan Anda dengan sepenuh hati.
            </p>
            <button className="w-full text-center border p-3 rounded-xl max-w-lg">
              Lihat Layanan
            </button>
            <div className="flex w-full gap-2 text-center max-w-lg">
              <div className="flex-1 align-middle">
                <h4 className="font-extrabold flex items-center justify-center">
                  Gratis Antar Jemput Area Malang Kota
                </h4>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <h4 className="font-extrabold">8 Jam Layanan Kilat</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="layer-section sticky top-0 min-h-screen flex flex-col items-center justify-center pt-[calc(var(--header-height)+.5em)] bg-sky-50 px-6 gap-10 md:pt-0">
          <h2
            className="font-extrabold text-3xl text-center
          "
          >
            Mengapa Harus Jojo Laundry ?
          </h2>
          <div className="layer-card flex flex-col w-full gap-5 rounded-3xl p-3 md:flex-row md:flex-wrap md:w-11/12">
            <div className="flex flex-col flex-1 justify-center gap-3 text-center bg-white shadow-sky-200/60 shadow-2xl p-5 rounded-md">
              <h3 className="layer-title text-3xl font-bold text-gray-950 md:text-5xl">
                Cuci Kiloan, Setrika, dan Express
              </h3>
              <p className="text-lg leading-8 text-gray-700">
                Pilih layanan sesuai kebutuhan harianmu. Pakaian ditangani rapi,
                bersih, dan siap dipakai tanpa bikin jadwalmu berantakan.
              </p>
            </div>

            <div className="flex flex-col flex-1 justify-center gap-3 text-center bg-white shadow-sky-200/60 shadow-2xl p-5 rounded-md">
              <h3 className="layer-title text-3xl font-bold text-gray-950 md:text-5xl">
                Cuci Kiloan, Setrika, dan Express
              </h3>
              <p className="text-lg leading-8 text-gray-700">
                Pilih layanan sesuai kebutuhan harianmu. Pakaian ditangani rapi,
                bersih, dan siap dipakai tanpa bikin jadwalmu berantakan.
              </p>
            </div>

            <div className="flex flex-col flex-1 justify-center gap-3 text-center bg-white shadow-sky-200/60 shadow-2xl p-5 rounded-md">
              <h3 className="layer-title text-3xl font-bold text-gray-950 md:text-5xl">
                Cuci Kiloan, Setrika, dan Express
              </h3>
              <p className="text-lg leading-8 text-gray-700">
                Pilih layanan sesuai kebutuhan harianmu. Pakaian ditangani rapi,
                bersih, dan siap dipakai tanpa bikin jadwalmu berantakan.
              </p>
            </div>

            <div className="flex flex-col flex-1 justify-center gap-3 text-center bg-white shadow-sky-200/60 shadow-2xl p-5 rounded-md">
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
        <section className="layer-section sticky top-0 h-screen flex items-center justify-center bg-emerald-50 px-6">
          <div className="layer-card grid w-full max-w-5xl gap-5 rounded-3xl bg-white p-8 shadow-2xl shadow-emerald-200/60 md:grid-cols-[1fr_1.2fr] md:p-12">
            <div className="flex flex-col justify-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Proses
              </p>
              <h1 className="layer-title text-3xl font-bold text-gray-950 md:text-5xl">
                Higienis dari Pickup sampai Packing
              </h1>
            </div>
            <p className="text-lg leading-8 text-gray-700">
              Setiap order dipisah, dicuci dengan standar bersih, lalu dikemas
              supaya tetap wangi saat sampai di rumahmu.
            </p>
          </div>
        </section>
        <section className="layer-section sticky top-0 h-screen flex items-center justify-center bg-amber-50 px-6">
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
