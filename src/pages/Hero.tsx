import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { colors } from '../styles/colors';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? colors.container.dark : colors.container.light}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              EL-BICHO
            </span>
          </h1>
          <p className={`text-xl sm:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Full Stack Developer & Creative Problem Solver
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#projects"
              className={`px-6 py-3 rounded-lg ${isDarkMode ? colors.button.dark : colors.button.light} ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              } font-medium transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className={`px-6 py-3 rounded-lg border-2 ${
                isDarkMode
                  ? 'border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white'
                  : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
              } font-medium transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 