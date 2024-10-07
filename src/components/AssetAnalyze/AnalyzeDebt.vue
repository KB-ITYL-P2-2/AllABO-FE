<template>
    <div>
      <p class="flex justify-center mt-[500px] text-[32px] text-font-color font-semibold underline underline-offset-8">
        자산 및 부채 분석 결과
      </p>
    </div>
  
    <!-- 각 div를 클릭하면 뒷면으로 회전하며 설명을 보여줌 -->
    <div class="flex justify-center mt-[60px] space-x-10">
  
      <!-- 첫 번째 카드 -->
      <div class="group perspective w-[450px] h-[450px] relative cursor-pointer" @click="toggleFlip(0)">
        <div class="relative w-full h-full transition-transform duration-500 transform-style-3d" :class="flipped[0] ? 'rotateY-180' : ''">
          <!-- 앞 -->
          <div class="absolute w-full h-full backface-hidden bg-kb-blue-4 rounded-[0px_0px_50px_0px] flex">
            <button class="ml-12 mt-10 w-[220px] h-[40px] bg-kb-blue-5 text-white rounded-[30px]">총 자산</button>
          </div>
          <!-- 뒤 -->
          <div class="absolute w-full h-full bg-gray-100 rounded-[0px_0px_50px_0px] flex items-center justify-center transform rotateY-180 backface-hidden">
            <div class="text-center text-[18px] font-semibold text-gray-800">총 자산의 상세 설명</div>
          </div>
        </div>
      </div>
  
      <!-- 두 번째 카드 -->
      <div class="group perspective w-[450px] h-[450px] relative cursor-pointer" @click="toggleFlip(1)">
        <div class="relative w-full h-full transition-transform duration-500 transform-style-3d" :class="flipped[1] ? 'rotateY-180' : ''">
          <!-- 앞 -->
          <div class="absolute w-full h-full backface-hidden bg-kb-yellow-8 rounded-[0px_0px_50px_0px] flex">
                   <button class="ml-12 mt-10 w-[220px] h-[40px] bg-kb-brown-5 text-white rounded-[30px]">자산 대비 부채율</button>
          </div>
          <!-- 뒤 -->
          <div class="absolute w-full h-full bg-gray-100 rounded-[0px_0px_50px_0px] flex items-center justify-center transform rotateY-180 backface-hidden">
            <div class="text-center text-[18px] font-semibold text-gray-800">자산 대비 부채 비율</div>
        </div>
        </div>
      </div>
  
      <!-- 세 번째 카드 -->
      <div class="group perspective w-[450px] h-[450px] relative cursor-pointer" @click="toggleFlip(2)">
        <div class="relative w-full h-full transition-transform duration-500 transform-style-3d" :class="flipped[2] ? 'rotateY-180' : ''">
          <!-- 앞 -->
          <div class="absolute w-full h-full backface-hidden bg-kb-pink-5 rounded-[0px_0px_50px_0px] flex">
            <button class="ml-12 mt-10 w-[220px] h-[40px] bg-kb-pink-6 text-white rounded-[30px]">연 소득 대비 부채 비율</button>
          </div>
          <!-- 뒤 -->
          <div class="absolute w-full h-full bg-gray-100 rounded-[0px_0px_50px_0px] flex items-center justify-center transform rotateY-180 backface-hidden">
            <div class="text-center text-[18px] font-semibold text-gray-800">연 소득 대비 부채 비율의 상세 설명</div>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const flipped = ref([false, false, false]);  // 각각의 카드가 뒤집혔는지를 관리하는 배열
  
  const toggleFlip = (index) => {
    flipped.value[index] = !flipped.value[index];
  };
  </script>
  
  <style scoped>
  .perspective {
    perspective: 1000px;
  }
  
  .transform-style-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .rotateY-180 {
    transform: rotateY(180deg);
  }
  </style>
  