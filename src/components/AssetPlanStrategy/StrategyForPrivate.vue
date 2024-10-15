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
    <div
      ref="solutionSection"
      class="w-screen h-screen bg-kb-yellow-4 relative flex items-center justify-center"
    >
      <div class="w-full h-full relative">
        <!-- SVG for lines -->
        <svg
          class="absolute top-0 left-0 w-full h-full z-0"
          :class="{ 'lines-visible': isVisible }"
        >
          <line
            v-for="(_, index) in solutionData"
            :key="`line-${index}`"
            :class="[`line-${getSolutionPosition(index)}`, 'solution-line']"
            x1="50%"
            y1="50%"
            :x2="getLineEndX(index)"
            :y2="getLineEndY(index)"
            :style="{ animationDelay: `${index * 0.5}s` }"
          />
        </svg>

        <!-- 3원 -->
        <div
          ref="centerCircle"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <StrategyCircle :title="'부채관리'" :text="'솔루션'" />
        </div>

        <!-- 솔루션들 -->
        <StrategyDeptSolution
          v-for="(solution, index) in solutionData"
          :key="index"
          :title="solution.title"
          :content="solution.content"
          :class="[getSolutionPosition(index), 'absolute']"
          :positionClass="getSolutionPosition(index)"
          :isVisible="isVisible && visibleSolutions[index]"
          :animationDelay="`${index * 0.5 + 0.5}s`"
        />
      </div>
      <div class="absolute bottom-16 text-center">
        <CommonButton @click="goToAssetPlan" :text="'돌아가기'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';

import StrategyCircle from './StrategyForPrivate/StrategyCircle.vue';
import StrategyText from './StrategyForPrivate/StrategyText.vue';
import StrategyRecommend from './StrategyForPrivate/StrategyRecommend.vue';
import StrategyDeptSolution from './StrategyForPrivate/StrategyDeptSolution.vue';
import StrategyButton from './StrategyButton.vue';

import solutionData from '../../constant/solutionData';
import CommonButton from '../common/CommonButton.vue';

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
    title: '목표 투자 비율',
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

const solutionSection = ref(null);
const isVisible = ref(false);
const visibleSolutions = ref(solutionData.map(() => false));
const animationKey = ref(0);

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

const getLineEndX = (index) => {
  const position = getSolutionPosition(index);
  return position.includes('left') ? '25%' : '75%';
};

const getLineEndY = (index) => {
  const position = getSolutionPosition(index);
  return position.includes('top') ? '30%' : '70%';
};

const router = useRouter();

const goToAssetPlan = () => {
  router.push('/asset-plan');
};

watch(isVisible, (newValue) => {
  if (newValue) {
    animationKey.value++;
    solutionData.forEach((_, index) => {
      setTimeout(() => {
        visibleSolutions.value[index] = true;
      }, (index * 0.5 + 1) * 1000); // 1초(선 애니메이션) + 각 솔루션 간 0.5초 지연
    });
  } else {
    visibleSolutions.value = solutionData.map(() => false);
  }
});

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting;
    },
    { threshold: 0.5 }
  );

  if (solutionSection.value) {
    observer.observe(solutionSection.value);
  }

  onUnmounted(() => {
    if (solutionSection.value) {
      observer.unobserve(solutionSection.value);
    }
  });
});
</script>

<style scoped>
.animation {
  transition: opacity 0.5s, transform 0.5s; /* 부드러운 전환 */
}

.solution-line {
  stroke: #f6ce46;
  stroke-width: 1;
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: none;
}

.lines-visible .solution-line {
  animation: drawLine 1s ease-out forwards;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.solution-top-left {
  top: 19%;
  left: 17%;
}

.solution-top-right {
  top: 19%;
  right: 17%;
}

.solution-bottom-left {
  bottom: 19%;
  left: 17%;
}

.solution-bottom-right {
  bottom: 19%;
  right: 17%;
}
</style>
