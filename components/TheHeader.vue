<template>
  <header :class="{ 'relative h-32': !isScrolled, 'sticky h-20': isScrolled }" class="
    top-0
    left-0
    w-full
    flex
    justify-between
    items-center
    bg-gray-200
    text-white
    z-10
  ">
    <div class="container flex items-center">
      <img src="@/assets/icons/logo.svg" alt="Logo" class="max-h-15 mr-2" />

      <div class="flex space-x-3 ml-auto">
        <NuxtLink to="/" class="
            px-2
            py-1
            bg-black
            hover:bg-gray-600
            rounded
            text-[12px]
            md:text-[18px]
            font-helveticaLight
          ">
          Главная
        </NuxtLink>

        <NuxtLink to="/second" class="
            px-2
            py-1
            bg-black
            hover:bg-gray-600
            rounded
            text-[12px]
            md:text-[18px]
            font-helveticaLight
          ">
          Вторая страница
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import useScroll from '~/composables/useScroll';

const { isScrolled } = useScroll();
</script>
