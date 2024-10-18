<template>
  <div class="w-full lg:min-h-[400px] sm:min-h-screen bg-redes">
    <Navbar />
    <main>
      <PageState />
      <RouterView></RouterView>
    </main>
    <Modal></Modal>
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Navbar from "../components/commons/Navbar.vue";
  import PageState from "../components/commons/PageState.vue";
  import Modal from "../components/commons/Modal.vue";
</script>
