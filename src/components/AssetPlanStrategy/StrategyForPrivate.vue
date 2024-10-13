<template>
  <div class="h-screen relative">
    <div class="w-full h-full bg-kb-yellow-4 flex items-center justify-center">
      <div class="h-[400px] bg-kb-yellow-8 w-full flex items-center px-[22%]">
        <!-- 3원 -->
        <div class="relative flex-1 h-full mr-9 mt-6">
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
            v-for="(item, index) in productData"
            :key="index"
            :class="currentIndex === index + 1 ? 'opacity-100' : 'opacity-0'"
            class="absolute top-[26%] animation"
            :title="item.title"
            :products="item.products"
          />
        </div>
      </div>

      <!-- 이동 버튼 -->
      <StrategyButton
        :currentIndex="currentIndex"
        @prev="prevSlide"
        @next="nextSlide"
      />
    </div>

    <!-- 부채 관리 솔루션 -->
    <div class="w-full h-screen bg-kb-yellow-4 relative">
      <div class="flex justify-center items-center h-full">
        <!-- 3원 -->
        <div class="flex items-center justify-center flex-1">
          <StrategyCircle :title="'부채관리'" :text="'솔루션'" />
        </div>

        <!-- 솔루션들 -->
        <StrategyDeptSolution
          v-for="(solution, index) in solutionData"
          :key="index"
          :title="solution.title"
          :content="solution.content"
          :class="getSolutionPosition(index)"
          :positionClass="getSolutionPosition(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import StrategyCircle from './StrategyForPrivate/StrategyCircle.vue';
import StrategyText from './StrategyForPrivate/StrategyText.vue';
import StrategyRecommend from './StrategyForPrivate/StrategyRecommend.vue';
import StrategyDeptSolution from './StrategyForPrivate/StrategyDeptSolution.vue';
import StrategyButton from './StrategyButton.vue';

import solutionData from '../../constant/solutionData';

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

const productData = [
  {
    title: '권장 저축 상품',
    products: ['정기예금', '국채형 저축 상품'],
  },
  {
    title: '권장 투자 상품',
    products: ['ETF', '배당주', '안전자산 펀드'],
  },
];

const getSolutionPosition = (index) => {
  const positions = [
    'solution-top-left', // 왼쪽 위
    'solution-top-right', // 오른쪽 위
    'solution-bottom-left', // 왼쪽 아래
    'solution-bottom-right', // 오른쪽 아래
  ];
  return positions[index];
};

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = currentIndex.value + 1;
};

const prevSlide = () => {
  currentIndex.value = currentIndex.value - 1;
};
</script>

<style scoped>
.animation {
  transition: opacity 0.5s, transform 0.5s; /* 부드러운 전환 */
}

.solution-top-left {
  position: absolute;
  top: 150px;
  left: 150px;
}

.solution-top-right {
  position: absolute;
  top: 150px;
  right: 150px;
}

.solution-bottom-left {
  position: absolute;
  bottom: 150px;
  left: 150px;
}

.solution-bottom-right {
  position: absolute;
  bottom: 150px;
  right: 150px;
}
</style>
