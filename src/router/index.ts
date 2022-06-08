import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NamesView from "@/views/NamesView.vue";
import JokesView from "@/views/JokesView.vue";
import JokeView from "@/views/JokeView/JokeView.vue";

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
  {
    path: "/random-jokes/:id",
    name: "joke",
    component: JokeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
