import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { colors } from '../styles/colors';
import ProjectPopup from '../components/ProjectPopup';
import { useProjects } from '../hooks/useProjects';
import { Project } from '../hooks/useProjects';

const Projects: React.FC = () => {
  const { projects, loading, error, fetchProject } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isDarkMode } = useTheme();

  const handleProjectClick = async (project: Project) => {
    const detailedProject = await fetchProject(project.id);
    if (detailedProject) {
      setSelectedProject(detailedProject);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-center">
          <p className="text-xl font-bold mb-2">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Click on a project to view more details
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover="hover"
            className="cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <div
              className={`rounded-xl overflow-hidden ${
                isDarkMode ? colors.container.dark : 'bg-black'
              }`}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-white'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-300'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-full text-xs ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-200'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech_stack.length > 3 && (
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-200'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      +{project.tech_stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Projects; 