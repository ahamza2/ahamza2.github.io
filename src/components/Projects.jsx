import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
  {
    title: "RY Game",
    description:
      "A carbon simulation game built for UM6P (Mohammed VI Polytechnic University). Players manage CO2 emission quotas, trade carbon credits, and invest in sustainable projects. Features real-time multiplayer with WebSockets, AI opponents with adjustable difficulty, Google OAuth login, and a full social system with friend requests and live notifications.",
    tech: ["Flutter", "Django", "Docker", "WebSocket", "PostgreSQL", "Redis"],
    github: "https://github.com/EngineerSoft/rygame",
    featured: true,
  },
  {
    title: "ft_transcendence",
    description:
      "A full-stack ping-pong tournament platform with real-time gameplay using WebSockets, user authentication, REST APIs, live chat, and a polished frontend. The final project of the 1337 common core.",
    tech: ["Django", "JavaScript", "Docker", "WebSocket", "PostgreSQL"],
    github: "https://github.com/thee-falcon/ft_transport",
    featured: true,
  },
  {
    title: "IRC Server",
    description:
      "An IRC server built from scratch in C++ using raw TCP/IP sockets. Supports multiple concurrent clients, channel management, private messaging, and operator commands. Tested with HexChat.",
    tech: ["C++", "Socket Programming", "TCP/IP"],
    github: "https://github.com/ahamza2/42_FT_IRC",
    featured: false,
  },
  {
    title: "Inception",
    description:
      "A Docker infrastructure project where every service is built from scratch using custom Dockerfiles. Deploys WordPress with Nginx and MariaDB, all orchestrated with Docker Compose and configured via Bash scripts.",
    tech: ["Docker", "Bash", "Nginx", "WordPress", "MariaDB"],
    github: "https://github.com/ahamza2/inception",
    featured: false,
  },
];

const Projects = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [featRef, featVisible] = useScrollReveal(0.05);
  const [otherRef, otherVisible] = useScrollReveal(0.05);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emerald-500/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of the things I’ve built — from system-level programs to full-stack platforms.
          </p>
        </div>

        <div
          ref={featRef}
          className={`space-y-6 transition-all duration-700 delay-200 ${featVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <div
                key={i}
                className="glass-card p-8 hover:border-emerald-500/20 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        Featured
                      </span>
                    </div>
                    <p className="text-neutral-400 leading-relaxed mb-4 max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 text-xs bg-neutral-800/80 text-neutral-400 rounded-md font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-all duration-300 shrink-0 group/link"
                  >
                    <FaGithub className="text-xl" />
                    <span className="text-sm group-hover/link:underline">Source</span>
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Other projects */}
        <div
          ref={otherRef}
          className={`grid md:grid-cols-2 gap-6 mt-8 transition-all duration-700 delay-300 ${otherVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <div
                key={i}
                className="glass-card p-6 hover:border-emerald-500/20 transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-neutral-200 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-600 hover:text-emerald-400 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 text-xs bg-neutral-800/80 text-neutral-400 rounded-md font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
