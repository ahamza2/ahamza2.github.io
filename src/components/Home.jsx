import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useTypingTerminal from "../hooks/useTypingTerminal";

const Home = ({ visitorName }) => {
  const { lines, typingText, showCursor, isTyping } = useTypingTerminal();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-10 right-1/3 w-[300px] h-[300px] bg-emerald-600/4 rounded-full blur-[80px] animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-24 relative z-10">
        {/* Left: Text Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-mono text-xs">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
            Hamza{" "}
            <span className="gradient-text">Aarab</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral-400 font-light">
            Full Stack Developer
          </h2>
          {visitorName ? (
            <p className="text-sm text-cyan-400 font-mono">
              Welcome, {visitorName}
            </p>
          ) : null}
          <p className="text-neutral-500 max-w-md leading-relaxed">
            I build things from scratch — from low-level C programs to real-time web platforms. Currently a student at 1337 (42 Network), always looking for the next problem worth solving.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="btn-primary group">
              View My Work
              <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#contact" className="btn-outline">
              Let’s Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 pt-4 text-neutral-600">
            <a href="https://github.com/ahamza2" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 text-xl"><FaGithub /></a>
            <a href="https://linkedin.com/in/haarab" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 text-xl"><FaLinkedin /></a>
            <a href="mailto:haarab.me@gmail.com" className="hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 text-xl"><FaEnvelope /></a>
          </div>
        </div>

        {/* Right: Interactive Terminal */}
        <div className="animate-slide-in-right hidden md:block">
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/5 backdrop-blur-sm">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900/80 border-b border-neutral-800">
              <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer" />
              <span className="ml-2 text-xs text-neutral-600 font-mono">hamza@1337 : ~/portfolio</span>
            </div>
            {/* Terminal body */}
            <div className="p-5 font-mono text-[13px] leading-relaxed h-[320px] overflow-hidden">
              {/* Previous commands + outputs */}
              {lines.map((line, i) => (
                <div key={i} className="animate-fade-in">
                  {line.type === "command" ? (
                    <p className="text-neutral-400">
                      <span className="text-emerald-400">hamza@1337</span>
                      <span className="text-neutral-600">:</span>
                      <span className="text-cyan-400">~</span>
                      <span className="text-neutral-600">$ </span>
                      <span className="text-neutral-200">{line.text}</span>
                    </p>
                  ) : (
                    <pre className="text-amber-300/80 whitespace-pre-wrap mb-2 ml-0">{line.text}</pre>
                  )}
                </div>
              ))}

              {/* Current typing line */}
              <p className="text-neutral-400">
                <span className="text-emerald-400">hamza@1337</span>
                <span className="text-neutral-600">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-neutral-600">$ </span>
                <span className="text-neutral-200">{typingText}</span>
                <span className={`text-emerald-400 ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Home;
