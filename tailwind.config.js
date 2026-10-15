/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316',
          hover: '#EA580C',
        },
        teal: {
          DEFAULT: '#14B8A6',
          dark: '#0D9488',
          light: '#CCFBF1',
        },
        secondary: {
          DEFAULT: '#101C30',
          dark: '#0A1220',
        },
        navy: {
          DEFAULT: '#101C30',
          dark: '#0A1220',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          clean: '#F8FAFC',
        },
        neutral: {
          border: '#E2E8F0',
          text: '#64748B',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'Outfit', 'sans-serif'],
        body: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(16, 28, 48, 0.08)',
      },
    },
  },
  plugins: [],
}
