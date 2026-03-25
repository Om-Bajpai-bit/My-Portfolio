'use client';

import { motion } from 'framer-motion';
import { FaArrowLeft, FaDownload, FaEye } from 'react-icons/fa';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors">
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Resume</span>
          </h1>
          <p className="text-gray-400 text-lg">Get a detailed look at my skills, experience, and education</p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-2xl p-12 text-center backdrop-blur-sm"
        >
          {/* Document Icon */}
          <div className="flex justify-center mb-8">
            <div className="text-7xl text-purple-500">📄</div>
          </div>

          {/* Resume Info */}
          <h2 className="text-3xl font-bold mb-2">Om Bajpai's Resume</h2>
          <p className="text-gray-400 mb-8">PDF • Updated 2026</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/cv new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <FaEye /> View Resume
            </motion.a>
            <motion.a
              href="/cv new.pdf"
              download="Om_Bajpai_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-gray-700 rounded-lg font-semibold hover:border-blue-500 transition-all"
            >
              <FaDownload /> Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
