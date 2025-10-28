import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#FAFAFA",
        card: "#FFFFFF",
        divider: "#E8E8E8",
        disabled: "#A0A0A0",
        subtext: "#4A4A4A",
      },
      borderRadius: {
        md: "12px",
        xl: "18px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
