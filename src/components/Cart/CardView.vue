<template>
  <div class="w-full min-h-[400px] shadow">
    <div
      class="bg-cover relative w-full h-1/2"
      :style="{ backgroundImage: `url(${imageDefault})` }">
      <div class="absolute bottom-2 right-2">icon</div>
    </div>
    <div class="flex flex-col p-4">
      <h3>Product Name</h3>
      <span>Price</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageDefault from "../../assets/default_image.jpg";
</script>

<style scoped></style>
