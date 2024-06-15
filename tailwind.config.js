// import heropatterns from '@lorenzopalaia/tailwind-hero-patterns'

/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
 theme: {
  extend: {
    fontFamily: {
      'fugaz': ["Fugaz One", "sans-serif"]
    }
  //  colors: {
  //   primary: "#FF76CE",
  //   secondary: "#FDFFC2",
  //   tertiary: "#94FFD8",
  //   quarternary: "#A3D8FF",
  //  },
  },
 },
 plugins: [
  require('@lorenzopalaia/tailwind-hero-patterns')
 ],
};
