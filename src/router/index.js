import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import nav from "@/components/cNavigation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        components: {
          nav,
          content: () => import("@/components/cContent.vue"),
        },
      },
    ],
  },
  {
    path: "/ref",
    name: "Referencias",
    component: () => import("@/views/Refer.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
