module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-use-before-define": "off",
  },
  overrides: [
    {
      files: ["{src,tests}/**/*.{spec,test}.{j,t}s?(x)"],
      env: {
        mocha: true,
      },
    },
  ],
  plugins: ["import"],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"], //default @ -> ./src alias in Vue, it exists even if vue.config.js is not present
          /*
           *... add your own webpack aliases if you have them in vue.config.js/other webpack config file
           * if you forget to add them, eslint-plugin-import will not throw linting error in .vue imports that contain the webpack alias you forgot to add
           */
        ],
        extensions: [".vue", ".json", ".js", ".ts", ".tsx", ".jsx"],
      },
    },
  },
}
