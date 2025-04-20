import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../services/api';
import { getSkillIcon } from '../utils/skillIcons';
import { useTheme } from '../context/ThemeContext';
import { IconType } from 'react-icons';

const IconWrapper: React.FC<{ icon: IconType; className?: string }> = ({ icon, className }) => {
  const IconComponent = icon as React.ComponentType<{ className?: string }>;
  return <IconComponent className={className} />;
};

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/skills', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setSkills(data.data || data); // Handle both wrapped and unwrapped responses
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const renderIcon = (skillName: string) => {
    const Icon = getSkillIcon(skillName);
    return <IconWrapper icon={Icon} className="text-primary-500" />;
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={`container mx-auto px-4 py-8 ${isDarkMode ? 'dark' : ''}`}>
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition-colors ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">
                {renderIcon(skill.name)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="text-sm text-gray-600">
                <p>Proficiency: {skill.proficiency}%</p>
                <p>Years of Experience: {skill.years}</p>
                <p>Category: {skill.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className={`max-w-md w-full p-6 rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="text-4xl mr-4">
                  {renderIcon(selectedSkill.name)}
                </div>
                <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Details</h4>
              <p className="text-gray-600">Proficiency: {selectedSkill.proficiency}%</p>
              <p className="text-gray-600">Years of Experience: {selectedSkill.years}</p>
              <p className="text-gray-600">Category: {selectedSkill.category}</p>
              <p className="text-gray-600 mt-2">{selectedSkill.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Skills; 