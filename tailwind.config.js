/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0a0a0c',
          800: '#141419',
          700: '#1e1e24',
          600: '#2c2c36',
        },
        neo: {
          bg: '#0a0a0c',
          card: '#141419',
          border: '#ffffff',
          yellow: '#FFE600',
          lime: '#a3e635',
          cyan: '#00E5FF',
          pink: '#FF007F',
          orange: '#FF5C00',
        },
        accent: {
          DEFAULT: '#FFE600',
          light: '#FFF066',
          dark: '#E5CE00',
        },
        muted: '#9ca3af',
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #ffffff',
        'brutal': '4px 4px 0px 0px #ffffff',
        'brutal-lg': '6px 6px 0px 0px #ffffff',
        'brutal-yellow': '4px 4px 0px 0px #FFE600',
        'brutal-yellow-lg': '6px 6px 0px 0px #FFE600',
        'brutal-cyan': '4px 4px 0px 0px #00E5FF',
        'brutal-lime': '4px 4px 0px 0px #a3e635',
        'brutal-pink': '4px 4px 0px 0px #FF007F',
      },
      fontFamily: {
        heading: ['"Outfit"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradientShift 3s ease infinite',
        'spin-slow': 'spin 30s linear infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'marquee': 'marquee 18s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
