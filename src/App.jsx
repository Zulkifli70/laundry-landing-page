import { useState, useContext, useRef } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Jojo Laundry", href: "#" },
    { label: "Services", href: "#" },
    { label: "Location", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <>
      <header className="flex items-center justify-between h-(--header-height) px-6 border-y fixed top-0 left-0 right-0 z-20 backdrop-blur-sm md:border-y-0 md:px-15">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-25 md:w-40" />
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

      <main>
        <section
          className="flex flex-col gap-5 px-6 h-screen pt-[calc(var(--header-height)+.5em)] md:flex-row-reverse md:items-center md:justify-center md:px-15"
          id="hero"
        >
          <div className="flex-3 rounded-md overflow-hidden ">
            <img
              src="/hero.png"
              alt="hero image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-2 flex flex-col gap-4 md:gap-10 text-center md:text-start">
            <h1 className="text-2xl font-bold md:text-5xl md:w-xl">
              Solusi Cuci Bersih & Wangi
            </h1>
            <p className="text-lg  md:w-lg">
              Kami hadir untuk memberikan solusi mencuci yang higienis dan
              profesional. Nikmati waktu Anda selagi kami merawat pakaian
              kesayangan Anda dengan sepenuh hati.
            </p>
            <button className="w-full text-center border p-3 rounded-xl max-w-lg">
              Lihat Layanan
            </button>
            <div className="flex w-full gap-2 text-center max-w-lg">
              <div className="flex-1 ">
                <h4 className="font-extrabold">Gratis Antar Jemput</h4>
                <h3 className="font-medium">Malang Sekitarnya</h3>
              </div>
              <div className="flex-1">
                <h4 className="font-extrabold">8 Jam</h4>
                <h3 className="font-medium">Layanan Kilat</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen flex justify-center items-center">
          <h1> SECTION 2</h1>
        </section>
        <section className="h-screen flex justify-center items-center">
          <h1> SECTION 3</h1>
        </section>
        <section className="h-screen flex justify-center items-center">
          <h1> SECTION 4</h1>
        </section>
      </main>
    </>
  );
}

export default App;
