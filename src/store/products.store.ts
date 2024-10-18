import { defineStore } from "pinia";
import { api } from "../services/init";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts() {
      return api.get("/products");
    },
  },
});
