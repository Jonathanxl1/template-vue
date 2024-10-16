import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "../pages/home.vue";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: Home }];

export const router = createRouter({ history: createMemoryHistory(), routes });
