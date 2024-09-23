/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: '#f42c37',
        brandYellow: '#fdc62e',
        brandGreen: "#2dcc6f",
        brandBlue: {
          50: '#e1f5ff',   // Very light shade
          100: '#b3e0ff',  // Light shade
          200: '#80c3ff',  // Light-medium shade
          300: '#4da6ff',  // Medium shade
          400: '#1a8cff',  // Slightly darker shade
          500: '#007bf3',  // Main color
          600: '#0066d4',  // Darker shade
          700: '#0052b3',  // Dark-medium shade
          800: '#004080',  // Dark shade
          900: '#00264d',  // Very dark shade
          950: '#001a33',  // Almost black
        },
        brandWhite: "#eeeeee",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
