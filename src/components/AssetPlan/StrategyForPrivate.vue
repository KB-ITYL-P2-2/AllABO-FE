<template>
  <div class="h-full">
    <div class="w-full h-[1150px] bg-kb-yellow-4">
      <div class="sticky top-[28%] h-[400px] bg-kb-yellow-8 w-full flex items-center px-[22%]">
        <!-- 3원 -->
        <div class="relative flex-1 h-full">
          <template v-for="(item, index) in goalData" :key="index">
            <StrategyCircle
              :class="scrollY < (index + 1) * 600 && scrollY >= index * 600 ? 'opacity-100' : 'opacity-0'"
              class="absolute animation top-[7%] left-0"
              :title="item.title"
              :percent="item.percent"
            />
          </template>
        </div>

        <!-- contents -->
        <div class="relative flex-[2] h-full">
          <StrategyText :class="scrollY < 300 ? 'opacity-100' : 'opacity-0'" class="absolute animation top-[18%] left-0" />
          <template v-for="(item, index) in recommendData" :key="index">
            <StrategyRecommend
              :class="scrollY >= (index + 1) * 300 && scrollY < (index + 2) * 300 ? 'opacity-100' : 'opacity-0'"
              class="absolute top-[22%] animation"
              :title="item.title"
              :products="item.products"
            />
          </template>
        </div>
      </div>
    </div>

    <!-- 부채 관리 솔루션 -->
    <div class="w-full h-[2000px] bg-kb-yellow-4">
      <div :class="scrollY > 1100 ? 'opacity-100' : 'opacity-0'" class="relative w-full h-full animation">
        <div class="absolute top-0 left-[25%] w-[1px] h-full bg-[#6D6262]"></div>
        <div class="absolute top-0 right-[25%] w-[1px] h-full bg-[#6D6262]"></div>

        <div class="sticky top-[35%] flex items-center justify-center" ref="circleElement">
          <StrategyCircle :title="'부채관리'" :percent="'솔루션'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

import StrategyCircle from "./StrategyForPrivate/StrategyCircle.vue";
import StrategyText from "./StrategyForPrivate/StrategyText.vue";
import StrategyRecommend from "./StrategyForPrivate/StrategyRecommend.vue";

const goalData = [
  { title: "목표 저축률", percent: `${25}%` },
  { title: "목표 투자 비율", percent: `${25}%` },
];

const recommendData = [
  { title: "권장 저축 상품", products: ["정기예금", "국채형 저축 상품"] },
  { title: "권장 투자 상품", products: ["ETF", "배당주", "안전자산 펀드"] },
];

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.animation {
  transform: translateY(20px); /* 아래에서 올라오는 효과 */
  transition: opacity 0.5s, transform 0.5s; /* 부드러운 전환 */
}
</style>
