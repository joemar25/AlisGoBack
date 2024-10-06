/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "var(--black)",
        gray: "var(--gray)",
        green: "var(--green)",
        white: "var(--white)",
      },
      fontFamily: {
        "heading-1": "var(--heading-1-font-family)",
        "heading-2": "var(--heading-2-font-family)",
        "heading-3": "var(--heading-3-font-family)",
        "heading-4": "var(--heading-4-font-family)",
        "heading-5": "var(--heading-5-font-family)",
        "heading-6": "var(--heading-6-font-family)",
        "heading-7": "var(--heading-7-font-family)",
        paragraph: "var(--paragraph-font-family)",
      },
      boxShadow: {
        "drop-shadow-1": "var(--drop-shadow-1)",
      },
    },
  },
  plugins: [],
};
