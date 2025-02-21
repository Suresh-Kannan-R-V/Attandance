import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "core", // prefix for themes variables
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        light: {
          extend: "light",
          layout: {},
          colors: {
            secondary: {
              DEFAULT: "#539bff",
            },
            background: {
              DEFAULT: "#F1F5F9",
              foreground: "#FFFFFF",
            },
            content1: {
              DEFAULT: "#171A1C",
            },
          },
        },
        dark: {
          extend: "dark",
          layout: {},
          colors: {
            secondary: {
              DEFAULT: "#539bff",
            },
            background: {
              DEFAULT: "#1A202C",
              foreground: "#020C17",
            },
            content1: {
              DEFAULT: "#FCFBFC",
            },
          },
        },
      },
    }),
  ],
};
