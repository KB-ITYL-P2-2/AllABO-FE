<template>
  <!-- 첫 번째 페이지 -->
  <div class="section h-screen flex bg-asset-back">
    <div class="w-screen flex items-center">
      <TotalCircle class="w-1/2 pl-40" />
      <TotalText class="w-1/2 pl-20" />
    </div>
  </div>

  <!--저축 분석 페이지 -->
  <div class="section h-screen items-center bg-asset-back">
    <AnalyzeSavings />
  </div>

  <!-- 자산, 부채 부석 페이지 -->
  <div class="section h-screen items-center bg-asset-back">
    <AnalyzeDebt />
  </div>

  <!--소득 분위별 분석-->
  <div class="section h-screen items-center bg-asset-back">
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

import { onBeforeMount, onMounted } from "vue";
import {
  getIncomeLevel,
  getLoan,
  getSaving,
  getSavingRatio,
} from "../apis/api/assetAnalyze";
import { loadingStateStore } from "../stores/loadingStateStore";

const loadingStore = loadingStateStore();

onBeforeMount(async () => {
  loadingStore.setIsAssetAnalyzeLoading(true);
  document.body.style.overflow = "hidden"; // 스크롤 비활성화

  try {
    const savingResponse = await getSaving();
    const savingRatioResponse = await getSavingRatio();
    const loanResponse = await getLoan();
    const incomeLevelResponse = await getIncomeLevel();

    console.log(savingResponse);
    console.log(savingRatioResponse);
    console.log(loanResponse);
    console.log(incomeLevelResponse);

    if (
      savingResponse.status === 200 &&
      savingRatioResponse.status === 200 &&
      loanResponse.status === 200 &&
      incomeLevelResponse.status === 200
    ) {
      loadingStore.setIsAssetAnalyzeLoading(false);
      document.body.style.overflow = "auto"; // 스크롤 다시 활성화
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    loadingStore.setIsAssetAnalyzeLoading(false); // 에러 발생 시에도 로딩 상태 종료
  }
});
</script>
