import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#081b29] text-white px-[9%] py-28"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-main">Education</span>
      </h2>

      <div className="max-w-3xl mx-auto bg-[#112e42] p-8 rounded-xl shadow-lg">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-orange">1337 CODING SCHOOL</h3>
          <p className="text-lightGrey text-sm">Tetouan, Morocco | 2022 – 2025</p>
        </div>

        <p className="text-lg mt-4">
          I'm currently enrolled in the 1337 School program, a peer-to-peer and project-based learning environment focused on software engineering. During this experience, I have acquired skills in low-level and high-level programming, problem solving, teamwork, and the ability to learn and build full-stack systems from scratch.
        </p>

        <ul className="list-disc list-inside mt-6 space-y-2 text-white">
          <li>Problem Solving with Algorithms</li>
          <li>Low-level Programming: C, Shell, Network (TCP/IP)</li>
          <li>High-level Web Dev: Python, Django, React</li>
          <li>Project-based & peer-to-peer learning</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
