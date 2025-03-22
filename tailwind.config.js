module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte,scss}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        inter: ["Inter", "san-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        cherry: "#EC1C23",
      },
    },
  },
  plugins: [],
};
