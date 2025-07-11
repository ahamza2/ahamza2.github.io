import React from 'react';
import aboutImage from '../assets/hamza.png'; // put your image here

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#081b29] text-white flex flex-col items-center justify-center px-[9%] pt-[100px]"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-10">
        About <span className="text-main">Me</span>
      </h2>

      {/* Image + spinning circular border */}
      <div className="relative w-60 h-80 mb-10">
        {/* Spinning border */}
        <div className="absolute inset-0 rounded-full border-[10px] border-main animate-spin-slow opacity-30"></div>

        {/* Image */}
        <img
          src={aboutImage}
          alt="About Hamza"
          className="rounded-full w-60 h-80 object-cover relative z-10 border-4 border-main"
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl text-center space-y-4">
        <h3 className="text-2xl font-semibold text-orange">Full Stack Developer!</h3>
        <p className="text-lg">
          Passionate and detail-oriented full stack developer with a strong grasp of both backend and frontend technologies. Always driven by curiosity to understand systems deeply and build efficient, functional solutions.
        </p>

        <div className="mt-6">
          <a href="#projects" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
