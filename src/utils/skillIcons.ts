import { IconType } from 'react-icons';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaPhp, 
  FaDatabase, 
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLaravel,
  FaVuejs,
  FaAngular,
  FaSass,
  FaNpm,
  FaGithub,
  FaLinux,
  FaWindows,
  FaApple,
  FaAndroid,
  FaCode
} from 'react-icons/fa';

export const getSkillIcon = (skillName: string): IconType => {
  const skillIcons: { [key: string]: IconType } = {
    // Frontend
    'react': FaReact,
    'vue': FaVuejs,
    'angular': FaAngular,
    'html': FaHtml5,
    'css': FaCss3Alt,
    'javascript': FaJs,
    'typescript': FaJs,
    'sass': FaSass,
    
    // Backend
    'node': FaNodeJs,
    'python': FaPython,
    'java': FaJava,
    'php': FaPhp,
    'laravel': FaLaravel,
    
    // Databases
    'mysql': FaDatabase,
    'postgresql': FaDatabase,
    'mongodb': FaDatabase,
    'sql': FaDatabase,
    
    // DevOps
    'git': FaGitAlt,
    'docker': FaDocker,
    'aws': FaAws,
    'linux': FaLinux,
    
    // Tools
    'npm': FaNpm,
    'github': FaGithub,
    
    // Operating Systems
    'windows': FaWindows,
    'macos': FaApple,
    'android': FaAndroid,
    
    // Default
    'default': FaCode
  };

  const normalizedName = skillName.toLowerCase();
  return skillIcons[normalizedName] || skillIcons['default'];
}; 