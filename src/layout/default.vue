<template>
  <div class="w-full lg:min-h-[400px] sm:min-h-screen bg-redes">
    <Navbar />
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Navbar from "../components/commons/Navbar.vue";
</script>

<style scoped></style>
