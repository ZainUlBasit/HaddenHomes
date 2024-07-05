/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(128.08deg, #FEFFF2 14.87%, #F1F4DC 47.86%, #FFFEFB 78.93%, #F9FAF2 78.93%)",
      },
    },
  },
  plugins: [],
};
