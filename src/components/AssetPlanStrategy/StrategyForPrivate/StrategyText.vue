<template>
  <h1 class="text-[36px] whitespace-nowrap">
    월 지출을 {{ percent }}% {{ increaseText }}하여<br />
    <span class="text-red-500 text-[44px] my-3 block">
      {{ strategy }}<br
    /></span>
    을 고려해야 합니다.
  </h1>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  percent: {
    type: Number,
    required: true,
  },
  isIncrease: {
    type: Boolean,
    required: true,
  },
  strategy: {
    type: String,
    required: true,
  },
});

const increaseText = computed(() => {
  return props.isIncrease ? '증가' : '감소';
});
</script>
