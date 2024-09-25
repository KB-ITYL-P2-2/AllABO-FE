<template>
  <div class="">
    <img :src="`${item.cardImageUrl}`" class="" alt="">
  </div>
</template>

<script setup>
const props = defineProps({
  item:{
    type: Object,
    required: true
  },
  index:{
    type: Number,
    required: true
  },
  currentIndex:{
    type: Number,
    required: true
  }
})
</script>