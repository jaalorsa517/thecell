export default {
  data() {
    return {
      contents: [
        {
          title: "",
          content: "",
          to: "#eucariota",
          match: [
            "/",
            "/#eucariota",
            "/#app",
            "/#membrana",
            "/#golgi",
            "/#endoplasmatico",
            "/#mitocondrias",
            "/#peroxisomas",
            "/#lisosomas",
            "/#nucleo",
            "/#centriolo",
            "/#citoesqueleto",
            "/#ribosomas",
            "/#procariota",
            "/#videoInfo",
          ],
        },
        {
          title: "",
          content: "",
          to: "#procariota",
          match: ["/#procariota", "/#videoInfo"],
        },
        {
          title: "",
          content: "",
          to: "#videoInfo",
          match: ["/#videoInfo"],
        },
      ],
    };
  },
};
