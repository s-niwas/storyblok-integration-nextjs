module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html,svelte,vue,md}",
    "./components/**/*.{js,ts,jsx,tsx,html,svelte,vue,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-fluid-type"),
    require("@tailwindcss/typography"),
  ],
};
