import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center">
          <img
            src="/logo-removebg-preview_(2).png"
            alt="Just Core Realty & Interiors"
            className="h-24 w-auto"
            loading="eager"
            fetchPriority="high"
          />
        </Link>
        <nav className="hidden md:flex gap-10 text-sm tracking-wide text-white">
          <Link to="/" className="hover:text-[#C9A24D] transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#C9A24D] transition">
            About
          </Link>
          <Link to="/welcome" className="hover:text-[#C9A24D] transition">
            Welcome
          </Link>
          <Link to="/contact" className="hover:text-[#C9A24D] transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
