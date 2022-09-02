const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "logo-sm": "2.1875rem",
        "logo-lg": "2.5rem",
      },
      colors: {
        darkGrey: "#2C2C2C",
        gold: "#FFD0A8",
        lightGold: "#FFDABB",
        darkGold: "#D9A57A",
        grey: "#959595",
        lightGrey: "#B2B2B2",
        white: "#FFFFFF",
        lightBrown: "#DDD5D0",
      },
    },
    plugins: [],
  },
  // ...
};
