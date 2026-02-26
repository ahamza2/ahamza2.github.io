import { FaCode, FaServer, FaDocker, FaTerminal } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";
import profileImg from "../assets/hamza.png";

const highlights = [
  { icon: "code", title: "Systems Programming", desc: "C, C++, low-level network programming and memory management" },
  { icon: "server", title: "Web Development", desc: "Django, React, REST APIs, WebSocket-based real-time apps" },
  { icon: "docker", title: "DevOps & Infra", desc: "Docker, custom images, orchestration, CI/CD pipelines" },
  { icon: "terminal", title: "Problem Solving", desc: "Algorithms, data structures, peer-to-peer learning" },
];

const iconMap = {
  code: <FaCode />,
  server: <FaServer />,
  docker: <FaDocker />,
  terminal: <FaTerminal />,
};

const About = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal(0.2);
  const [textRef, textVisible] = useScrollReveal(0.15);
  const [cardsRef, cardsVisible] = useScrollReveal(0.1);

  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A bit about who I am and what drives me forward.
          </p>
        </div>

        {/* Image + Text row */}
        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start mb-16">
          {/* Profile Image */}
          <div
            ref={imgRef}
            className={`transition-all duration-700 delay-200 ${imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group mx-auto md:mx-0 w-64 h-72">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-800 group-hover:border-emerald-500/40 transition-all duration-500 w-full h-full">
                <img
                  src={profileImg}
                  alt="Hamza Aarab"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-emerald-500/30 rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-emerald-500/30 rounded-tl-2xl" />
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={`space-y-5 text-neutral-400 leading-relaxed transition-all duration-700 delay-300 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p>
              I’m a software engineering student at{" "}
              <span className="text-emerald-400 font-medium">1337</span>,
              Morocco’s peer-to-peer coding school (part of the 42 Network).
              No teachers, no lectures — just real projects, deadlines, and a
              community of people who figure things out together.
            </p>
            <p>
              That environment taught me how to learn fast, debug under pressure,
              and write code that actually works in production. Over the past few
              years I’ve gone deep into systems programming, full-stack web
              development, and containerization.
            </p>
            <p>
              When I’m not coding, I’m probably reading about how something
              works under the hood — whether it’s TCP/IP, how Docker builds
              images, or why a certain algorithm is faster than another.
            </p>
            <p>
              I also built a full simulation game for{" "}
              <span className="text-cyan-400 font-medium">UM6P</span> (Mohammed VI Polytechnic University)
              — a project that combined Flutter, Django, Docker and real-time multiplayer into one product.
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div
          ref={cardsRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {highlights.map((item, i) => (
            <div
              key={i}
              className="glass-card p-5 hover:border-emerald-500/30 transition-all duration-500 group hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-emerald-400 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {iconMap[item.icon]}
              </div>
              <h4 className="text-neutral-200 font-semibold text-sm mb-1">
                {item.title}
              </h4>
              <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
