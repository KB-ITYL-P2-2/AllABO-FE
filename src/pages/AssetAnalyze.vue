<template>
  <div class="h-[100vh] flex flex-col bg-asset-back">
    <div class="h-[70px] bg-kb-brown-1"></div>
    <div class="flex justify-center gap-x-2"> <!-- 간격을 더 줄이기 위해 gap-x-2로 변경 -->
      <TotalCircle class="w-1/3" />  <!-- 너비를 줄여 컴포넌트 간 간격을 좁힘 -->
      <TotalText class="w-1/3" />  <!-- 동일한 너비 적용 -->
    </div>
  </div>
</template>

<script setup>
import TotalCircle from '../components/AssetAnalyze/TotalCircle.vue';
import TotalText from '../components/AssetAnalyze/TotalText.vue';


</script>


