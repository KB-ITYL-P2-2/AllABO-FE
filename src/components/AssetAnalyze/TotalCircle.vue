<template>
    <div class="relative w-full h-[400px] flex items-center justify-center">
      <!-- 큰 원 테두리 -->
      <div class="absolute w-[480px] h-[480px] rounded-full border-2 border-kb-gray-2 top-40 right-44"></div>
  
      <!-- 작은 원들, 텍스트 추가 -->
      <div
        class="absolute w-[155px] h-[155px] bg-kb-blue-2 rounded-full flex items-center justify-center flex-col text-center text-font-color"
        :style="getPosition(0)"
      >
        <p class="text-lg font-bold">연 소득</p>
        <p class="text-lg">{{data.income}}만원</p>
      </div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-yellow-6 rounded-full flex items-center justify-center flex-col text-center text-font-color"
        :style="getPosition(1)"
      >
        <p class="text-lg font-bold">계좌 자산</p>
        <p class="text-lg">{{data.assets}}만원</p>
      </div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-yellow-5 rounded-full flex items-center justify-center flex-col text-center text-font-color"
        :style="getPosition(2)"
      >
        <p class="text-lg font-bold">연금 준비</p>
        <p class="text-lg">{{data.pension}}만원</p>
      </div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-pink-2 rounded-full flex items-center justify-center flex-col text-center text-font-color"
        :style="getPosition(3)"
      >
        <p class="text-lg font-bold">보험 납부</p>
        <p class="text-lg">{{data.insurance}}만원</p>
      </div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-pink-1 rounded-full flex items-center justify-center flex-col text-center text-font-color"
        :style="getPosition(4)"
      >
        <p class="text-lg font-bold">투자 평가</p>
        <p class="text-lg">{{data.investment}}만원</p>
      </div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-green-1 rounded-full flex items-center justify-center flex-col text-center text-font-color"
        :style="getPosition(5)"
      >
        <p class="text-lg font-bold">카드 이용</p>
        <p class="text-lg">{{data.credit}}만원</p>
      </div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-blue-1 rounded-full flex items-center justify-center flex-col text-center text-font-color"
        :style="getPosition(6)"
      >
        <p class="text-lg font-bold">부채 금액</p>
        <p class="text-lg">{{data.debt}}만원</p>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';

const data = ref({
  income: 7000, //연 소득
  assets: 1390000, //계좌자산
  pension: 10, //연금준비
  insurance: 5, //보험납부
  investment: 3300, //투자평가
  credit: 130, //카드이용
  debt: 3000, //부채금
});

  const getPosition = (index) => {
    const angleOffset = -Math.PI / 2; 
    const angle = (index / 7) * 2 * Math.PI + angleOffset;
    const radius = 250; // 큰 원의 반지름
    const x = radius * Math.cos(angle) - 100;
    const y = radius * Math.sin(angle) + 200;
  
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };
  </script>
  
  <style scoped>
  </style>
  