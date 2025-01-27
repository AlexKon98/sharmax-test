<template>
  <div class="container">
    <div class="lg:text-center mb-5 lg:mb-[123px]">
      <h1 class="text-3xl font-bold text-[22px] lg:text-[30px] mb-5 lg:mb-[27px]">
        Sharmax Expert Pro 300
      </h1>
      <p class="text-gray-600 max-w-[990px] mx-auto font-helveticaLight text-[14px] lg:text-[18px]">
        A new level of quality in the world of enduro. The Sharmax Expertpro 300 is one of the most powerful bikes from
        Sharmax Motors. Responsive and reliable, the ExpertPro 300 motorcycle will give you a feeling of superiority on
        any track.
      </p>
    </div>

    <div class="relative">
      <div class="
          hidden
          lg:flex
          justify-center
          justify-between
          max-w-[1048px]
          w-full
          mx-auto
          absolute
          left-1/2
          -top-[96px]
          -translate-x-1/2
          p-10
          px-16
          bg-[#F6F6F6]
          rounded-3xl
        ">
        <div class="text-center w-[176px]" v-for="(block, i) in blocks" :key="i">
          <h2 class="text-xl font-500 pb-3 mb-3 border-b-[2px] border-[rgb(176,176,176)] text-[#1d1d1d] font-semibold">
            {{ block.value }}
          </h2>
          <p class="text-[rgba(37,37,37,0.8)] text-[18px] leading-auto font-helveticaLight">
            {{ block.description }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-2.5 lg:gap-5 lg:grid-cols-3 lg:grid-cols-[1fr, repeat(3, 1fr)]">
        <div v-for="(block, i) in blocks" :key="i"
          :class="[i === 0 ? 'col-span-1 lg:col-span-3 lg:max-h-[526px]' : 'h-[134px] lg:h-[344px]', i % 2 !== 0 ? 'flex-row-reverse' : '']"
          class="flex w-full justify-between gap-2.5">
          <div
            class="lg:hidden flex flex-col justify-center align-center text-center rounded-[12px] p-[17.5px] bg-[#F6F6F6] w-[calc(50%-5px)]">
            <h3 class="pb-[10px] mb-[10px] border-b-[2px] border-[rgb(176,176,176)] text-[#1d1d1d]">{{ block.value }}
            </h3>
            <p class="text-[rgba(37,37,37,0.8)] font-helveticaLight text-left">{{ block.description }}</p>
          </div>
          <img
            class="max-h-full max-w-full h-full lg:h-full w-[calc(50%-5px)] lg:min-w-full rounded-[12px] lg:rounded-[24px] object-cover"
            :src="block.img" :alt="block.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Block {
  value: string,
  description: string,
  img: string
};

const blocks = ref<Block[]>([
  { value: '130km/h', description: 'Conquering the limits of speed', img: '/img/bike1.jpg' },
  { value: '265kg', description: 'Optimal weight for lightness', img: '/img/bike2.jpg' },
  { value: '27.00hp', description: 'The power of the beast inside', img: '/img/bike3.jpg' },
  { value: '280cc', description: 'Thoughtful structure of every detail', img: '/img/bike4.jpg' },
]);
</script>
