import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login/Login.vue"),
  },

  {
    path: "/error",
    name: "Error",
    component: () => import("@/components/Error/Error.vue"),
  },
  {
    path: "/:path(.*)*",
    name: "NotFound",
    component: () => import("@/components/NotFound/NotFound.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
