import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-canvas px-6 md:px-10" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-card border border-hairline text-m-blue-light text-xs font-semibold uppercase tracking-[0.15em] mb-6">
              <MessageCircle size={12} />
              Hubungi Kami
            </span>
            <h2 className="text-display-lg text-on-dark mb-6">
              Siap Membantu
              <br />
              <span className="text-m-blue-dark">Kebutuhan Laundry</span> Anda
            </h2>
            <p className="text-body-md text-body leading-relaxed mb-10 max-w-md">
              Isi form atau hubungi kami langsung melalui WhatsApp. Tim kami akan merespon
              dalam waktu kurang dari 30 menit.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-none bg-surface-card border border-hairline flex items-center justify-center">
                  <Phone size={18} className="text-m-blue-light" />
                </div>
                <div>
                  <div className="text-caption text-muted">Telepon</div>
                  <div className="text-body-sm font-bold text-on-dark">0822-xxxx-xxxx</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-none bg-surface-card border border-hairline flex items-center justify-center">
                  <Mail size={18} className="text-m-blue-light" />
                </div>
                <div>
                  <div className="text-caption text-muted">Email</div>
                  <div className="text-body-sm font-bold text-on-dark">hello@jojolaundry.id</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-none bg-surface-card border border-hairline flex items-center justify-center">
                  <MapPin size={18} className="text-m-blue-light" />
                </div>
                <div>
                  <div className="text-caption text-muted">Jam Operasional</div>
                  <div className="text-body-sm font-bold text-on-dark">Senin - Sabtu, 07.00 - 17.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-card border border-hairline p-6 md:p-8">
            <h3 className="text-title-lg text-on-dark mb-6">Form Booking</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-label-uppercase text-muted mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="text-input"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-label-uppercase text-muted mb-1.5">No. Telepon</label>
                  <input
                    type="tel"
                    placeholder="08xx-xxxx-xxxx"
                    className="text-input"
                  />
                </div>
                <div>
                  <label className="block text-label-uppercase text-muted mb-1.5">Layanan</label>
                  <select className="text-input bg-surface-card text-on-dark appearance-none">
                    <option>Pilih layanan</option>
                    <option>Cuci + Setrika</option>
                    <option>Cuci Kering</option>
                    <option>Setrika Saja</option>
                    <option>Laundry Kilat</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-label-uppercase text-muted mb-1.5">Alamat Jemput</label>
                <textarea
                  rows={2}
                  placeholder="Masukkan alamat lengkap"
                  className="text-input resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                <MessageCircle size={16} />
                Kirim Permintaan Booking
              </button>
              <p className="text-caption text-center text-muted">
                Atau hubungi langsung via{" "}
                <a href="#" className="text-link text-m-blue-light text-sm">WhatsApp</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}