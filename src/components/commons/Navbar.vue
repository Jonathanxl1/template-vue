<template>
  <nav class="w-full h-12 flex justify-between p-4 bg-red-500">
    <RouterLink to="/">
      <div>Logo</div>
    </RouterLink>
    <div class="hidden md:block">Links</div>
    <div class="block md:hidden">Links Mobile</div>
  </nav>
</template>

<script setup lang="ts"></script>
