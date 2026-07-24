import {
  Users,
  Building2,
  Clock,
  Award,
  Droplets,
  Thermometer,
  Wind,
  Truck,
  ShieldCheck,
} from "lucide-react";

export const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Keunggulan", href: "#why" },
  { label: "Kontak", href: "#contact" },
];

export const stats = [
  { value: "2.400+", label: "Pelanggan Puas", icon: Users },
  { value: "3", label: "Cabang Malang", icon: Building2 },
  { value: "8 Jam", label: "Layanan Kilat", icon: Clock },
  { value: "100%", label: "Garansi Bersih", icon: Award },
];

export const serviceItems = [
  { label: "Pakaian", image: "/baju.png", desc: "Cuci & setrika pakaian harian" },
  { label: "Karpet", image: "/karpet.png", desc: "Cuci karpet hingga bed cover" },
  { label: "Boneka", image: "/boneka.png", desc: "Boneka kesayangan bersih kembali" },
  { label: "Tas", image: "/tas.png", desc: "Tas kulit, kanvas, dan ransel" },
  { label: "Helm", image: "/helm.png", desc: "Helm bersih wangi bebas kuman" },
  { label: "Sprei", image: "/sprei.png", desc: "Sprei dan sarung bantal" },
  { label: "Selimut", image: "/selimut.png", desc: "Selimut tebal sekalipun" },
  { label: "Sepatu", image: "/sepatu.png", desc: "Sepatu putih kinclong lagi" },
];

export const whyItems = [
  {
    icon: Droplets,
    title: "Proses Higienis",
    desc: "Menggunakan deterjen berkualitas dan teknik pencucian yang terstandarisasi untuk hasil maksimal.",
  },
  {
    icon: Thermometer,
    title: "Setrika Rapi",
    desc: "Disetrika dengan suhu yang tepat sesuai jenis kain. Hasil rapi, wangi, dan bebas kusut.",
  },
  {
    icon: Wind,
    title: "Pengeringan Sempurna",
    desc: "Mesin pengering berteknologi tinggi memastikan pakaian kering sempurna tanpa merusak serat kain.",
  },
  {
    icon: Truck,
    title: "Antar Jemput Gratis",
    desc: "GRATIS antar jemput untuk area Malang Kota. Tidak perlu keluar rumah, kami yang datang.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Kepuasan",
    desc: "Pakaian tidak bersih atau rusak? Kami ganti 100%. Kepuasan pelanggan adalah prioritas utama kami.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    desc: "Komitmen waktu penyelesaian yang akurat. Kami menghargai waktu dan kepercayaan Anda.",
  },
];

export const testimonials = [
  {
    name: "Sari Dewi",
    role: "Ibu Rumah Tangga",
    text: "Jojo Laundry benar-benar membantu. Jemput jam 8 pagi, jam 4 sore sudah diantar kembali. Wangi dan rapi.",
    rating: 5,
  },
  {
    name: "Dimas Pratama",
    role: "Karyawan Swasta",
    text: "Saya sudah langganan 6 bulan. Untuk baju kerja, kemeja putih selalu bersih dan wangi. Recommended!",
    rating: 5,
  },
  {
    name: "Rina Wijaya",
    role: "Mahasiswa",
    text: "Pas lagi sibuk skripsi, laundry jadi andalan. Harganya ramah di kantong, kualitasnya tetap juara.",
    rating: 5,
  },
];
