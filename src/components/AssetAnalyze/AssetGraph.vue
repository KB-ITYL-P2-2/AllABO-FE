<template>
  <div class="flex justify-center items-end h-[300px] space-x-10">
    <!-- '나' 자산총액 그래프 -->
    <div class="flex flex-col items-center">
      <p class="text-center text-[14px] text-font-color">
        {{ userTotalAssets }}만원
      </p>
      <div
        class="w-[70px] rounded-t-lg bg-gradient-to-t from-kb-blue-2 to-kb-blue-5 hover-grow"
        :style="{ height: `${normalizedUserHeight}px` }"
      >
      </div>
      <p class="text-center text-[12px] text-font-color">나</p>
    </div>

    <!-- '20대 평균' 자산총액 그래프 -->
    <div class="flex flex-col items-center">
      <p class="text-center text-[14px] text-font-color">
        {{ averageTotalAssets }}만원
      </p>
      <div
        class="w-[70px] rounded-t-lg bg-gradient-to-t from-gray-200 to-gray-500"
        :style="{ height: `${normalizedAverageHeight}px` }"
      >
      </div>
      <p class="text-center text-[12px] text-font-color">20대 평균</p>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

// 부모 컴포넌트에서 props 받아옴
const props = defineProps({
  userTotalAssets: {
    type: Number,
    required: true,
  },
  averageTotalAssets: {
    type: Number,
    required: true,
  },
});

// 최대값을 기준으로 그래프 높이 비율 계산 (임의로 최대 높이를 200px로 설정)
const maxGraphHeight = 200; // 그래프의 최대 높이 (px)
const maxAssets = Math.max(props.userTotalAssets, props.averageTotalAssets); // 최대 자산 값

// 자산 값을 비율로 환산하여 그래프 높이 계산
const normalizedUserHeight = computed(() => {
  return (props.userTotalAssets / maxAssets) * maxGraphHeight;
});

const normalizedAverageHeight = computed(() => {
  return (props.averageTotalAssets / maxAssets) * maxGraphHeight;
});
</script>

<!-- <style scoped>  //호버 일단 막음
.hover-grow {
  transition: height 0.3s ease-in-out;
}

.hover-grow:hover {
  height: 100% !important;
}
</style> --> 

