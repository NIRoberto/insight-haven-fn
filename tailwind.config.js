/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        heading: "#1e1e24",
        buttonBg: "#fb9f89",
        sectionBg: "#c4af9a",
        btnHover: "#21a179",
      },
      fontWeight: {
        "raleway-light": 300,
        "raleway-regular": 400,
        "raleway-bold": 700,
      },
      backgroundImage: {
        "btn-gradient": "linear-gradient(90deg, #fb9f89, #c4af9a)",
      },
    },
  },
  plugins: [],
};
