import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />


      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* Left: Text Content */}
        <div className="space-y-6 animate-fade-in-up">
          <p className="text-emerald-400 font-mono text-sm tracking-wide">
            Hey there, I’m —
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hamza{" "}
            <span className="gradient-text">Aarab</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral-400 font-light">
            Full Stack Developer
          </h2>
          <p className="text-neutral-500 max-w-md leading-relaxed">
            I build things from scratch — from low-level C programs to real-time
            web platforms. Currently a student at 1337 (42 Network), always
            looking for the next problem worth solving.
          </p>

          <div className="flex gap-4 pt-2">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Let’s Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 pt-4 text-neutral-600">
            <a
              href="https://github.com/ahamza2"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/haarab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:haarab.me@gmail.com"
              className="hover:text-emerald-400 transition-colors text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Terminal Card */}
        <div className="animate-slide-in-right hidden md:block">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/5">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-neutral-800">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-neutral-600 font-mono">
                ~/hamza — zsh
              </span>
            </div>
            {/* Terminal body */}
            <div className="p-6 font-mono text-sm leading-relaxed space-y-3">
              <p className="text-neutral-500">
                <span className="text-emerald-400">→</span> cat about.json
              </p>
              <div className="text-neutral-300 space-y-1">
                <p>{"{"}</p>
                <p className="pl-4">
                  <span className="text-emerald-400">"name"</span>:{" "}
                  <span className="text-amber-300">"Hamza Aarab"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">"role"</span>:{" "}
                  <span className="text-amber-300">"Full Stack Developer"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">"school"</span>:{" "}
                  <span className="text-amber-300">"1337 (42 Network)"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">"stack"</span>: [
                  <span className="text-amber-300">"C"</span>,{" "}
                  <span className="text-amber-300">"C++"</span>,{" "}
                  <span className="text-amber-300">"Python"</span>,{" "}
                  <span className="text-amber-300">"React"</span>,{" "}
                  <span className="text-amber-300">"Docker"</span>],
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">"available"</span>:{" "}
                  <span className="text-cyan-400">true</span>
                </p>
                <p>{"}"}</p>
              </div>
              <p className="text-neutral-500 flex items-center">
                <span className="text-emerald-400">→</span>{" "}
                <span className="animate-blink text-emerald-400 ml-1">▊</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
