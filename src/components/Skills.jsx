import React from "react";

const codingSkills = [
  { skill: "C", level: "90%" },
  { skill: "C++", level: "90%" },
  { skill: "Python (Django)", level: "80%" },
  { skill: "JavaScript (React)", level: "80%" },
  { skill: "Shell Scripting", level: "80%" },
  { skill: "Docker", level: "85%" },
];

const proSkillsWithLevel = [
  { skill: "Problem Solving", level: "95%" },
  { skill: "Teamwork", level: "90%" },
  { skill: "Fast Learner", level: "90%" },
  { skill: "Clean Code Writing", level: "90%" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen  bg-[#081b29] text-white px-[9%] py-28"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-main">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Coding Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-orange">Coding Skills</h3>
          <div className="space-y-5">
            {codingSkills.map(({ skill, level }, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill}</span>
                  <span>{level}</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full">
                  <div
                    className="h-full bg-main rounded-full"
                    style={{ width: level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-orange">Professional Skills</h3>
          <div className="space-y-5">
            {proSkillsWithLevel.map(({ skill, level }, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill}</span>
                  <span>{level}</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full">
                  <div
                    className="h-full bg-orange rounded-full"
                    style={{ width: level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
