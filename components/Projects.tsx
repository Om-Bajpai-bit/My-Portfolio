'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Flappy Bird – 2D Game Development Project",
      desc: "Developed a fully functional Flappy Bird game using Java, showcasing core concepts of object-oriented programming and game physics. Implemented smooth gameplay mechanics including gravity simulation, collision detection, and dynamic obstacle generation.",
      tags: ["Java", "Swing/AWT", "Game Physics", "OOP", "Graphics"],
      image: "/blappy.jpg",
      github: "https://github.com/Om-Bajpai-bit/Blappy-bird",
      demo: "#",
      
    },
    {
      title: "E-Waste Management Website",
      desc: "Engineered a comprehensive e-waste management platform to raise awareness and facilitate proper disposal of electronic waste.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/waste.png",
      github: "https://github.com/Om-Bajpai-bit/Recycle-e-waste",
      demo: "#",
      
    },
    {
      title: "The Store – Online Shopping Platform",
      desc: "Built a user-friendly shopping website with product browsing, cart, and order management features for a smooth online buying experience.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/store.png",
      github: "https://github.com/Om-Bajpai-bit",
      demo: "#",
      
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-6xl">💻</div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
                
                {project.highlights && (
                  <div className="mb-4 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-2 text-xs text-gray-300">
                        <span className="text-blue-400 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}