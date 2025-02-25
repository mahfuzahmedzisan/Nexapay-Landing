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
        FontAwesome: ["FontAwesome"]
      },
      fontSize: {
        "heading-1": ["4rem", "4.75rem"], // 64px, 76px
        "heading-2": ["3rem", "3.125rem"], // 48px, 50px
        "heading-3": ["2rem", "2.25rem"], // 32px, 36px
        "heading-4": ["1.75rem", "2rem"], // 28px, 32px
        "heading-5": ["1.5rem", "1.75rem"], // 24px, 28px
        "heading-6": ["1.25rem", "1.5rem"], // 20px, 24px

        "paragraph-1": ["1.5rem", "2.375rem"], // 24px, 38px
        "paragraph-2": ["1.25rem", "1.75rem"], // 20px, 28px

        btn: ["1rem", "1.5rem"], // 16px, 24px
      },
    },
  },
  plugins: [require("daisyui")],
};
