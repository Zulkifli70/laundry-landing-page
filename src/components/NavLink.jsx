export function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-slate hover:text-navy transition-colors duration-300 px-3 py-2"
    >
      {label}
    </a>
  );
}
