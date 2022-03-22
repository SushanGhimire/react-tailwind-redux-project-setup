module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: "#f36",
        sucess: "#4CAF50",
        disable: "#EAEBEC",
        border: {
          DEFAULT: "#eaeaea",
          dark: "#ACACAC",
          light: "#ECECEC",
          extraLight: "#E8E9EB",
        },
        text: {
          DEFAULT: "#333333",
          primary: "#1A1A1A",
          tertiary: "#575757",
          paragraph: "#4D5461",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
