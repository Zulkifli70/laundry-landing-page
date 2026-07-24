import { Truck, ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-rose">
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
            Gratis Antar Jemput untuk Area Malang Kota
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-lg mx-auto mb-8">
            Pesan sekarang dan nikmati layanan laundry profesional tanpa perlu
            keluar rumah. Kami jemput, cuci, setrika, dan antar kembali.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-white text-rose px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-white/90 transition-all duration-300 shadow-lg"
          >
            <Truck size={18} />
            Booking Sekarang — Gratis!
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
