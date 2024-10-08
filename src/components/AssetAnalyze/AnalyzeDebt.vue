<template>
  <p class="flex justify-center text-[32px] text-font-color font-semibold underline underline-offset-8">
    자산 및 부채 분석 결과
  </p>
  <div class="flex justify-center mt-[60px] space-x-10">
    
    <!-- 첫 번째 카드 (총 자산) -->
    <div
      class="group perspective w-[450px] h-[450px] relative cursor-pointer"
      @click="toggleFlip(0)"
    >
      <div
        class="relative w-full h-full transition-transform duration-500 transform-style-3d"
        :class="flipped[0] ? 'rotateY-180' : ''"
      >
        <!-- 앞면 -->
        <div
          class="absolute w-full h-full backface-hidden bg-kb-blue-6 rounded-[50px] flex flex-col p-10"
        >
        <button class="p-2 w-[200px] h-10 rounded-[30px] bg-kb-blue-5 text-[20px] text-white mb-6 font-light">총 자산</button>
          <p class="text-[20px] text-kb-brown-1">
            20대 평균 총 자산보다
          </p>
          <p class="text-[36px] font-bold text-font-color mb-2">
            약 {{ compateTotal }}배 높습니다
          </p>

          <!-- 첫 번째 카드에만 AssetGraph (총 자산) -->
          <AssetGraph
            :userTotalAssets="userTotalAssets"
            :averageTotalAssets="averageTotalAssets"
          />
        </div>

        <!-- 뒷면 -->
        <div
          class="absolute w-full h-full rounded-[50px] flex flex-col items-center justify-start transform rotateY-180 backface-hidden shadow-lg"
        >
          <div
            class="w-full h-[200px] bg-kb-blue-6 flex flex-col rounded-t-[50px] p-10"
          >
            <p class="text-[24px] text-font-color mb-6 font-light">총 자산</p>
            <p class="text-[28px] font-bold text-font-color">#우수한자산</p>
            <p class="text-[28px] font-bold text-font-color">#재정적안정</p>
          </div>
          <img
            :src="assetImage1"
            alt="icon"
            class="absolute top-[140px] ml-[250px] z-20 w-[110px] h-[110px]"
          />
          <div
            class="w-full h-full bg-white rounded-b-[50px] flex px-10 items-center"
          >
            <p class="text-[28px] text-font-color font-thin">
              20대 평균자산에 비해 <br />자산이 크게 많은 편입니다.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 두 번째 카드 (자산 대비 부채율) -->
    <div
      class="group perspective w-[450px] h-[450px] relative cursor-pointer"
      @click="toggleFlip(1)"
    >
      <div
        class="relative w-full h-full transition-transform duration-500 transform-style-3d"
        :class="flipped[1] ? 'rotateY-180' : ''"
      >
        <!-- 앞면 -->
        <div
          class="absolute w-full h-full backface-hidden bg-kb-yellow-8 rounded-[50px] flex flex-col p-10"
        >
        <button class="p-2 w-[200px] h-10 rounded-[30px] bg-kb-brown-5 text-[20px] text-white mb-6 font-light">자산 대비 부채 비율</button>

          <p class="text-[20px] text-kb-brown-1">
            20대 평균 자산 대비 부채 비율보다
          </p>
          <p class="text-[36px] font-bold text-font-color mb-2">
            약 {{compareAssetDebt}}% 낮습니다
          </p>

          <!-- 두 번째 카드(자산 대비 부채율) -->
          <DebtGraph
            :assetDebtRatio="assetDebtRatio"
            :averageDebtRatio="averageDebtRatio"
          />
        </div>

        <!-- 뒷면 -->
        <div
          class="absolute w-full h-full rounded-[50px] flex flex-col items-center justify-start transform rotateY-180 backface-hidden shadow-lg"
        >
          <div
            class="w-full h-[200px] bg-kb-yellow-8 flex flex-col rounded-t-[50px] p-10"
          >
            <p class="text-[24px] text-font-color mb-6 font-light">
              자산 대비 부채 비율
            </p>
            <p class="text-[28px] font-bold text-font-color">#부채부담적음</p>
            <p class="text-[28px] font-bold text-font-color">#안정적인재정</p>
          </div>
          <img
            :src="assetImage2"
            alt="icon"
            class="absolute top-[120px] ml-[250px] z-20 w-[130px] h-[130px]"
          />
          <div
            class="w-full h-full bg-white rounded-b-[50px] flex px-10 items-center"
          >
            <p class="text-[28px] text-font-color font-thin">
              20대의 높은 부채부담에 비해 <br />상대적으로 안정적입니다.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 세 번째 카드 (연 소득 대비 부채 비율) -->
    <div
      class="group perspective w-[450px] h-[450px] relative cursor-pointer"
      @click="toggleFlip(2)"
    >
      <div
        class="relative w-full h-full transition-transform duration-500 transform-style-3d"
        :class="flipped[2] ? 'rotateY-180' : ''"
      >
        <!-- 앞면 -->
        <div
          class="absolute w-full h-full backface-hidden bg-kb-pink-5 rounded-[50px] flex flex-col p-10"
        >
        <button class="p-2 w-[200px] h-10 rounded-[30px] bg-kb-pink-6 text-[20px] text-white mb-6 font-light">연 소득 대비 부채 비율</button>

          <p class="text-[20px] text-kb-brown-1">
            20대 평균 연 소득 대비 부채 비율보다
          </p>
          <p class="text-[36px] font-bold text-font-color mb-2">
            약 {{ compareIncomeDebt }}% 낮습니다
          </p>

          <!-- 세 번째 그래프 (연 소득 대비 부채 비율) -->
          <IncomeGraph
            :incomeDebtRatio="incomeDebtRatio"
            :averageIncomeRatio="averageIncomeRatio"
          />
        </div>

        <!-- 뒷면 -->
        <div
          class="absolute w-full h-full rounded-[50px] flex flex-col items-center justify-start transform rotateY-180 backface-hidden shadow-lg"
        >
          <div
            class="w-full h-[200px] bg-kb-pink-5 flex flex-col rounded-t-[50px] p-10"
          >
            <p class="text-[24px] text-font-color mb-6 font-light">
              연 소득 대비 부채 비율
            </p>
            <p class="text-[28px] font-bold text-font-color">#재정적여유</p>
            <p class="text-[28px] font-bold text-font-color">#부채부담적음</p>
          </div>
          <img
            :src="assetImage3"
            alt="icon"
            class="absolute top-[130px] ml-[250px] z-20 w-[120px] h-[120px]"
          />
          <div
            class="w-full h-full bg-white rounded-b-[50px] flex px-10 items-center"
          >
            <p class="text-[28px] text-font-color font-thin">
              20대에 비해 <br />소득 대비 부채부담이 적고,<br />재정적 여유가 더
              큽니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AssetGraph from "./AssetGraph.vue";
import DebtGraph from "./DebtGraph.vue";
import IncomeGraph from "./IncomeGraph.vue";

import { ref } from "vue";

// 데이터 상태 관리
const flipped = ref([false, false, false]);
const compateTotal = ref("3.31");
const compareAssetDebt=ref("168.59");
const compareIncomeDebt=ref("44.74")

// 첫번째 값
const userTotalAssets = ref(12070);
const averageTotalAssets = ref(6579);

// 두번째 값
const assetDebtRatio = ref(15.19);
const averageDebtRatio = ref(183.78);

// 세번째 값
const incomeDebtRatio = ref(42.86);
const averageIncomeRatio = ref(87.60);

// 정적 이미지 경로
const assetImage1 = "/images/AssetAnalyze/asset1.png";
const assetImage2 = "/images/AssetAnalyze/asset2.png";
const assetImage3 = "/images/AssetAnalyze/asset3.png";

// 플립 함수
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
