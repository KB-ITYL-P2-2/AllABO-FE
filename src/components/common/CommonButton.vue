<template>
  <button class="text-white bg-kb-brown-2 rounded-[15px] py-2 px-4">{{ text }}</button>
</template>

<script setup>
const props = defineProps({
  text:{
    type: String,
    required: true
  }
})
</script>