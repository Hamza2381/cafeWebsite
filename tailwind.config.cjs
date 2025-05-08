// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //     content: [
// //       "./index.html",
// //       "./src/**/*.{js,jsx,ts,tsx}",
// //     ],
// //     theme: {
// //       extend: {
// //         colors: {
// //           primary: "#4B3621",
// //           secondary: "#D2B48C",
// //           accent: "#8B4513",
// //         },
// //         fontFamily: {
// //           sans: ['Poppins', 'sans-serif'],
// //           serif: ['Playfair Display', 'serif'],
// //         },
// //         animation: {
// //           'fade-in': 'fadeIn 0.5s ease-in-out',
// //           'slide-up': 'slideUp 0.5s ease-in-out',
// //           'slide-down': 'slideDown 0.5s ease-in-out',
// //         },
// //         keyframes: {
// //           fadeIn: {
// //             '0%': { opacity: '0' },
// //             '100%': { opacity: '1' },
// //           },
// //           slideUp: {
// //             '0%': { transform: 'translateY(20px)', opacity: '0' },
// //             '100%': { transform: 'translateY(0)', opacity: '1' },
// //           },
// //           slideDown: {
// //             '0%': { transform: 'translateY(-20px)', opacity: '0' },
// //             '100%': { transform: 'translateY(0)', opacity: '1' },
// //           },
// //         },
// //       },
// //     },
// //     plugins: [],
// //   }
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,jsx,ts,tsx}",
//     ],
//     theme: {
//               extend: {
//                 colors: {
//                   primary: "#4B3621",
//                   secondary: "#D2B48C",
//                   accent: "#8B4513",
//                 },
//                 fontFamily: {
//                   sans: ['Poppins', 'sans-serif'],
//                   serif: ['Playfair Display', 'serif'],
//                 },
//                 animation: {
//                   'fade-in': 'fadeIn 0.5s ease-in-out',
//                   'slide-up': 'slideUp 0.5s ease-in-out',
//                   'slide-down': 'slideDown 0.5s ease-in-out',
//                 },
//                 keyframes: {
//                   fadeIn: {
//                     '0%': { opacity: '0' },
//                     '100%': { opacity: '1' },
//                   },
//                   slideUp: {
//                     '0%': { transform: 'translateY(20px)', opacity: '0' },
//                     '100%': { transform: 'translateY(0)', opacity: '1' },
//                   },
//                   slideDown: {
//                     '0%': { transform: 'translateY(-20px)', opacity: '0' },
//                     '100%': { transform: 'translateY(0)', opacity: '1' },
//                   },
//                 },
//               },
//             },
//     plugins: [],
//   }

// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B3621",
        secondary: "#D2B48C",
        accent: "#8B4513",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}