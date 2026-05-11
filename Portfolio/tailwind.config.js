/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080810',
          secondary: '#0d0d1a',
          card: '#111120',
          border: '#1e1e3a',
        },
        accent: {
          primary: '#7c6af7',
          secondary: '#5a4fcf',
          glow: 'rgba(124,106,247,0.15)',
        },
        text: {
          primary: '#e8e8f0',
          secondary: '#888899',
          muted: '#555566',
          accent: '#7c6af7',
        },
        green: {
          glow: '#22c55e',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'Consolas', 'monospace'],
        sans: ['"Inter"', '"DM Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(124,106,247,0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(124,106,247,0.5)' },
        },
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
