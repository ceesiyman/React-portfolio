/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          100: '#0a0a0a',
          200: '#1a1a1a',
          300: '#2a2a2a',
          400: '#3a3a3a',
          500: '#4a4a4a',
        },
        neon: {
          blue: '#00f7ff',
          green: '#00ff9d',
          purple: '#b967ff',
        }
      },
      fontFamily: {
        'mono': ['Fira Code', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'terminal': 'terminal 1s steps(40, end)',
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        terminal: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")',
        'neon-green': '0 0 5px theme("colors.neon.green"), 0 0 20px theme("colors.neon.green")',
        'neon-purple': '0 0 5px theme("colors.neon.purple"), 0 0 20px theme("colors.neon.purple")',
      }
    },
  },
  plugins: [],
} 