import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-amber-300 text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <MessageCircle size={12} />
              Hubungi Kami
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5">
              Siap Membantu
              <br />
              <span className="gradient-accent">Kebutuhan Laundry</span> Anda
            </h2>
            <p className="text-slate-300/70 text-sm leading-relaxed mb-8 max-w-md">
              Isi form atau hubungi kami langsung melalui WhatsApp. Tim kami akan merespon
              dalam waktu kurang dari 30 menit.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone size={18} className="text-rose" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Telepon</div>
                  <div className="text-sm font-semibold text-white">0822-xxxx-xxxx</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail size={18} className="text-rose" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="text-sm font-semibold text-white">hello@jojolaundry.id</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin size={18} className="text-rose" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Jam Operasional</div>
                  <div className="text-sm font-semibold text-white">Senin - Sabtu, 07.00 - 17.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-navy mb-5">Form Booking</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-slate mb-1.5 uppercase tracking-wider">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate mb-1.5 uppercase tracking-wider">No. Telepon</label>
                  <input
                    type="tel"
                    placeholder="08xx-xxxx-xxxx"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate mb-1.5 uppercase tracking-wider">Layanan</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose transition-all appearance-none">
                    <option>Pilih layanan</option>
                    <option>Cuci + Setrika</option>
                    <option>Cuci Kering</option>
                    <option>Setrika Saja</option>
                    <option>Laundry Kilat</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate mb-1.5 uppercase tracking-wider">Alamat Jemput</label>
                <textarea
                  rows={2}
                  placeholder="Masukkan alamat lengkap"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-navy text-white py-3.5 rounded-lg text-sm font-bold hover:bg-navy-light transition-all duration-300"
              >
                <MessageCircle size={16} />
                Kirim Permintaan Booking
              </button>
              <p className="text-xs text-center text-slate-300">
                Atau hubungi langsung via{" "}
                <a href="#" className="text-rose font-semibold hover:underline">WhatsApp</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
