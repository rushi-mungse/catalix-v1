/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F667F",
        secondary: "#539BBB",
        bgColor: "#F9F9F9",
      },
    },
    boxShadow: {
      "inner-2xl":
        "inset 10px 10px 10px -1px rgba(10,99,169,0.15), inset -10px -10px 10px -1px rgba(255,255,255,0.70)",
    },
  },
  plugins: [],
};
