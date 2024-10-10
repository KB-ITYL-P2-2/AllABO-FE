<template>
  <div
    class="relative bg-[#FFF7CD] rounded-2xl shadow-md w-[280px] h-[380px] overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 right-0 h-1/3 flex items-center justify-center"
    >
      <h2 class="text-lg text-center font-bold text-font-color">{{ title }}</h2>
    </div>

    <div class="absolute top-1/3 bottom-0 left-0 right-0 flex items-center justify-center p-5">
      <p class="text-center">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
});
</script>
