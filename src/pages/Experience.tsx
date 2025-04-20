import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useApi } from '../hooks/useApi';

interface ExperienceItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  organization: string;
  company: string;
  role: string;
  start_date: string;
  end_date: string | null;
  description: string;
  skills: string[];
}

const formatDate = (dateString: string | null): string => {
  if (!dateString) return 'Present';
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Experience: React.FC = () => {
  const { data: experiences, loading, error } = useApi<ExperienceItem[]>('http://localhost:8000/api/experiences');

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-dark-300 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-dark-300 rounded w-1/3 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.error('API Error:', error);
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-red-500">
          Error loading experiences: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My <span className="text-primary-600 dark:text-primary-400">Experience</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Professional journey and education
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 dark:bg-dark-300" />
        
        <div className="space-y-8">
          {experiences?.map((exp: ExperienceItem, index: number) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-4 w-3 h-3 rounded-full bg-primary-500" />
              
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {exp.type === 'work' ? (
                      <BriefcaseIcon className="h-6 w-6 text-primary-500" />
                    ) : (
                      <AcademicCapIcon className="h-6 w-6 text-primary-500" />
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                      </span>
                    </div>
                    
                    <p className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                      {exp.company}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill: string) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-300 text-sm rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 