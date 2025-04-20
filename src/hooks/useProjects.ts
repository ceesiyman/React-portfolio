import { useState, useEffect } from 'react';
import { getProjects, getProject } from '../services/api';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  image: string;
  github_link: string | null;
  live_link: string | null;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await getProjects();
        setProjects(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const fetchProject = async (id: number) => {
    try {
      setLoading(true);
      const response = await getProject(id.toString());
      return response.data;
    } catch (err) {
      setError('Failed to fetch project');
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { projects, loading, error, fetchProject };
}; 