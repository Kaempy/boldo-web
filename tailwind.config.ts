import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        "light-gray": "var(--light-gray)",
        "dark-gray": "var(--dark-gray)",
      },
      backgroundImage: {
        card: "url('/card-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
