import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

export interface SocialMediaLink {
  id: number;
  platform: string;
  link: string;
  icon: string;
}

export interface UserContact {
  email: string;
  phone: string;
}

export interface Skill {
  id: number;
  name: string;
  proficiency: number;
  years: number;
  category: string;
  description: string;
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Projects
export const getProjects = () => api.get('/projects');
export const getProject = (id: string) => api.get(`/projects/${id}`);

// Experiences
export const getExperiences = () => api.get('/experiences');

// Educations
export const getEducations = () => api.get('/educations');

// Skills
export const getSkills = async (): Promise<Skill[]> => {
  const response = await api.get('/skills');
  return response.data.data;
};

export const createSkill = async (skill: Omit<Skill, 'id' | 'created_at' | 'updated_at'>): Promise<Skill> => {
  const response = await api.post('/skills', skill);
  return response.data.data;
};

export const updateSkill = async (id: number, skill: Partial<Skill>): Promise<Skill> => {
  const response = await api.put(`/skills/${id}`, skill);
  return response.data.data;
};

export const deleteSkill = async (id: number): Promise<void> => {
  await api.delete(`/skills/${id}`);
};

// Settings
export const getSettings = () => api.get('/settings');

// Social Media
export const getSocialMediaLinks = async (): Promise<SocialMediaLink[]> => {
  const response = await api.get('/social-media');
  return response.data;
};

// Admin Contact
export const getAdminContact = async (): Promise<UserContact> => {
  const response = await api.get('/admin-contact');
  return response.data;
};

// Contact Form
export const submitContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}): Promise<void> => {
  await api.post('/contact', data);
};

export default api; 