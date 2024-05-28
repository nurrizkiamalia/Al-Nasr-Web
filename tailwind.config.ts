import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadow1: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      colors: {
        dspYellow: "#FFC265",
        dspLightGreen: "#C1FFFA",
        dspGreen: "#1DA599",
        dspBgGreen: "#F3FFFE",
        dspBlack: "#4A4A4A",
        dspDarkGray: "#454545",
        dspGray: "",
        dspBtn: "#3F3F3F"
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        kufam: ["var(--font-kufam)"],
      },
      fontSize: {
        heading: "54px",
        heading2: "40px",
        heading3: "32px",
        pText: "24px",
        pXL: "20px",
        pLg: "16px",
        pSm: "12px"
      }
    },
  },
  plugins: [],
};
export default config;
