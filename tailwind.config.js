module.exports = {
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  container: {
    center: true,  // Ensures it's always centered
    padding: "2rem", // Adds default padding
  },
  extend: {
    screens: {
      "3xl": "1600px", // Add a custom breakpoint
    },
  },

  extend: {
    fontSize: {
      'tiny': '10px', // Custom small font size
      'xxl': '40px',  // Custom extra-large font size
      'huge': '100px' // Super large font size
    }
  },
  
  extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

