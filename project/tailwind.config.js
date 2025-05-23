/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['Courier New', 'monospace'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'fade-in': {
          'from': { opacity: 0, transform: 'translateY(10px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'retro': '5px 5px 0px 0px rgba(146, 64, 14, 0.8)',
        'retro-zinc': '5px 5px 0px 0px rgba(82, 82, 91, 0.8)',
        'neon': '0 0 5px rgba(163, 230, 53, 0.5), 0 0 10px rgba(163, 230, 53, 0.3)',
      },
    },
  },
  plugins: [],
};