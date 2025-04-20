import React from 'react';
import { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiDjango, SiSpring, SiFlask } from 'react-icons/si';

const skillIcons: Record<string, IconType> = {
  'React': FaReact,
  'Node.js': FaNodeJs,
  'Python': FaPython,
  'Java': FaJava,
  'HTML': FaHtml5,
  'CSS': FaCss3,
  'JavaScript': FaJs,
  'TypeScript': SiTypescript,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Redis': SiRedis,
  'GraphQL': SiGraphql,
  'Django': SiDjango,
  'Spring': SiSpring,
  'Flask': SiFlask,
  'Git': FaGitAlt,
  'Docker': FaDocker,
};

const getSkillIcon = (skillName: string): IconType => {
  return skillIcons[skillName] || FaReact;
};

export const renderSkillIcon = (skillName: string): React.ReactElement => {
  const Icon = getSkillIcon(skillName);
  return React.createElement(Icon, { className: "text-primary-500" });
}; 