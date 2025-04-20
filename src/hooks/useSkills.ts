import { useState, useEffect } from 'react';
import { getSkills, Skill } from '../services/api';

interface ApiResponse {
  status: string;
  data: Skill[];
}

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const skillsData = await getSkills();
        setSkills(skillsData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError(err instanceof Error ? err.message : 'Failed to load skills');
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
}; 