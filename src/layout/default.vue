<template>
  <div class="w-full lg:min-h-[400px] sm:min-h-screen bg-slate-200">
    <Navbar />
    <main>
      <PageState />
      <RouterView></RouterView>
      <Footer></Footer>
    </main>
    <Modal></Modal>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/commons/Navbar.vue";
import PageState from "@/components/commons/PageState.vue";
import Modal from "@/components/commons/Modal.vue";
import Footer from "@/components/commons/Footer.vue";
</script>
