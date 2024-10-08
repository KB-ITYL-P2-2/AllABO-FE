<template>
  <div class="px-[20%]">
    <div class="relative flex w-full gap-4 p-5 cursor-pointer hover:bg-gray-50" :class="index!=nowItemIndex && 'border-b'">
      <!-- 이미지 -->
      <div class="relative w-20 h-20">
        <div class="absolute w-full h-full rounded-full bg-kb-yellow-3 blur-sm"></div>
        <img :src="items.url.imageUrl" class="absolute rotate-90 top-[14px]" alt="" />
      </div>

      <!-- 내용 -->
      <div class="flex flex-col justify-center">
        <h1 class="text-[18px]">{{ items.name }}</h1>
        <h3 class="text-[14px] mt-2 text-kb-gray-1">{{ items.content }}</h3>
      </div>

      <div class="absolute right-3 top-[30%] flex items-center gap-2">
        <button class="p-2 ml-4 bg-white rounded-full shadow-lg">
          <font-awesome-icon :icon="['far', 'heart']" class="text-kb-yellow-3" size="xl" />
        </button>
        <button>
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
          <!-- <font-awesome-icon :icon="['fas', 'chevron-up']" /> -->
        </button>
      </div>
    </div>

    <!-- 클릭시 콘텐츠 노출 -->
    <div :class="index != nowItemIndex && 'hidden'" class="border-b">
      <div class="flex">
        <div v-for="(item, key, itemIndex) in items.data" :key="key" class="flex-1 p-10 text-center" :class="itemIndex != dataLength && `border-r`">
          <h3 class="text-kb-gray-1">카테고리</h3>
          <h3 class="text-[20px] mt-2">{{ item }}</h3>
        </div>
      </div>

      <div class="mb-4 text-center"><CommonButton :text="'상세보기'" /></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CommonButton from "../common/CommonButton.vue";

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  nowItemIndex: {
    type: Number,
    required: true,
  },
});

const dataLength = ref(Object.keys(props.items.data).length - 1);
console.log(dataLength.value);
</script>
