/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.vue"],
    theme: {
        fontFamily: {
            "theme-heading": ["Roboto", "sans-serif"],
            "theme-content": ["Roboto", "sans-serif"],
        },
        extend: {
            colors: {
                "theme-primary": "#FFC059",
                "theme-secondary": "#000000",
                "theme-grayish-blue": "#333333",
                "theme-dark-blue": "#000000",
                "theme-dark-blue-tp": "#1c1c1c",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
