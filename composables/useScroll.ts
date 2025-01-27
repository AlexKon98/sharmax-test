import { ref, onMounted, watch } from 'vue';

export default function useScroll() {
  const scrollY = ref(0);

  const isScrolled = ref(false);

  const handleScroll = () => {
    scrollY.value = window.scrollY;
    isScrolled.value = scrollY.value >= 38;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    watch(isScrolled, (val) => {
    if (val) document.querySelector('main')!.classList.add('scrolled');
    else document.querySelector('main')!.classList.remove('scrolled');
  }, { immediate: true });
  });

  return {
    isScrolled
  };
}