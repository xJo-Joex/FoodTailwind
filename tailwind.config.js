module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      //remplaza los valores por defecto
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      //añade este color
      colors: {
        cyan: "#9cdbff",
        primary: "#f3c6114",
        secondary: "#353535",
      },
      height: {
        100: "25rem",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
