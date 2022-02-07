import Vue from "vue";
import VueRouter from "vue-router";
import KatalogHome from "@/views/PageKatalogHome";
import KatalogData from "@/views/PageKatalogData";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "KatalogHome",
    component: KatalogHome,
  },
  {
    path: "/Katalog%20Makanan",
    name: "KatalogData",
    component: KatalogData,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
