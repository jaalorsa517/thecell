module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/vars.scss";
          @import "@/styles/mixins.scss";
        `,
      },
    },
  },
};
