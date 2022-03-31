module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        domaine: ["domaine", "serif"],
      },
      textIndent: {
        none: "-9999px",
      },
      colors: {
        salmon: "#fbeeec",
        gray: "#313131",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
