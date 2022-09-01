module.exports = {
  css: {
    loaderOptions: {
      scss: {
        implementation: require("sass"), // This line must in sass option
        additionalData: `@import "@/styles/app.scss";`,
      },
    },
  },
};
