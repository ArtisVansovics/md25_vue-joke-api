import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NamesView from "@/views/NamesView.vue";
import JokesView from "@/views/JokesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "names",
    component: NamesView,
  },
  {
    path: "/random-jokes",
    name: "randomJokes",
    component: JokesView,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/JokesView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
