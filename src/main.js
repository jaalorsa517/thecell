import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mixin from "@/mixins/contentMixin";
import "@/styles/main.scss";

Vue.config.productionTip = false;

Vue.mixin(mixin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
