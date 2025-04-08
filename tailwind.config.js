/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 This line is important
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',  // For smaller mobile screens (such as the iPhone SE)
        'sm': '640px',  // Small screens (portrait tablets)
        'md': '768px',  // Medium screens (tablets)
        'lg': '1024px', // Large screens (desktops)
        'xl': '1280px', // Extra large screens (large desktops)
        '2xl': '1536px', // Ultra large screens (very large monitors)
      },
      colors: {
        'custom-green': '#2C8A2F', // Example of custom color
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
