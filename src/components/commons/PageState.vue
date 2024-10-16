<template>
  <div
    class="w-full min-h-[200px] bg-blue-400 flex justify-center items-center">
    <span>{{ currentPage }}</span>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";

  const router = useRoute();
  const currentPage = ref("");

  onMounted(() => {
    currentPage.value = String(router.name);
  });
</script>

<style scoped></style>
