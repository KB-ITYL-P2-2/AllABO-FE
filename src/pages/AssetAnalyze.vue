<template>
    <!-- 첫 번째 페이지 -->
    <div class="section h-screen flex flex-col bg-asset-back">
      <div class="h-[70px] bg-kb-brown-1"></div>
      <div class="flex justify-center items-center mt-40 ml-32">
        <TotalCircle class="w-1/2" />
        <TotalText class="w-1/2" />
      </div>
    </div>
    <!--저축 분석 페이지 -->
    <div class="section h-screen items-center bg-asset-back">
      <AnalyzeSavings/>
    </div>
    <!-- 자산, 부채 부석 페이지 -->
    <div class="section h-screen  items-center bg-asset-back">
      <AnalyzeDebt />
    </div>

</template>

<script setup>
import TotalCircle from "../components/AssetAnalyze/TotalCircle.vue";
import TotalText from "../components/AssetAnalyze/TotalText.vue";
import AnalyzeDebt from "../components/AssetAnalyze/AnalyzeDebt.vue";
import AnalyzeSavings from "../components/AssetAnalyze/AnalyzeSavings.vue";

</script>

