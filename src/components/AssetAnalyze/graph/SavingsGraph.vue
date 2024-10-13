<template>
  <div id="graphContainer" class="relative w-full flex justify-center space-y-4">
    <!-- 첫 번째 그래프: 파란색(사용자) + 회색(평균) -->
    <!-- <div class="relative w-full max-w-[600px] h-[60px] ml-[400px]"> -->
    <div class="relative w-full max-w-[600px] h-[60px] ml-52">
      <div
        class="absolute h-[60px] bg-kb-gray-2 rounded-r-lg origin-left"
        :style="{ width: `${animatedAverageWidth}px`, left: '50%', transform: 'scaleX(-1)' }"
      ></div>
      <div
        class="absolute h-[60px] rounded-r-lg origin-left"
        :style="{ width: `${animatedUserWidth}px`, left: '50%' }"
        :class="userClass1"
      ></div>
    </div>

    <!-- 두 번째 그래프: 노란색(사용자) + 회색(평균) -->
    <div class="relative w-full max-w-[600px] h-[60px] mt-8 mr-24">
      <div
        class="absolute h-[60px] bg-kb-gray-2 rounded-r-lg origin-left"
        :style="{ width: `${animatedAverageWidth2}px`, left: '50%', transform: 'scaleX(-1)' }"
      ></div>
      <div
        class="absolute h-[60px] rounded-r-lg origin-left"
        :style="{ width: `${animatedUserWidth2}px`, left: '50%' }"
        :class="userClass2"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

// 부모 컴포넌트에서 props로 받은 값
const props = defineProps({
  totalUserSavings: Number,
  totalAverageSavings: Number,
  assetUserSavings: Number,
  assetAverageSavings: Number
});

// 최대 막대 너비 (화면 크기 대비 계산, 가로 그래프니까 width로 설정)
const maxBarWidth = 400;
const animatedUserWidth = ref(0);
const animatedAverageWidth = ref(0);
const animatedUserWidth2 = ref(0);
const animatedAverageWidth2 = ref(0);

const userClass1 = 'bg-kb-blue-4'; 
const userClass2 = 'bg-kb-yellow-3'; 

// 첫 번째 그래프 (저축 금액) 계산
const calculateWidths1 = (userValue, averageValue) => {
  const maxAssets = Math.max(userValue, averageValue);
  animatedUserWidth.value = (userValue / maxAssets) * maxBarWidth;
  animatedAverageWidth.value = (averageValue / maxAssets) * maxBarWidth;
};

// 두 번째 그래프 (자산 대비 저축 비율) 계산
const calculateWidths2 = (userValue, averageValue) => {
  const maxAssets = Math.max(userValue, averageValue);
  animatedUserWidth2.value = (userValue / maxAssets) * maxBarWidth;
  animatedAverageWidth2.value = (averageValue / maxAssets) * maxBarWidth;
};

// 스크롤 감지 ->IntersectionObserver 사용
const observeScroll = (userValue, averageValue, isFirstGraph = true) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (isFirstGraph) {
            calculateWidths1(userValue, averageValue);
          } else {
            calculateWidths2(userValue, averageValue);
          }
        }
      });
    },
    { threshold: 0.5 } // 50% 이상 보일 때 실행
  );

  const graphContainer = document.getElementById("graphContainer");
  if (graphContainer) {
    observer.observe(graphContainer);
  }
};

// 부모 컴포넌트에서 받아온 값들에 따라 그래프 다르게 처리하려고
onMounted(() => {
  nextTick(() => {
    observeScroll(props.totalUserSavings, props.totalAverageSavings, true); // 첫 번째 그래프
    observeScroll(props.assetUserSavings, props.assetAverageSavings, false); // 두 번째 그래프
  });
});
</script>

<style scoped>
div {
  transition: width 1s ease-in-out;
}

.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
</style>
