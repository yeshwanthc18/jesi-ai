/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Helvetica', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Helvetica', 'sans-serif'],
        mono: ['DM Mono', 'Plus Jakarta Sans', 'monospace'],
      },
      colors: {
        // Primary palette
        brand: {
          red: '#A91E2D',
          dark: '#1F2020',
        },
        // Secondary palette
        gray: {
          DEFAULT: '#4A4A4A',
          light: '#F0F0F0',
        },
        amber: '#F5A623',
        // Legacy aliases (kept for existing components)
        teal: '#0BCBB8',
        pink: '#F72585',
        yellow: '#F5E100',
        jade: '#00C85A',
        orange: '#FF6B2B',
        ink: {
          50: '#ffffff',
          100: '#F8F8F7',
          200: '#EAEAEA',
          300: '#D4D4D4',
          400: '#A8A8A8',
          500: '#717171',
          600: '#555555',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
