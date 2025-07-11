import React from "react";

const projects = [
  {
    title: "ft_transcendence",
    tech: "Django • vanilla.js • Docker • WebSocket • PostgreSQL",
    description:
      "A full-stack ping-pong tournament app with real-time chat using WebSockets, user authentication, REST APIs, and UI design.",
    link: "https://github.com/thee-falcon/ft_transport",
  },
  {
    title: "IRC Server",
    tech: "C++ • Socket Programming • Hex-chat",
    description:
      "An IRC server built from scratch using C++ and TCP/IP sockets, with support for multiple clients and channels.",
    link: "https://github.com/ahamza2/42_FT_IRC",
  },
  {
    title: "inception 42",
    tech: "Docker • Bash • NGINX • WordPress • MariaDB",
    description:
      "Built multiple Docker images from scratch to deploy a full-stack WordPress environment using Bash scripts and Docker CLI.",
    link: "https://github.com/ahamza2/inception",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen  bg-[#081b29] text-white px-[9%] py-28"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-main">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112e42] p-6 rounded-xl shadow-lg hover:shadow-main transition duration-300"
          >
            <h3 className="text-2xl font-bold text-main mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-lightGrey mb-2 italic">
              {project.tech}
            </p>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-orange hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
