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
        sm: "30rem", // 480px
        md: "40rem", // 640px
        lg: "48rem", // 768px
        xl: "62rem", // 992px
        "2xl": "64rem", // 1024px
        "3xl": "70rem", // 1120px
      },
    },
    extend: {
      colors: {
        primary: "#FCD005",
        secondary: "#FFE70C",
        teritary: "#FFF4B0",
        quaternary: "#EFF2F5",

        dark: "#101820",
        "dark-gray": "#1F314F",

        light: "#EFF2F5",

        "text-dark": "#333333",
        "text-gray": "#707479",

        "border-light": "#DFE5EA",
        "hover-bg-dark": '#1F314FCC',
      },
      fontFamily: {
        "Noto-Sans": ["Noto Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "heading-1": ["4rem", "3rem"], // 64px, 48px
        "heading-2": ["3rem", "2.25rem"], // 48px, 36px
        "heading-3": ["2.25rem", "1.75rem"], // 36px, 28px
        "heading-4": ["1.75rem", "1.25rem"], // 28px, 20px
        "heading-5": ["1rem", "1.5rem"], // 16px, 24px
        "heading-6": ["0.875rem", "1.25rem"], // 14px, 20px

        "paragraph-1": ["1.5rem", "1.125rem"], // 24px, 18px
        "paragraph-2": ["1.25rem", "1rem"], // 20px, 16px

        btn: ["1rem", "1.5rem"], // 16px, 24px
      },
    },
  },
  plugins: [require("daisyui")],
};
