import { Building2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img src="/hero.png" alt="Jojo Laundry" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-navy text-white p-5 rounded-xl shadow-xl">
              <div className="text-3xl font-black">8+</div>
              <div className="text-xs text-slate-300">Tahun Pengalaman</div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-50 text-rose text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <Building2 size={12} />
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-5">
              Lebih dari Sekadar{" "}
              <span className="gradient-accent">Laundry Biasa</span>
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              Jojo Laundry adalah penyedia jasa laundry profesional yang telah
              melayani masyarakat Malang sejak 2018. Kami berkomitmen memberikan
              layanan terbaik dengan standar kebersihan tinggi, tepat waktu, dan
              harga yang terjangkau.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              Dengan 3 cabang yang tersebar di Malang, kami siap melayani
              kebutuhan laundry Anda — mulai dari pakaian harian, karpet,
              hingga boneka kesayangan.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="size-9 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate">
                    {n}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate">
                <span className="font-bold text-navy">2.400+</span> pelanggan puas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
