'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiGit, SiC, SiCplusplus, SiPython, SiPostgresql, SiMysql, SiVsco, SiGithub, SiVercel } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FaBrain, FaUsers, FaSync, FaComments } from 'react-icons/fa';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C", icon: <SiC /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Kotlin", icon: <SiPython /> },
        { name: "SQL", icon: <SiPostgresql /> },
      ]
    },
    {
      category: "Frameworks/Concepts",
      skills: [
        { name: "Pandas", icon: <SiPython /> },
        { name: "Matplotlib", icon: <SiPython /> },
        { name: "Seaborn", icon: <SiPython /> },
        { name: "Scikit-learn", icon: <SiPython /> },
        { name: "DSA", icon: <FaBrain /> },
        { name: "OOPS", icon: <FaBrain /> },
        { name: "HTML", icon: <SiJavascript /> },
        { name: "CSS", icon: <SiJavascript /> },
      ]
    },
    {
      category: "Tools/Platforms",
      skills: [
        { name: "Excel", icon: <SiVsco /> },
        { name: "Power BI", icon: <SiVsco /> },
        { name: "DBMS", icon: <SiPostgresql /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Figma", icon: <SiVsco /> },
        { name: "Jupyter Notebooks", icon: <SiPython /> },
        { name: "Google Colab", icon: <SiPython /> },
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem-Solving", icon: <FaBrain /> },
        { name: "Time-Management", icon: <FaSync /> },
        { name: "Teamwork", icon: <FaUsers /> },
        { name: "Communication", icon: <FaComments /> },
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  {category.category}
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -8 }}
                    className="bg-gray-900 p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                  >
                    <div className="text-5xl text-blue-500">{skill.icon}</div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}