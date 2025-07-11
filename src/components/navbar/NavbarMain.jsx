import { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavbarBtn from "./NavbarBtn";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-[9%] py-6 flex justify-between items-center bg-[#081b29] shadow-lg">
      <a href="#" className="text-2xl font-bold text-white">Hamza</a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5 text-white font-medium">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-main transition">{link.name}</a>
          </li>
        ))}
      </ul>

      {/* Buttons + Mobile Toggle */}
      <div className="flex items-center gap-4">
        <NavbarBtn />
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#081b29] text-white flex flex-col items-center gap-6 py-6 md:hidden">
          {links.map((link) => (
            <li key={link.name}>
              <a onClick={() => setMenuOpen(false)} href={link.href} className="text-xl hover:text-main">{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavbarMain;
