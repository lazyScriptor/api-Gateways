/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': {
          DEFAULT: '#0353A4',  // Base blue color
          '50': '#e3f2fd',    // Very light blue0
          '100': '#bbdefb',   // Light blue
          '200': '#90caf9',   // Lighter blue
          '300': '#64b5f6',   // Light blue
          'teal':'#00A4A0',
          'dark':'#00A4A0',
          '400': '#42a5f5',   // Medium light blue
          '500': '#2196f3',   // Medium blue
          '600': '#1e88e5',   // Slightly darker blue
          '700': '#1976d2',   // Dark blue
          '800': '#1565c0',   // Darker blue
          '900': '#0d47a1',   // Very dark blue
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
