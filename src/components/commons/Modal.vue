<template>
  <div>
    <Teleport to="body">
      <div
        class="fixed inset-0 top-1/4 left-1/4 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-4 max-w-lg bg-white, rounded-lg, shadow-lg w-1/2 h-1/3"
        v-if="open">
        <p>Hello from the modal!</p>
        <slot></slot>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  let open = ref(false);
</script>

<style scoped></style>
