<template>
  <div class="">
    <span class="absolute bg-white rounded-[100px] py-1 px-4 top-[-38px] left-[41%]">{{ title }}</span>
    <span class="rounded-[100px] py-6 px-8 text-center bg-kb-yellow-9 whitespace-nowrap shadow-lg text-[26px]">{{ content }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required : true
  },
  content: {
    type: String,
    required : true
  }
})
</script>