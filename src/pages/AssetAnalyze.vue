<template>
  <!-- 첫 번째 페이지 -->
  <div class="flex flex-col h-screen section bg-asset-back">
    <div class="h-[70px] bg-transparent"></div>
    <div class="flex items-center justify-center mt-40 ml-32">
      <TotalCircle class="w-1/2" />
      <TotalText class="w-1/2" />
    </div>
  </div>
  <!--저축 분석 페이지 -->
  <div class="items-center h-screen section bg-asset-back">
    <AnalyzeSavings />
  </div>
  <!-- 자산, 부채 부석 페이지 -->
  <div class="items-center h-screen section bg-asset-back">
    <AnalyzeDebt />
  </div>
  <!--소득 분위별 분석-->
  <div class="items-center h-screen section bg-asset-back">
    <AnalyzeRange />
  </div>
  <div class="section h-[50%] items-center my-20">
    <AnalyzeButton />
  </div>
</template>

<script setup>
import TotalCircle from "../components/AssetAnalyze/TotalCircle.vue";
import TotalText from "../components/AssetAnalyze/TotalText.vue";
import AnalyzeDebt from "../components/AssetAnalyze/AnalyzeDebt.vue";
import AnalyzeSavings from "../components/AssetAnalyze/AnalyzeSavings.vue";
import AnalyzeRange from "../components/AssetAnalyze/AnalyzeRange.vue";
import AnalyzeButton from "../components/AssetAnalyze/AnalyzeButton.vue";

import { onBeforeMount } from "vue";
import { getIncomeLevel, getLoan, getSaving, getSavingRatio } from "../apis/api/assetAnalyze";
import { loadingStateStore } from "../stores/loadingStateStore";

const loadingStore = loadingStateStore();

onBeforeMount(async () => {
  loadingStore.setIsAssetAnalyzeLoading(true);
  const savingResponse = await getSaving();
  const savingRatioResponse = await getSavingRatio();
  const loanResponse = await getLoan();
  const incomeLevelResponse = await getIncomeLevel();

  if (savingRatioResponse.status == 200 && savingResponse.status == 200 && loanResponse.status == 200 && incomeLevelResponse.status == 200) {
    loadingStore.setIsAssetAnalyzeLoading(false);
  }
});
</script>
