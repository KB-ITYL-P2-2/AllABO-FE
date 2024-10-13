<template>
  <div class="flex justify-center items-end h-[200px] mt-8 relative space-x-10">
    
    <!-- 내 자산 대비 부채율 그래프 -->
<div class="flex flex-col items-center">
  <p class="text-center text-[14px] text-font-color">
    {{ assetDebtRatio }}%
  </p>
  <div
    class="w-[70px] rounded-t-lg bg-gradient-to-t from-kb-yellow-4 to-kb-yellow-7 hover-grow"
    :style="{ height: `${normalizedUserDebtHeight}px` }"
  >
  </div>
  <p class="text-center text-[12px] text-font-color">나</p>
</div>
    <!-- '20대 평균' 자산 대비 부채율 그래프 -->
<div class="flex flex-col items-center">
  <p class="text-center text-[14px] text-gray-700">
    {{ averageDebtRatio }}%
  </p>
  <div
    class="w-[70px] rounded-t-lg bg-gradient-to-t from-kb-yellow-8 via-gray-300 to-kb-gray-4"
    :style="{ height: `${normalizedAverageDebtHeight}px` }"
  >
  </div>
  <p class="text-center text-[12px] text-font-color mt-4">20대 평균</p>
</div>

  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

// 부모 컴포넌트에서 전달받은 props
const props = defineProps({
  assetDebtRatio: {
    type: Number,
    required: true,
  },
  averageDebtRatio: {
    type: Number,
    required: true,
  },
});

// 그래프 높이 비율 계산 (최대 높이를 150px로 설정)
const maxGraphHeight = 150; // 그래프의 최대 높이 (px)
const maxDebtRatio = Math.max(props.assetDebtRatio, props.averageDebtRatio); // 최대 부채율 값

// 비율 값을 기준으로 그래프 높이를 계산
const normalizedUserDebtHeight = computed(() => {
  return (props.assetDebtRatio / maxDebtRatio) * maxGraphHeight;
});

const normalizedAverageDebtHeight = computed(() => {
  return (props.averageDebtRatio / maxDebtRatio) * maxGraphHeight;
});
</script>
<!-- 
<style scoped>
/* 호버 시 '나' 그래프만 커지도록 설정 */
.hover-grow {
  transition: height 0.3s ease-in-out;
}

.hover-grow:hover {
  height: calc(100% + 20px) !important;
}
</style> -->
