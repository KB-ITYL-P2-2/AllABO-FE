<template>
  <div :class="isNow && isHover && 'bg-red-500'">
    <img :src="`${item.cardImageUrl}`" class="block" alt="" />
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isHover:{
    type: Boolean,
    required: true
  },
  isNow:{
    type:Boolean,
    required: true
  }
  // index:{
  //   type: Number,
  //   required: true
  // },
  // currentIndex:{
  //   type: Number,
  //   required: true
  // }
});
</script>
