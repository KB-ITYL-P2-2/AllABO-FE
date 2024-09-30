<template>
  <div
    class="flex h-[300px] relative duration-100 gap-3"
    :style="{
      width: isNow && isHover ? '450px' : '200px',
      transform: isNow && isHover ? 'translateX(-100px)' : 'none',
    }"
  >
    <img v-if="item.cardImageUrl !== null" :src="`${item.cardImageUrl}`" class="" alt="" />
    <div v-else class="bg-red-500 rounded-xl w-[200px]"></div>

    <!-- opacity와 visibility에 조건부 transition 적용 -->
    <div
      class="flex flex-col flex-1 gap-6 text-left"
      :style="{
        opacity: isHover && isNow ? 1 : 0,
        transition: isHover && isNow ? 'opacity 1000ms' : 'none', // 나타날 때만 transition 적용
      }"
    >
      <h1 class="font-bold underline text-kb-brown-1 text-[22px]">{{ item.cardName }}</h1>
      <h3 class="text-kb-brown-1 text-[18px]">{{ item.cardContent }}</h3>
      <div class="mt-4">
        <button class="text-white bg-kb-brown-1 rounded-[15px] p-4">자세히 보기</button>
        <button class="p-3 ml-4 bg-white rounded-full">
          <font-awesome-icon :icon="['far', 'heart']" class="text-kb-yellow-3" size="xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isHover: {
    type: Boolean,
    required: true,
  },
  isNow: {
    type: Boolean,
    required: true,
  },
});
</script>
