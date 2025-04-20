import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Footer from './Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  EL-BICHO
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                About
              </Link>
              <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Projects
              </Link>
              <Link to="/skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Skills
              </Link>
              <Link to="/experience" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Experience
              </Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Contact
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 