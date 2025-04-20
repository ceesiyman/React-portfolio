import React from 'react';
import { motion } from 'framer-motion';
import { CommandLineIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const terminalLines = [
    "> Hello, I'm Ashraf Issa",
    "> Full Stack Developer",
    "> Based in Your Location",
    "> Specializing in Web Development",
    "> Let's build something amazing together!"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Ashraf Issa</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A passionate Full Stack Developer with expertise in building modern web applications.
            I love creating elegant solutions to complex problems and turning ideas into reality.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neon-blue text-neon-blue hover:bg-dark-300 font-mono font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="terminal">
            <div className="flex items-center space-x-2 mb-4">
              <CommandLineIcon className="h-5 w-5 text-neon-green" />
              <span className="text-neon-green">~/portfolio</span>
            </div>
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.5 }}
                className="text-neon-green font-mono"
              >
                {line}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute -bottom-4 -right-4 w-32 h-32 bg-neon-blue rounded-full opacity-20 blur-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About; 