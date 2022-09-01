import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AgeVerificationView from "../views/AgeVerificationView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: AgeVerificationView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
