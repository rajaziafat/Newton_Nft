/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      brand: {
        100: "rgba(57, 57, 57,.1)",
        200: "rgba(57, 57, 57,.2)",
        300: "rgba(57, 57, 57,.3)",
        400: "rgba(57, 57, 57,.4)",
        500: "rgba(57, 57, 57,.5)",
        600: "rgba(57, 57, 57,.6)",
        700: "rgba(57, 57, 57,.7)",
        800: "rgba(57, 57, 57,.8)",
        900: "rgba(57, 57, 57,.9)",
        1000: "rgba(57, 57, 57,1)",
      },
      primary: "#6F6C72",
      secondary: {
        100: "rgba(203, 207, 209,.1)",
        200: "rgba(203, 207, 209,.2)",
        300: "rgba(203, 207, 209,.3)",
        400: "rgba(203, 207, 209,.4)",
        500: "rgba(203, 207, 209,.5)",
        600: "rgba(203, 207, 209,.6)",
        700: "rgba(203, 207, 209,.7)",
        800: "rgba(203, 207, 209,.8)",
        900: "rgba(203, 207, 209,.9)",
        1000: "rgba(203, 207, 209,1)",
      },
    },
    fontFamily: {
      questrial: "'Questrial', sans-serif",
      "eras-demi": "eras-demi",
      rajdhani: "'Rajdhani', sans-serif",
      staatliches: "'Staatliches', cursive;",
    },

    extend: {
      spacing: {
        ofNavbarHeight: "var(--navbar-height)",
        "1px": "1px",
        "100px": "100px",
        "150px": "150px",
        "200px": "200px",
      },
      borderWidth: {
        "1px": "1px",
      },
      dropShadow: {
        navLinks: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        rarity:
          "linear-gradient(181.61deg, rgba(255, 255, 255, 0.05) 1.36%, rgba(255, 255, 255, 0) 218.8%)",
        "rarity-active":
          "linear-gradient(163.54deg, rgba(27, 146, 255, 0.05) 1.3%, rgba(255, 255, 255, 0.05) 97.64%)",
        "rarity-orange":
          "linear-gradient(136.06deg, rgba(222, 143, 49, 0.055) 0.34%, rgba(255, 138, 0, 0.045) 147.77%)",
      },
    },
  },
  plugins: [],
};
