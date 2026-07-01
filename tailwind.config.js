/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#e8e8ef',
          100: '#c5c5d3',
          200: '#9e9eb5',
          300: '#777797',
          400: '#595980',
          500: '#3b3b69',
          600: '#353561',
          700: '#2d2d56',
          800: '#26264c',
          900: '#19193a',
          950: '#0a0a0f',
        },
        accent: {
          blue: '#38bdf8',
          teal: '#2dd4bf',
          cyan: '#22d3ee',
          gold: '#fbbf24',
          rose: '#fb7185',
        },
        surface: {
          DEFAULT: 'rgba(20, 20, 31, 0.8)',
          light: 'rgba(30, 30, 48, 0.6)',
          card: 'rgba(25, 25, 45, 0.7)',
          hover: 'rgba(35, 35, 55, 0.8)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 20% 30%, rgba(56, 189, 248, 0.08) 0, transparent 50%), radial-gradient(at 80% 70%, rgba(45, 212, 191, 0.08) 0, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(56, 189, 248, 0.15)',
        'glow-md': '0 0 20px rgba(56, 189, 248, 0.2)',
        'glow-lg': '0 0 30px rgba(56, 189, 248, 0.25)',
        'glow-teal': '0 0 20px rgba(45, 212, 191, 0.2)',
        'dark-lg': '0 10px 40px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
