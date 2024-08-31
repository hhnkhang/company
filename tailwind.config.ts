import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        1: "var(--colour--bg-1)",
        2: "var(--colour--bg-2)",
        3: "var(--colour--bg-3)",
        4: "var(--colour--bg-4)",
        5: "var(--colour--bg-5)",
        colour1: "--colour--border-1",
        colour2: "--colour--border-2",
      },
    },
  },
  plugins: [],
};
export default config;
