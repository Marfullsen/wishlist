import { createRouter, createWebHistory } from "vue-router";
import HomeSite from "../views/HomeSite.vue";

const routes = [
  {
    path: "/",
    name: "HomeSite",
    component: HomeSite,
  },
  {
    path: "/host",
    name: "HostView",
    component: () =>
      import(/* webpackChunkName: "host" */ "../views/HostView.vue"),
  },
  {
    path: "/guest/:code",
    name: "GuestView",
    component: () =>
      import(/* webpackChunkName: "guest" */ "../views/GuestView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
