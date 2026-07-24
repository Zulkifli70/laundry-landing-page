export function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-nav-link text-body hover:text-on-dark transition-colors duration-300 px-3 py-2"
    >
      {label}
    </a>
  );
}
