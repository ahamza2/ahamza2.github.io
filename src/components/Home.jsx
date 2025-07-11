import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-start px-[9%] bg-cover bg-center bg-no-repeat text-white relative"
      style={{ backgroundImage: "url('/images/hamza.png')" }} // put image in /public/images/hamza.png
    >
      <div className="z-10 max-w-xl animate-fadeInUp">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Hi, I'm <span className="text-main">Hamza Aarab</span>
        </h1>
        <h3 className="text-3xl font-semibold text-transparent stroke-text animate-textGradient mb-4">
          Full Stack Developer
        </h3>
        <p className="text-lg mb-6">
          I build full-stack web apps using React, Django, and Docker with modern design.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="btn">Let’s Talk</a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute left-[9%] bottom-10 flex gap-4 text-2xl z-10">
        <a href="https://github.com/ahamza2" target="_blank" rel="noreferrer">
          <i className="bx bxl-github hover:text-main"></i>
        </a>
        <a href="#"><i className="bx bxl-twitter"></i></a>
        <a href="https://linkedin.com/in/haarab"><i className="bx bxl-linkedin"></i></a>
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-[#081b29]/80 z-0" />
    </section>
  );
};

export default Home;
