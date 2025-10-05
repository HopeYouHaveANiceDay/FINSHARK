module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightBlue: "hsl(215.02, 98.39%, 51.18%)",
        darkBlue: "hsl(213.86, 58.82%, 46.67%)",
        lightGreen: "hsl(156.62, 73.33%, 58.82%)",
        softPink: "hsla(340, 100%, 80%, 1.00)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};

/*
Tailwind CSS 中的 theme.screens，用來定義響應式斷點（Responsive Breakpoints），也就是根據螢幕寬度自動切換樣式的條件。

screens: {
  sm: "480px",   // 手機
  md: "768px",   // 平板
  lg: "1020px",  // 筆電
  xl: "1440px",  // 桌機
}

screens 是用來定義響應式斷點，例如 sm:, md: 等前綴的寬度條件。
className="text-center" 是 JSX 的語法，應該寫在元件裡面，不是設定檔裡面。
*/