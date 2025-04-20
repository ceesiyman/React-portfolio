import { AxiosInstance } from 'axios';

declare const api: AxiosInstance;

export const getProjects: () => Promise<{ data: any[] }>;
export const getProject: (id: string) => Promise<{ data: any }>;
export const getExperiences: () => Promise<{ data: any[] }>;
export const getEducations: () => Promise<{ data: any[] }>;
export const getSkills: () => Promise<{ data: any[] }>;
export const getSettings: () => Promise<{ data: any[] }>;
export const getSocialMedia: () => Promise<{ data: any[] }>;
export const submitContact: (data: {
  name: string;
  email: string;
  message: string;
}) => Promise<{ data: any }>;

export default api; 