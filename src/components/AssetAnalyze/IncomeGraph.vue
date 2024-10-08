<template>
    <div class="flex justify-center items-end h-[200px] mt-8 relative space-x-10">
      <!-- '나' 연 소득 대비 부채 비율 그래프 -->
        <div class="flex flex-col items-center">
            <p class="text-center text-[14px] text-font-color">
                {{ incomeDebtRatio }}%
              </p>
              <div
                class="w-[70px] rounded-t-lg bg-gradient-to-t from-kb-pink-5 to-kb-pink-7 hover-grow"
                :style="{ height: `${normalizedUserGraphHeight}px` }"
              >
                  </div>
                  <p class="text-center text-[12px] text-font-color">나</p>
        </div>

  
      <!-- '20대 평균' 연 소득 대비 부채 비율 그래프 -->
        <div class="flex flex-col items-center">
            <p class="text-center text-[14px] text-gray-700">
                {{ averageIncomeRatio }}%
              </p>
              <div
                class="w-[70px] rounded-t-lg bg-gradient-to-t from-kb-pink-5 via-gray-300 to-kb-gray-4"
                :style="{ height: `${normalizedAverageGraphHeight}px` }"
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
    incomeDebtRatio: {
      type: Number,
      required: true,
    },
    averageIncomeRatio: {
      type: Number,
      required: true,
    },
  });
  
  // 최대값을 기준으로 그래프 높이 비율 계산 (최대 높이를 150px로 설정)
  const maxGraphHeight = 150; // 그래프의 최대 높이 (px)
  const maxRatio = Math.max(props.incomeDebtRatio, props.averageIncomeRatio); // 최대 비율 값
  
  // 비율 값을 기준으로 그래프 높이를 계산
  const normalizedUserGraphHeight = computed(() => {
    return (props.incomeDebtRatio / maxRatio) * maxGraphHeight;
  });
  
  const normalizedAverageGraphHeight = computed(() => {
    return (props.averageIncomeRatio / maxRatio) * maxGraphHeight;
  });
  </script>
  
  <!-- <style scoped>
  .hover-grow {
    transition: height 0.3s ease-in-out;
  }
  
  .hover-grow:hover {
    height: calc(100% + 20px) !important;
  }
  </style> -->
  