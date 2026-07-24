import { Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Jojo Laundry" className="h-8 brightness-0 invert opacity-60" />
          <span className="text-xs text-slate-500">&copy; 2026 Jojo Laundry. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          <div className="flex gap-3">
            <a href="#" className="size-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
              <Phone size={14} className="text-slate-400" />
            </a>
            <a href="#" className="size-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
              <Mail size={14} className="text-slate-400" />
            </a>
            <a href="#" className="size-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
              <MessageCircle size={14} className="text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
