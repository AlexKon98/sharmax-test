<template>
  <div class="layout">
    <TheHeader />

    <main class="lg:pt-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue';
</script>
