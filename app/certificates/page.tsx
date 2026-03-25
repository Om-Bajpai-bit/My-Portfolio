'use client';

import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function CertificatesPage() {
  const certificates = [
    
    
    {
      title: "Build Generative AI Apps & Solutions with No-Code Tools",
      issuer: "Infosys",
      date: "Aug 2025",
      icon: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Master Generative AI & Generative AI tools (ChatGPT & more)",
      issuer: "Infosys",
      date: "Aug 2025",
      icon: "✨",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Fundamentals of Network Communication",
      issuer: "Coursera",
      date: "Nov 2024",
      icon: "🌐",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Oct 2023",
      icon: "📱",
      color: "from-yellow-500 to-orange-500"
    },
  ];

  const trainings = [
    {
      title: "Mastering JAVA for Application Development",
      organization: "Lovely Professional University",
      date: "Jul' 2025 - Aug' 2025",
      type: "Certificate",
      icon: "☕",
      color: "from-orange-500 to-red-500",
      highlights: [
        "Completed a comprehensive Java training program covering core concepts, OOP, multithreading, GUI development.",
        "Built hands-on projects including a Flappy Bird game, File Splitter-Merger, Quiz App, and Chatting Application using Swing, AWT, JDBC, and networking.",
        "Strengthened practical development skills through structured assessments and real-world application-building exercises."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="px-4 py-2 border border-blue-500/50 rounded-full text-blue-400 text-sm flex items-center gap-2">
            <span>✓</span> Verified Credentials
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Training</span>
          </h1>
          
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">📜</span>
            <h2 className="text-3xl font-bold">
              <span className="text-purple-500">Certificates</span>
            </h2>
            <div className="ml-auto px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">
              {certificates.length} Earned
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm group"
              >
                <div className="flex items-start gap-4">
                  <div className={`text-4xl p-3 rounded-lg bg-gradient-to-br ${cert.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
                    {cert.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span>📌</span>
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>📅</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🎓</span>
            <h2 className="text-3xl font-bold">
              <span className="text-purple-500">Training</span>
            </h2>
          </div>

          {/* Training Cards */}
          <div className="space-y-6">
            {trainings.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-cyan-500 rounded-xl p-8 hover:shadow-lg hover:shadow-cyan-500/10 transition-all backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold mb-3">
                      {training.type}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{training.title}</h3>
                    <p className="text-gray-400">{training.organization}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{training.date}</p>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {training.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
