import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 2 colunas de 1fr e 400px
        "home-container": "auto 400px",
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
