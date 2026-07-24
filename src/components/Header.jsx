import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "../data";
import { NavLink } from "./NavLink";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl h-(--header-height) mx-auto px-6 md:px-10">
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.png" alt="Jojo Laundry" className="w-24 md:w-28 transition-transform duration-300" />
          </a>
          <nav className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} label={link.label} />
            ))}
            <a
              href="#contact"
              className="ml-4 flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-light transition-all duration-300 shadow-sm"
            >
              Booking
              <ArrowRight size={16} />
            </a>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close" : "Menu"}
            className="relative size-9 md:hidden rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all"
          >
            {isOpen ? <X size={18} className="text-navy" /> : <Menu size={18} className="text-navy" />}
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <div
        className={`fixed top-(--header-height) left-0 right-0 z-40 md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-5 bg-white border-b border-slate-100 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="py-3 px-4 text-navy font-medium rounded-lg hover:bg-slate-50 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-lg font-semibold"
          >
            Booking Sekarang
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </>
  );
}
