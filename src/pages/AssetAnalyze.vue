<template>
  <div class="h-[100vh] flex flex-col bg-asset-back">
    <div class="h-[70px] bg-kb-brown-1"></div>
    <div class="flex justify-center gap-x-4"> 
      <TotalCircle class="w-1/2 ml-32 mt-48" />  
      <TotalText class="w-1/2 mt-[40px]" />  
    </div>
  </div>
</template>

<script setup>
import TotalCircle from '../components/AssetAnalyze/TotalCircle.vue';
import TotalText from '../components/AssetAnalyze/TotalText.vue';
</script>
