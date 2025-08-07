import React from "react";
import { Server, Database } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Node.js", level: 95 },
    { name: "Express.js", level: 95 },
    { name: "REST & GraphQL API", level: 90 },
    { name: "MySQL", level: 95 },
    { name: "MongoDB", level: 80 },
    { name: "Docker & CI/CD", level: 75 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I’m a backend developer with a passion for building efficient and scalable server-side applications.
                I specialize in using <span className="text-indigo-400 font-medium">Node.js</span> and{" "}
                <span className="text-indigo-400 font-medium">Express.js</span> to develop robust APIs powered by{" "}
                <span className="text-indigo-400 font-medium">REST</span> and{" "}
                <span className="text-indigo-400 font-medium">GraphQL</span>.
                My expertise includes working with both relational databases like{" "}
                <span className="text-indigo-400 font-medium">MySQL</span> and NoSQL solutions like{" "}
                <span className="text-indigo-400 font-medium">MongoDB</span>.
                I also utilize <span className="text-indigo-400 font-medium">Docker</span> for containerization,
                implement <span className="text-indigo-400 font-medium">CI/CD pipelines</span> for deployment automation,
                and optimize performance using <span className="text-indigo-400 font-medium">Redis caching</span>.
              </p>
            </div>
          </div>

          {/* Right Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-green-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
