/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato'], // override default sans
      },
    },
  },
  plugins: [],
}