/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
    darkTheme: "dim",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    log: true,
    themeRoot: ":root",
  },
}

