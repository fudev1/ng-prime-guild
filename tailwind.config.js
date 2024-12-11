/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Default theme
        'default-primary': '#00e571',
        'default-background': '#2a2747',
        'default-text': '#ffffff',

        // New World theme
        'nw-primary': '#ff7700',
        'nw-background': '#1a1a1a',
        'nw-text': '#ffffff',

        // Thrones Liberty theme
        'tl-primary': '#9c27b0',
        'tl-background': '#120f1a',
        'tl-text': '#ffffff',
      },
    },
  },
  plugins: [],
}

