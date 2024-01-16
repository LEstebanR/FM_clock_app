/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["inter", "system-ui", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "day-mobile": "url('./src/assets/mobile/bg-image-daytime.jpg')",
        "night-mobile": "url('./src/assets/mobile/bg-image-nighttime.jpg')",
        "day-tablet": "url('./src/assets/tablet/bg-image-daytime.jpg')",
        "night-tablet": "url('./src/assets/tablet/bg-image-nighttime.jpg')",
        "day-desktop": "url('./src/assets/desktop/bg-image-daytime.jpg')",
        "night-desktop": "url('./src/assets/desktop/bg-image-nighttime.jpg')",
      },
    },
  },
  plugins: [],
};
