<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
    <CardView></CardView>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  import CardView from "../components/Cart/CardView.vue";
  import { useProductsStore } from "../store/products.store";

  const store = useProductsStore();

  onMounted(() => {
    store.getProducts();
  });
</script>

<style scoped></style>
