/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,rs}", // HTML va Rust (Yew) fayllarini skaner qilish
    "./public/pages/**/*.html", // HTML fayllarini public/pages papkasida skaner qilish
    "./public/style.css", // CSS faylini skaner qilish
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}






// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './public/pages/**/*.html', // Добавьте эту строку, чтобы сканировать HTML-файлы в папке pages
//     './public/style.css'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }