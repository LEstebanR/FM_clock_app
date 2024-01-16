/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["inter", "system-ui", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "day-mobile": "url('/images/mobile/bg-image-daytime.jpg')",
        "night-mobile": "url('/images/mobile/bg-image-nighttime.jpg')",
        "day-tablet": "url('/images/tablet/bg-image-daytime.jpg')",
        "night-tablet": "url('/images/tablet/bg-image-nighttime.jpg')",
        "day-desktop": "url('/images/desktop/bg-image-daytime.jpg')",
        "night-desktop": "url('/images/desktop/bg-image-nighttime.jpg')",
      },
    },
  },
  plugins: [],
};
