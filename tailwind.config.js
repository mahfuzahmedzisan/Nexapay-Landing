/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
      screens: {
        sm: "480px",
        md: "640px",
        lg: "768px",
        xl: "992px",
        "2xl": "1024px",
        "3xl": "1120px",
      },
    },
    extend: {
      colors: {
        primary: "#FCD005",
        secondary: "#FFE70C",
        third: "#FFF4B0",

        dark: "#101820",
        "dark-gray": "#1F314F",

        light: "#EFF2F5",

        "text-dark": "#333333",
        "text-gray": "#707479",

        "border-light": "#DFE5EA",
      },
      fontFamily: {
        "Noto-Sans": ["Noto Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "heading-1": ["48px", "64px"],
        "heading-2": ["36px", "48px"],
        "heading-3": ["28px", "36px"],
        "heading-4": ["20px", "28px"],
        "heading-5": ["16px", "24px"],
        "heading-6": ["14px", "20px"],

        "paragraph-1": ["18px", "24px"],
        "paragraph-2": ["16px", "20px"],

        btn: ["16px", "24px"],
      },
    },
  },
  plugins: [require("daisyui")],
};
