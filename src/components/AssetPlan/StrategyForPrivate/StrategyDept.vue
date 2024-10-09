<template>
  <div class="">
    <span class="rounded-[100px] py-6 px-8 text-center bg-kb-yellow-9 whitespace-nowrap shadow-lg text-[26px]">{{ text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
