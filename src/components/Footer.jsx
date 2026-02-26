const Footer = () => {
  return (
    <footer className="border-t border-neutral-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-sm">~/hamza</span>
          <span className="text-neutral-700">·</span>
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Hamza Aarab
          </p>
        </div>
        <p className="text-neutral-700 text-xs font-mono">
          Built with React + Tailwind · Deployed on GitHub Pages
        </p>
        <a
          href="#home"
          className="text-neutral-600 hover:text-emerald-400 transition-all duration-300 text-sm hover:-translate-y-0.5"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
