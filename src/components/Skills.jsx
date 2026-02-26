import useScrollReveal from "../hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Languages",
    color: "emerald",
    skills: ["C", "C++", "Python", "JavaScript", "Dart", "Shell/Bash", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    color: "cyan",
    skills: ["Django", "React", "Django REST Framework", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    color: "amber",
    skills: ["Docker", "Git", "PostgreSQL", "MariaDB", "Redis", "Nginx", "Linux"],
  },
  {
    title: "Concepts",
    color: "violet",
    skills: ["REST APIs", "WebSockets", "TCP/IP", "OAuth 2.0", "CI/CD", "Microservices"],
  },
];

const dotColors = {
  emerald: "bg-emerald-400",
  cyan: "bg-cyan-400",
  amber: "bg-amber-400",
  violet: "bg-violet-400",
};

const hoverColors = {
  emerald: "hover:border-emerald-500/50 hover:text-emerald-400",
  cyan: "hover:border-cyan-500/50 hover:text-cyan-400",
  amber: "hover:border-amber-500/50 hover:text-amber-400",
  violet: "hover:border-violet-500/50 hover:text-violet-400",
};

const Skills = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I work with on a daily basis.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:border-white/10 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-neutral-200 mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${dotColors[category.color]}`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1.5 text-sm bg-neutral-800/80 text-neutral-300 rounded-lg border border-neutral-700/50 transition-all duration-300 cursor-default ${hoverColors[category.color]}`}
                  >
                    {skill}
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

export default Skills;
