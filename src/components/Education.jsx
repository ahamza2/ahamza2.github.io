import useScrollReveal from "../hooks/useScrollReveal";

const Education = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [t1Ref, t1Visible] = useScrollReveal(0.1);
  const [t2Ref, t2Visible] = useScrollReveal(0.1);

  return (
    <section id="education" className="py-28 px-6 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Where I’ve been learning and growing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-neutral-800">
            {/* 1337 */}
            <div
              ref={t1Ref}
              className={`mb-12 relative transition-all duration-700 delay-200 ${t1Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-neutral-950 shadow-lg shadow-emerald-500/30" />
              <div className="glass-card p-6 hover:border-emerald-500/20 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-neutral-100">
                    1337 Coding School
                  </h3>
                  <span className="text-sm text-emerald-400 font-mono">
                    2022 — Present
                  </span>
                </div>
                <p className="text-neutral-500 text-sm mb-3">
                  42 Network · Tetouan, Morocco
                </p>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  A peer-to-peer software engineering program with no teachers and
                  no traditional classes. Everything is project-based — you learn
                  by building real things, reviewing your peers’ code, and
                  collaborating under tight deadlines.
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-neutral-300">
                    What I’ve done here:
                  </h4>
                  <ul className="space-y-1.5 text-neutral-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">▹</span>
                      Built a TCP/IP compliant IRC server from scratch in C++
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">▹</span>
                      Developed a full-stack web app with real-time multiplayer
                      (ft_transcendence)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">▹</span>
                      Created containerized infrastructure from scratch using Docker
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">▹</span>
                      Deep dive into algorithms, memory management, and systems
                      programming in C
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RY Game / UM6P */}
            <div
              ref={t2Ref}
              className={`mb-12 relative transition-all duration-700 delay-300 ${t2Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-neutral-950 shadow-lg shadow-cyan-500/30" />
              <div className="glass-card p-6 hover:border-cyan-500/20 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-neutral-100">
                    RY Game — MASCIR / UM6P
                  </h3>
                  <span className="text-sm text-cyan-400 font-mono">
                    Oct 2025 — Feb 2026
                  </span>
                </div>
                <p className="text-neutral-500 text-sm mb-3">
                  Project Developer · Mohammed VI Polytechnic University
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Designed and built a full carbon simulation game for the
                  university. Led the development of both the Flutter mobile
                  frontend and the Django backend, including real-time multiplayer,
                  AI opponents, and a social system — all containerized with
                  Docker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
