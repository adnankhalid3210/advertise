module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE,
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          mode: "local",
          localIdentName: "[name]__[query]__[local]___[hash:base64:5]",
        },
        localsConvention: "camelCaseOnly",
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
}
