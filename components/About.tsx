'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <FaCode />,
      title: "Data Analysis",
      desc: "Extracting meaningful insights from complex datasets"
    },
    {
      icon: <FaRocket />,
      title: "ML Models",
      desc: "Building and optimizing machine learning solutions"
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      desc: "Using data-driven approaches to solve real-world challenges"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years Learning" },
    { number: "100%", label: "Dedication" }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a Computer Science student passionate about data science and machine learning. My journey began with curiosity about how data can reveal hidden patterns and drive intelligent decisions. This evolved into a strong passion for building predictive models and creating data-driven solutions. I enjoy exploring statistical methods and modern ML frameworks through hands-on projects.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm particularly interested in machine learning, deep learning, and data visualization, where I can combine analytical thinking with technical problem-solving. As I advance in my data science journey, I'm excited to work on impactful projects, collaborate with data professionals, and continuously expand my expertise in turning raw data into actionable insights.
              </p>
            </motion.div>

            {/* Right Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all text-center">
                  <h4 className="text-3xl font-bold text-blue-500 mb-2">{stat.number}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-750 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-blue-500"
              >
                <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
