/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue-hover': '0 0 10px rgb(0, 4, 255), inset 0 0 10px rgb(25, 0, 255)',
        'red-hover': '0 0 10px rgb(255, 0, 0), inset 0 0 10px rgb(255, 0, 0)',
      },
    },
    plugins: [],
  }
}
