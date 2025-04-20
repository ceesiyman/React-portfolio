import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { colors } from '../styles/colors';
import { Project } from '../hooks/useProjects';

interface ProjectPopupProps {
  project: Project;
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
  const { isDarkMode } = useTheme();

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
    >
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Popup Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className={`relative w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-4xl rounded-xl overflow-hidden ${
          isDarkMode ? colors.container.dark : colors.container.light
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full ${
            isDarkMode ? colors.button.dark : colors.button.light
          }`}
        >
          <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h2>
              <p className={`text-xs sm:text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
            </div>

            <div>
              <h3 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                      isDarkMode
                        ? 'bg-gray-700 text-gray-200'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
                    isDarkMode ? colors.button.dark : colors.button.light
                  } ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  } font-medium transition-colors duration-300`}
                >
                  View Code
                </a>
              )}
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 sm:px-4 py-2 rounded-lg border-2 text-sm sm:text-base ${
                    isDarkMode
                      ? 'border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white'
                      : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                  } font-medium transition-colors duration-300`}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="relative h-48 sm:h-64 md:h-full rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPopup; 