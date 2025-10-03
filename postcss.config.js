

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


// module.exports = {
//     plugins: {
//         '@tailwindcss/postcss': {}, // ✅ correct plugin for Tailwind v4
//     },
// }

// This tells PostCSS to use the new Tailwind plugin package (@tailwindcss/postcss) instead of the old tailwindcss plugin.