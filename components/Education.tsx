'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      year: "Aug' 2023 - Present",
      details: "CGPA: 5.92"
    },
    {
      degree: "Intermediate",
      field: "Science Stream",
      institution: "Mount Litera Zee School",
      location: "Unnao, UP",
      year: "Apr' 2022 - Mar' 2023",
      details: "Percentage: 62%"
    }
  ];

  return (
    <section id="education" ref={ref} className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-500">Education</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl mb-4">
                    <FaGraduationCap />
                  </div>
                  {index !== education.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-850 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-blue-400 text-lg mt-1">{edu.field}</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                    <p className="text-gray-400">{edu.details}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
