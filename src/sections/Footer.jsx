import { Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer border-t border-hairline px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Jojo Laundry" className="h-8 brightness-0 invert opacity-40" />
          <span className="text-caption text-muted">&copy; 2026 Jojo Laundry. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-caption text-muted hover:text-on-dark transition-colors">Kebijakan Privasi</a>
          <a href="#" className="text-caption text-muted hover:text-on-dark transition-colors">Syarat &amp; Ketentuan</a>
          <div className="flex gap-3">
            <a href="#" className="size-8 rounded-none bg-surface-card border border-hairline flex items-center justify-center hover:bg-surface-elevated transition-all">
              <Phone size={14} className="text-muted" />
            </a>
            <a href="#" className="size-8 rounded-none bg-surface-card border border-hairline flex items-center justify-center hover:bg-surface-elevated transition-all">
              <Mail size={14} className="text-muted" />
            </a>
            <a href="#" className="size-8 rounded-none bg-surface-card border border-hairline flex items-center justify-center hover:bg-surface-elevated transition-all">
              <MessageCircle size={14} className="text-muted" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}