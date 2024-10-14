<template>
  <div class="flex flex-col items-center w-full">
    <p class="text-[32px] text-font-color font-semibold">저축 분석 결과</p>
    <div class="bg-gray-600 h-0.5 w-[185px]"></div>
  </div>

  <div class="relative mx-[500px] flex flex-col justify-center items-center">
    <!--bg동그라미-->
    <div
      class="absolute top-16 left-0 right-0 bottom-0 rounded-full bg-kb-yellow-4 opacity-50 h-[600px] w-[600px] mx-auto shadow-[0_0_40px_20px_rgba(0,0,0,0.05)]"
    ></div>

    <!-- 연령대별 총 저축 금액 비교 -->
    <div class="relative z-10 flex flex-col items-center mt-32">
      <!-- 설명을 오른쪽으로 정렬 -->
      <SavingsGraph
        :totalUserSavings="totalUserSavings"
        :totalAverageSavings="totalAverageSavings"
      />
      <div class="space-y-2 mb-16">
        <p class="text-[20px] text-kb-brown-6">{{ age }}대 평균 저축액보다</p>
        <p class="font-bold text-[36px] text-font-color">
          약 {{ compareSavings1 }}% 더 높습니다
        </p>
        <p class="text-kb-blue-5 font-semibold text-[26px]">
          {{ hashSavings[0] }}, {{ hashSavings[1] }}
        </p>
      </div>
    </div>

    <!-- 연령대별 평균 자산 대비 저축 비율 비교 -->
    <div class="relative z-10 flex flex-col items-center">
      <!-- 설명을 왼쪽으로 정렬 -->
      <SavingsGraph
        class="rotate-180"
        :assetUserSavings="assetUserSavings"
        :assetAverageSavings="assetAverageSavings"
      />
      <div class="space-y-2 mb-10">
        <p class="text-[20px] text-kb-brown-6">
          {{ age }}대 평균 자산 대비 저축 비율보다
        </p>
        <p class="font-bold text-[36px] text-font-color">
          약 {{ compareSavings2 }}% 더 높습니다
        </p>
        <p class="text-kb-blue-5 font-semibold text-[26px]">
          {{ hashSavings[2] }}, {{ hashSavings[3] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SavingsGraph from './graph/SavingsGraph.vue';

// 나이, 비교 저축 비율, 해시태그 값
const age = ref(20);
// 첫 번째 그래프
const totalUserSavings = ref(2000);
const totalAverageSavings = ref(897);
// 두 번째 그래프
const assetUserSavings = ref(70.63);
const assetAverageSavings = ref(59.9);

const compareSavings1 = ref('1494.29');
const compareSavings2 = ref('10.73');
const hashSavings = ref([
  '#고저축',
  '#우수한저축률',
  '#저축관리잘됨',
  '#안정적인자산운용',
]);
</script>
