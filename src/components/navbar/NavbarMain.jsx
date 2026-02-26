import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-mono font-semibold text-emerald-400 group">
          <span className="group-hover:text-emerald-300 transition-colors">~/hamza</span>
          <span className="animate-blink ml-0.5 text-emerald-400">_</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-emerald-400" : "text-neutral-400 hover:text-emerald-400"
                  }`}
                >
                  {link.name}
                </a>
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:block btn-primary text-sm !py-2 !px-5">
            Get in Touch
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-neutral-300 text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-neutral-950/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {links.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.name}>
                <a
                  onClick={() => setMenuOpen(false)}
                  href={link.href}
                  className={`block transition-colors text-lg ${
                    isActive ? "text-emerald-400" : "text-neutral-300 hover:text-emerald-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary inline-block text-sm !py-2 !px-5 mt-2"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavbarMain;
