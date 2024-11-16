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
                "theme-grayish-blue": "#adadac",
                "theme-dark-blue": "#000000",
                "theme-dark-blue-tp": "rgba(67, 37, 71, 0.9)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
