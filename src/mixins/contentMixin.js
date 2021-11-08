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
            "/?id=0#eucariota",
            "/?id=0#app",
            "/?id=0#membrana",
            "/?id=0#golgi",
            "/?id=0#endoplasmatico",
            "/?id=0#mitocondrias",
            "/?id=0#peroxisomas",
            "/?id=0#lisosomas",
            "/?id=0#nucleo",
            "/?id=0#centriolo",
            "/?id=0#citoesqueleto",
            "/?id=0#ribosomas",
            "/?id=0#procariota",
            "/?id=0#videoInfo",
          ],
        },
        {
          title: "",
          content: "",
          to: "#procariota",
          match: ["/?id=1#procariota", "/?id=1#videoInfo"],
        },
        {
          title: "",
          content: "",
          to: "#videoInfo",
          match: ["/?id=2#videoInfo"],
        },
      ],
    };
  },
};
