import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projetos",
    name: "Projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
  },
  {
    path: "/sobre",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/contato",
    name: "Contact",
    component: () =>
      import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.afterEach((routeTo, routeFrom) => {
  window.scrollTo(0,0);
})


export default router;
