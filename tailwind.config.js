// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      // todo  세로,가로  모드 레이아웃이 필요
      //todo portrait: { raw: "(orientation: portrait)" },
      //todo landscape: { raw: "(orientation: landscape)" },
      // 모바일, 세로
      sm: "",
      // 타블렛, 모바일 가로, 작은 모니터
      md: "43em",
      // 모니터
      lg: "62em",
      // 큰 모니터
      xl: "82em",
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    mode: "layers",
    layers: ["base", "components", "utilities"],
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.tsx",
      "./src/**/*.css",
      "./src/**/*.scss",
    ],
  },
  variants: {},
  plugins: [],
}
