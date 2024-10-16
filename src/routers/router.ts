import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/home.vue";
import Admin from "../pages/admin.vue";
import Cart from "../pages/cart.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    name: "Shop",
  },
  { path: "/admin", component: Admin, name: "Administration" },
  { path: "/cart", component: Cart, name: "Cart" },
];

export const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to) => {
  console.log(to.name);
});
