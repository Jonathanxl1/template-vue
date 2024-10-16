import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        redes: "#fff000",
      },
    },
  },
  plugins: [],
} satisfies Config;
