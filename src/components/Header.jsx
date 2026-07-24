import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "../data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 top-nav transition-all duration-500 ${
          scrolled ? "border-b border-hairline" : ""
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-[1440px] h-(--header-height) mx-auto px-6 md:px-10">
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.png" alt="Jojo Laundry" className="h-8 md:h-10 transition-transform duration-300" />
          </a>
          <nav className="hidden md:flex md:items-center md:gap-1 text-nav-link">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body hover:text-on-dark transition-colors duration-300 px-3 py-2 text-label-uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 btn-primary"
            >
              Booking
              <ArrowRight size={16} />
            </a>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close" : "Menu"}
            className="relative size-9 md:hidden rounded-none border border-hairline bg-surface-card flex items-center justify-center hover:bg-surface-elevated transition-all text-on-dark"
          >
            {isOpen ? <X size={18} className="text-on-dark" /> : <Menu size={18} className="text-on-dark" />}
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <div
        className={`fixed top-(--header-height) left-0 right-0 z-40 md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-5 bg-canvas border-b border-hairline shadow-lg">
          <div className="m-stripe-divider mb-4" />
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="py-3 px-4 text-label-uppercase text-body hover:text-on-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 btn-primary w-full"
          >
            Booking Sekarang
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </>
  );
}