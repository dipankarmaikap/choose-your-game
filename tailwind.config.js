const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: {
    enabled: production,
    content: ["./src/**/*.html", "./src/**/*.svelte"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#21252A",
          200: "#21242A",
          300: "#181A1E",
          400: "#0e0e10",
          500: "#030404",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
