/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], //TODO: get smaller font files
        baloo: ["Baloo", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "burnt": "#312F2A",
        "schmarrn-dark": "#F4E4A8",
        "schmarrn-light": "#FFEFB5",
        "rum": "#DEB292",
        "glass": "rgba(217, 217, 217, 62)",
        "night": "#201F1B",
        "kaiserschmarrn-raw": "#FFF8E1",
        "light": "rgba(255, 255, 255, 0.8)"
      },
    },
  },
  plugins: [],
}
