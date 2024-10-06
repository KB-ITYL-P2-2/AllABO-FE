<template>
    <div class="flex flex-col justify-center h-full p-8 ">
    <font-awesome-icon icon="quote-left" class="w-10 h-10 mb-8 " />
   <div class="px-8">
    <p class="text-[32px] py-2">
        전반적으로
        <span class="text-gradient text-[44px]">{{ data.text1 }}</span>
      </p>
      <p class="text-[32px] py-2">
        <span class="text-gradient text-[44px]">{{ data.text2 }}</span>
        을 가지고 있습니다.
      </p>
      <p class="text-[32px] py-2">
        자산 대비로는
        <span class="text-gradient text-[44px]">{{ data.text3 }}</span>
        투자를 보이며
      </p>
      <p class="text-[32px] py-2">
        <span class="text-gradient text-[44px]">{{ data.text4 }}</span>
        편입니다.
      </p>
   </div>
      <font-awesome-icon icon="quote-right" class="w-10 h-10 mt-8 ml-[600px]" />

    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const data = ref({
    text1: '투자성향이 강하고',
    text2: '공격적인 투자성향',
    text3: '중립적인',
    text4: '저축비율도 균형잡힌',
  });
  
  //axios로 값 나중에 가져오기 
  </script>
  
  <style scoped>
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-kb-pink-4 to-kb-yellow-7;
  }
  </style>
  