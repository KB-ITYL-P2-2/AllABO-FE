<template>
    <div class="relative w-full h-[400px] flex items-center justify-center">
      <div class="absolute w-[480px] h-[480px] rounded-full border-2 border-kb-gray-2 top-40 right-44"></div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-blue-2 rounded-full"
        :style="getPosition(0)"
      ></div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-yellow-6 rounded-full"
        :style="getPosition(1)"
      ></div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-yellow-5 rounded-full"
        :style="getPosition(2)"
      ></div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-pink-2 rounded-full"
        :style="getPosition(3)"
      ></div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-pink-1 rounded-full"
        :style="getPosition(4)"
      ></div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-green-1 rounded-full"
        :style="getPosition(5)"
      ></div>
      <div
        class="absolute w-[155px] h-[155px] bg-kb-blue-1 rounded-full"
        :style="getPosition(6)"
      ></div>
    </div>
  </template>
  
  <script setup>
  const getPosition = (index) => {
    const angleOffset = -Math.PI / 2; 
    const angle = (index / 7) * 2 * Math.PI + angleOffset;
    const radius = 250; // 큰 원의 반지름
    const x = radius * Math.cos(angle)-100;
    const y = radius * Math.sin(angle)+200;
  
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };
  </script>
  
  <style scoped>
  </style>
  