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
        props: true,
      },
    ],
  },
  {
    path: "/ref",
    name: "Referencias",
    component: () => import("@/views/Refer.vue"),
  },
  {
    path: "/auths",
    name: "Autores",
    component: () => import("@/views/Authors.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      if (window.innerWidth < 768) {
        return {
          selector: to.hash,
          offset: { x: 0, y: 120 },
          behavior: "smooth",
        };
      }
      return {
        selector: to.hash,
        offset: {
          y: 60,
          x: 0,
        },
        behavior: "smooth",
      };
    }
  },
});

export default router;
