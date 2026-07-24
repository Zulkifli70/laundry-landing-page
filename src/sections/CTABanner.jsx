import { Truck, ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-canvas border-t border-hairline px-6 md:px-10" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <div className="m-stripe-divider mb-8 max-w-[100px] mx-auto" />
          <h2 className="text-display-md text-on-dark mb-6">
            Gratis Antar Jemput untuk Area Malang Kota
          </h2>
          <p className="text-body-md text-body max-w-lg mx-auto mb-10">
            Pesan sekarang dan nikmati layanan laundry profesional tanpa perlu
            keluar rumah. Kami jemput, cuci, setrika, dan antar kembali.
          </p>
          <a
            href="#contact"
            className="btn-primary"
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