/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "rum": "rgba(215, 142, 89, 62)",
        "glass": "rgba(217, 217, 217, 62)",
        "night": "#21201d",
        "kaiserschmarrn-raw": "#FFF8E1"
      }
    },
  },
  plugins: [],
}
