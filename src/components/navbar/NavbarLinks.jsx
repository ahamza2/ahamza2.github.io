const links = [
  { link: "Home", section: "home" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "education" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-6 text-white font-body text-center md:text-md text-xl md:static relative">
      {links.map((link, index) => (
        <li key={index} className="group">
          <a
            href={`#${link.section}`}
            className="cursor-pointer hover:text-cyan transition-all duration-500"
          >
            {link.link}
          </a>
          <div className="mx-auto w-0 group-hover:w-full h-[1px] bg-cyan transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
