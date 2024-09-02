/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: "#bac4c8",
      black: "#212121",
      white: "#fffcf7",
      gold: "#E6BD37",
      darkblack: "#0C0A00",
    },
    extend: {
      screens: {
        'xs': '480px',   // Extra small devices (portrait phones)
        'sm': '640px',   // Small devices (landscape phones)
        'md': '768px',   // Medium devices (tablets)
        'lg': '1024px',  // Large devices (desktops)
        'xl': '1280px',  // Extra large devices (large desktops)
        '2xl': '1536px', // 2XL large devices
        '3xl': '1920px', // 3XL large screens
        '4xl': '2560px', // 4XL ultra-wide screens
      },
      fontFamily: {
        custom: ["CustomFont", "sans-serif"],
        customSecond: ["CustomFontSecond", "sans-serif"],
      },

      colors: {
        red: {
          500: "#ff0000", // Custom red color for red-500
          // Add or override other shades if needed
        },
      },
    },
  },
  plugins: [],
};
