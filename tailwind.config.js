/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "t-primary-color": "var(--primary-color)",
        "t-bg-color": "var(--bg-color)",
        "t-text-color": "var(--text-color)",
        "t-layer-bg-color": "var(--layer-bg-color)",
        "t-input-color": "var(--input-color)",
        "t-text-scondary-color": "var(--text-color-secondary)",
        "t-bg-table-even": "var(--table-even-row)",
        "t-bg-table-odd": "var(--table-even-odd)",
      },
    },
  },
  plugins: [],
};
