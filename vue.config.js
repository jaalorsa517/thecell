module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/vars.scss";
          @import "@/styles/mixins.scss";
          @import "@/styles/animations.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "La célula";
      return args;
    });
  },
};
