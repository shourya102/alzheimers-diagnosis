import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'montserrat': 'Montserrat, sans-serif',
                'pt-serif': 'PT Serif, serif',
                'bebas-neue': 'Bebas Neue, sans-serif',
            }
        },
    },
    plugins: [
        plugin(function ({addVariant}) {
            addVariant('children', '& > *');
        })],
}