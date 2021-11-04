import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
          nav: () => import("@/components/cNavigation.vue"),
          content: () => import("@/components/cContent"),
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
});

export default router;
