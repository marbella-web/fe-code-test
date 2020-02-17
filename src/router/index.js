import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../components/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/components",
    name: "Product",
    component: Product
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "product-list" */ "@/views/ProductList")
  }
];

const router = new VueRouter({
  routes
});

export default router;
