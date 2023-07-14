/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      "soft-blue": "#81b6bd",
      "bright-blue": "#34bbcc",
      gray: "#e5eaee",
      gray2: "#9c9c9c",
      gray3: "#d9d9d9",
      gray4: "#828282",
      gray5: "#dcd9da",
      "gray-ghosted": "#828282",
      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF",
    },
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1024px",
      xl: "1250px",
      "2xl": "1440px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
