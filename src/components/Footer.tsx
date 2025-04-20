import React, { useState, useEffect } from 'react';
import { getSocialMediaLinks, SocialMediaLink } from '../services/api';
import { IconType } from 'react-icons';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaFacebook, 
  FaYoutube, 
  FaGlobe 
} from 'react-icons/fa';

const getPlatformIcon = (platform: string): IconType => {
  const platformIcons: { [key: string]: IconType } = {
    'github': FaGithub,
    'linkedin': FaLinkedin,
    'twitter': FaTwitter,
    'instagram': FaInstagram,
    'facebook': FaFacebook,
    'youtube': FaYoutube,
    'website': FaGlobe,
  };

  return platformIcons[platform.toLowerCase()] || FaGlobe;
};

const IconWrapper: React.FC<{ icon: IconType; className?: string }> = ({ icon, className }) => {
  const IconComponent = icon as React.ComponentType<{ className?: string }>;
  return <IconComponent className={className} />;
};

const Footer: React.FC = () => {
  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const links = await getSocialMediaLinks();
        setSocialMediaLinks(links);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching social media links:', err);
        setError(err instanceof Error ? err.message : 'Failed to load social media links');
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  if (loading) {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-primary-500"></div>
          </div>
        </div>
      </footer>
    );
  }

  if (error) {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} EL-BICHO. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialMediaLinks.map((link) => {
              const icon = getPlatformIcon(link.platform);
              return (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  title={link.platform}
                >
                  <IconWrapper icon={icon} className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 