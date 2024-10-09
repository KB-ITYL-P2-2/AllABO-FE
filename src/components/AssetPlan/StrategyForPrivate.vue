<template>
  <div class="h-full">
    <div class="w-full h-[1150px] bg-kb-yellow-4">
      <div class="sticky top-[28%] h-[400px] bg-kb-yellow-8 w-full flex items-center px-[22%]">
        <!-- 3원 -->
        <div class="relative flex-1 h-full">
          <template v-for="(item, index) in goalData" :key="index">
            <StrategyCircle
              :class="scrollY < (index + 1) * 400 && scrollY >= index * 400 ? 'opacity-100' : 'opacity-0'"
              class="absolute animation top-[7%] left-0"
              :title="item.title"
              :percent="item.percent"
            />
          </template>
        </div>

        <!-- contents -->
        <div class="relative flex-[2] h-full">
          <StrategyText :class="scrollY < 200 ? 'opacity-100' : 'opacity-0'" class="absolute animation top-[22%] left-0" />
          <template v-for="(item, index) in recommendData" :key="index">
            <StrategyRecommend
              :class="scrollY >= (index + 1) * 200 && scrollY < (index + 2) * 200 ? 'opacity-100' : 'opacity-0'"
              class="absolute top-[26%] animation"
              :title="item.title"
              :products="item.products"
            />
          </template>
        </div>
      </div>
    </div>

    <!-- 부채 관리 솔루션 -->
    <div class="w-full h-[2000px] bg-kb-yellow-4 relative">
      <div
        :class="scrollY > 800 ? 'opacity-100' : 'opacity-0'"
        class="sticky top-0 border-x-[1px] border-kb-brown-3 h-[100vh] animation flex items-center justify-center"
      >
        <div class="flex justify-center h-full py-32 flex-3">
          <div class="absolute top-0 left-[21.1%] -z-10 w-[1px] h-full bg-[#6D6262]"></div>
          <div class="flex flex-col items-center justify-between">
            <StrategyDept class="" :text="'우선순위'" />
            <StrategyDept class="" :text="'우선순위'" />
          </div>
        </div>

        <!-- 3원 -->
        <div class="flex items-center justify-center flex-1" ref="circleElement">
          <StrategyCircle :title="'부채관리'" :percent="'솔루션'" />
        </div>

        <div class="flex justify-center h-full pt-40 pb-12 flex-3">
          <div class="absolute top-0 right-[21%] -z-10 w-[1px] h-full bg-[#6D6262]"></div>
          <div class="flex flex-col items-center justify-between">
            <StrategyDept class="" :text="'우선순위'" />
            <StrategyDept class="" :text="'우선순위'" />
          </div>
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
import StrategyDept from "./StrategyForPrivate/StrategyDept.vue";

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
  console.log(scrollY.value);
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
  transition: opacity 0.5s, transform 0.5s; /* 부드러운 전환 */
}
.flex-3 {
  flex: 4 1 0; /* flex-grow, flex-shrink, flex-basis */
}
</style>
