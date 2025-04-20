import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <MainLayout>
            <div className="space-y-20 py-10">
              <section id="about" className="min-h-screen flex items-center">
                <About />
              </section>
              
              <section id="projects" className="min-h-screen flex items-center">
                <Projects />
              </section>
              
              <section id="skills" className="min-h-screen flex items-center">
                <Skills />
              </section>
              
              <section id="experience" className="min-h-screen flex items-center">
                <Experience />
              </section>
              
              <section id="contact" className="min-h-screen flex items-center">
                <Contact />
              </section>
            </div>
          </MainLayout>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
