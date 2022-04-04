module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        domaine: ["made", "serif"],
      },
      textIndent: {
        none: "-9999px",
      },
      colors: {
        salmon: "#fbeeec",
        gray: "#313131",
        sweet: "#f6f6ed",
      },
      borderWidth: {
        default: "1px",
      },
      width: {
        double: "200%",
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
