module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnightBlue': '#1A1C28',
        'duskBlue': '#2b2e42',
        'teal': '#1ad6f9',
        'bumblebee': '#ffc600',
      },
      fontFamily: {
        'roboto': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}