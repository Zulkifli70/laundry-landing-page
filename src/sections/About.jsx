import { Building2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-canvas px-6 md:px-10" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img src="/hero.png" alt="Jojo Laundry" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-surface-card text-on-dark p-5">
              <div className="text-display-sm text-on-dark">8+</div>
              <div className="text-label-uppercase text-body text-xs">Tahun Pengalaman</div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-card border border-hairline text-m-blue-light text-xs font-semibold uppercase tracking-[0.15em] mb-6">
              <Building2 size={12} />
              Tentang Kami
            </span>
            <h2 className="text-display-lg text-on-dark mb-6">
              Lebih dari Sekadar{" "}
              <span className="text-m-blue-dark">Laundry Biasa</span>
            </h2>
            <p className="text-body-md text-body leading-relaxed mb-6 max-w-lg">
              Jojo Laundry adalah penyedia jasa laundry profesional yang telah
              melayani masyarakat Malang sejak 2018. Kami berkomitmen memberikan
              layanan terbaik dengan standar kebersihan tinggi, tepat waktu, dan
              harga yang terjangkau.
            </p>
            <p className="text-body-md text-body leading-relaxed mb-8 max-w-lg">
              Dengan 3 cabang yang tersebar di Malang, kami siap melayani
              kebutuhan laundry Anda — mulai dari pakaian harian, karpet,
              hingga boneka kesayangan.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="size-9 rounded-full bg-surface-card border-2 border-canvas flex items-center justify-center text-xs font-bold text-body"
                  >
                    {n}
                  </div>
                ))}
              </div>
              <div className="text-body-sm text-body">
                <span className="font-bold text-on-dark">2.400+</span> pelanggan puas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}