<template>
  <div class="h-[100vh] flex flex-col bg-asset-back">
    <div class="h-[70px] bg-kb-brown-1"></div>
    <div class="flex justify-center items-center mt-32"> 
      <TotalCircle class="w-1/2" />  
      <TotalText class="w-1/2 mr-40" />  
    </div>
  </div>
</template>

<script setup>
import TotalCircle from '../components/AssetAnalyze/TotalCircle.vue';
import TotalText from '../components/AssetAnalyze/TotalText.vue';
</script>
