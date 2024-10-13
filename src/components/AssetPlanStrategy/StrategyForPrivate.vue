<template>
  <div class="h-full relative">
    <div class="w-full h-screen bg-kb-yellow-4">
      <div
        class="sticky top-[28%] h-[400px] bg-kb-yellow-8 w-full flex items-center px-[22%]"
      >
        <!-- 3원 -->
        <div class="relative flex-1 h-full mr-9">
          <StrategyCircle
            v-for="(item, index) in circleData"
            :key="index"
            :class="currentIndex === index ? 'opacity-100' : 'opacity-0'"
            class="absolute animation top-[7%] left-0"
            :title="item.title"
            :percent="item.percent"
          />
        </div>

        <!-- contents -->
        <div class="relative flex-[2] h-full">
          <StrategyText
            :percent="textData.percent"
            :isIncrease="textData.isIncrease"
            :strategy="textData.strategy"
            :class="currentIndex === 0 ? 'opacity-100' : 'opacity-0'"
            class="absolute animation top-[22%] left-0"
          />
          <StrategyRecommend
            v-for="(item, index) in recommendData"
            :key="index"
            :class="currentIndex === index + 1 ? 'opacity-100' : 'opacity-0'"
            class="absolute top-[26%] animation"
            :title="item.title"
            :products="item.products"
          />
        </div>
      </div>
    </div>

    <!-- 이동 버튼 -->
    <div
      class="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4"
    >
      <button
        @click="prevSlide"
        class="bg-kb-yellow-8 text-white px-4 py-2 rounded"
      >
        Previous
      </button>
      <button
        @click="nextSlide"
        class="bg-kb-yellow-8 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>

    <!-- 부채 관리 솔루션 -->
    <div class="w-full h-[2000px] bg-kb-yellow-4 relative">
      <div
        :class="scrollY > 800 ? 'opacity-100' : 'opacity-0'"
        class="sticky top-0 border-x-[1px] border-kb-brown-3 h-[100vh] animation flex items-center justify-center"
      >
        <div class="flex justify-center h-full pt-32 pb-24 flex-3">
          <div
            class="absolute top-0 left-[21.1%] -z-10 w-[1px] h-full bg-[#6D6262]"
          ></div>
          <div class="flex flex-col items-center justify-between">
            <StrategyDept
              :class="scrollY < 1400 ? 'opacity-100' : 'opacity-0 '"
              class="absolute animation"
              :text="'우선순위'"
            />
            <StrategyDeptSolution
              :class="scrollY >= 1400 ? 'opacity-100' : 'opacity-0 '"
              class="absolute animation"
              :title="`우선순위`"
              :content="'주택 담보 대출 상환을 우선적으로 고려'"
            />
            <StrategyDept
              :class="scrollY < 1600 ? 'opacity-100' : 'opacity-0 '"
              class="absolute bottom-24 animation"
              :text="'우선순위'"
            />
            <StrategyDeptSolution
              :class="scrollY >= 1600 ? 'opacity-100' : 'opacity-0 '"
              class="absolute bottom-24 animation"
              :title="`우선순위`"
              :content="'주택 담보 대출 상환을 우선적으로 고려'"
            />
          </div>
        </div>

        <!-- 3원 -->
        <div
          class="flex items-center justify-center flex-1"
          ref="circleElement"
        >
          <StrategyCircle :title="'부채관리'" :percent="'솔루션'" />
        </div>

        <div class="flex justify-center h-full pt-40 pb-12 flex-3">
          <div
            class="absolute top-0 right-[21%] -z-10 w-[1px] h-full bg-[#6D6262]"
          ></div>
          <div class="relative flex flex-col items-center justify-between">
            <StrategyDept
              :class="scrollY < 1500 ? 'opacity-100' : 'opacity-0'"
              class="absolute animation"
              :text="'우선순위'"
            />
            <StrategyDeptSolution
              :class="scrollY >= 1500 ? 'opacity-100' : 'opacity-0'"
              class="absolute animation"
              :title="`우선순위`"
              :content="'주택 담보 대출 상환을 우선적으로 고려'"
            />
            <StrategyDept
              :class="scrollY < 1700 ? 'opacity-100' : 'opacity-0'"
              class="absolute bottom-0 animation"
              :text="'우선순위'"
            />
            <StrategyDeptSolution
              :class="scrollY >= 1700 ? 'opacity-100' : 'opacity-0'"
              class="absolute bottom-0 animation"
              :title="`우선순위`"
              :content="'주택 담보 대출 상환을 우선적으로 고려'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import StrategyCircle from './StrategyForPrivate/StrategyCircle.vue';
import StrategyText from './StrategyForPrivate/StrategyText.vue';
import StrategyRecommend from './StrategyForPrivate/StrategyRecommend.vue';
import StrategyDept from './StrategyForPrivate/StrategyDept.vue';
import StrategyDeptSolution from './StrategyForPrivate/StrategyDeptSolution.vue';

const circleData = [
  {
    title: '목표 지출 절감률',
    percent: 10,
  },
  {
    title: '목표 저축률',
    percent: 25,
  },
  {
    title: '목표 투자 비용',
    percent: 25,
  },
];

const textData = {
  percent: 10,
  isIncrease: false,
  strategy: '추가 저축 및 투자 비율을 높이는 방안',
};

const scrollY = ref(0);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = currentIndex.value + 1;
};

const prevSlide = () => {
  currentIndex.value = currentIndex.value - 1;
};

const handleScroll = () => {
  scrollY.value = window.scrollY;
  console.log(scrollY.value);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
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
