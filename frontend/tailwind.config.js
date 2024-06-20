/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'xsm':"360px",
      },
      fontFamily: {
        shojumaru: ["Shojumaru", " sans-serif"],
        zoco:[ "ZCOOL KuaiLe", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
