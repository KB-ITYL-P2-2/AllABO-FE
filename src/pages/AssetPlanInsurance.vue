<template>
    <div class="h-[160px]"></div>
    <div class="bg-rebalancing-back bg-cover flex flex-col items-center">
      <h1 class="text-4xl font-bold text-center p-2 text-font-color">
        보험 리밸런싱
      </h1>
      <p class="text-sm text-kb-gray-1 text-center">
        제공된 가입 보험 내역을 바탕으로 한 리밸런싱 결과로, 실제 데이터와
        차이가 있을 수 있습니다.
      </p>

      <InsuranceAnalyze :insurance="insurance" :desc="desc" />
    </div>

    <div class="w-full flex flex-col items-center mt-36">
      <div
        class="w-[240px] bg-[#F9E26F] p-1 mb-24 rounded-full shadow-md flex items-center justify-center space-x-2"
      >
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = tab"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            activeTab === tab
              ? 'bg-[#987139] text-white'
              : ' hover:bg-yellow-200',
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div>
        <InsuranceCardList v-if="false" :insuranceData="insuranceData" />
        <RebalancingCardList v-else :rebalancingData="rebalancingData"/>
        <div class="h-[200px]"></div>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import InsuranceAnalyze from "../components/AssetPlanInsurance/InsuranceAnalyze.vue";
import InsuranceCardList from "../components/AssetPlanInsurance/InsuranceCardList.vue";
import RebalancingCardList from "../components/AssetPlanInsurance/RebalancingCardList.vue";
import insuranceData from "../constant/insuranceData.js";
import rebalancingData from "../constant/rebalancingData.js";

const insurance = ["건강보험", "실손의료비보험", "치아보험"];

const desc =
  "20대는 상대적으로 건강 리스크가 낮으나 실손의료비와 같은 보장은 필수적입니다. 그러나 사용자의 현재 보험료 비중을 고려할 때 건강보험과 실손보험의 중복 보장을 줄이고 미래의 질병 리스크를 대비하는 방향으로 리밸런싱을 권장합니다.";

const tabs = ["현재 보험 분석", "리밸런싱 제안"];
const activeTab = ref("현재 보험 분석");
</script>

<style></style>
