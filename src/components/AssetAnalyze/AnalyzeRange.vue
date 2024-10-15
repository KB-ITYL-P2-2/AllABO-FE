<template>
  <div class="flex flex-col items-center w-full">
    <p class="text-[32px] text-font-color font-semibold">분위별 분석 결과</p>
    <div class="bg-gray-600 h-0.5 w-[210px]"></div>
  </div>

  <div class="flex justify-center px-10 mx-auto space-x-14">
    <!-- 왼쪽 원형 영역 -->
    <div
      class="relative flex flex-col justify-center items-center"
      ref="yellowCircle"
    >
      <div class="relative">
        <!-- 큰 노란 원 -->
        <div
          class="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-kb-yellow-4 to-kb-yellow-10 shadow-lg h-[550px] w-[550px] text-center px-8"
          :class="{ 'grow-animation': isVisible }"
        >
          <div class="flex flex-col space-y-4 p-6 items-center">
            <div
              v-for="(tag, index) in hashtags"
              :key="index"
              class="text-font-color p-4 rounded-lg transition-all duration-300 hover:bg-kb-yellow-10"
            >
              <p class="font-semibold text-kb-brown-1 text-[24px]">
                #{{ tag }}
              </p>
            </div>
          </div>
        </div>

        <!-- 소득 및 지출 비율 차이 작은 원 -->
        <div
          class="absolute z-10 top-[-45px] right-[55px] transform translate-x-10 translate-y-10 rounded-full bg-[#FFE1C2] shadow-md h-[150px] w-[150px] flex items-center justify-center"
        >
          <p class="font-semibold text-font-color text-center text-[32px]">
            {{ incomeRange }}분위
          </p>
        </div>
      </div>

      <!-- 주황색 원  -->
      <div
        class="absolute top-[130px] right-[-80px] rounded-full bg-kb-blue-6 shadow-md h-[180px] w-[180px] flex items-center justify-center"
      >
        <p class="text-[28px] font-semibold text-font-color text-center">
          36% 초과
        </p>
      </div>
    </div>

    <!-- 텍스트 영역 -->
    <div class="flex flex-col justify-center h-[650px] w-[650px] pl-24">
      <div
        class="transition-all duration-500 ease-in-out grow-animation-hash"
        :class="
          isVisible
            ? 'w-[500px] h-[500px] opacity-100'
            : 'w-[0px] h-[0px] opacity-0'
        "
      >
        <div v-if="isVisible" class="flex flex-col space-y-4 h-full">
          <!-- 상단 2개 박스 -->
          <div class="flex items-center space-x-4 h-[30%]">
            <div
              class="w-[45%] text-center bg-gradient-to-b from-kb-yellow-4 to-kb-yellow-10 p-6 rounded-3xl shadow-md flex flex-col items-center justify-center"
            >
              <p class="text-[18px] text-font-color">
                {{ userName }}님의 월 소득
                <span class="text-font-color text-[22px] font-semibold">{{
                  userMonthlyIncome.toLocaleString()
                }}</span>
                만 원
              </p>
            </div>

            <!-- VS 요소 -->
            <div
              class="w-12 h-12 flex items-center justify-center flex-shrink-0"
            >
              <span class="text-font-color font-bold text-2xl">VS</span>
            </div>

            <div
              class="w-[45%] text-center bg-gradient-to-b from-kb-yellow-4 to-kb-yellow-10 p-6 rounded-3xl shadow-md flex flex-col items-center justify-center"
            >
              <p class="text-[18px] text-font-color">
                {{ incomeRange }}분위 평균 월 소득
                <span class="text-font-color text-[22px] font-semibold">{{
                  userAnnualIncome.toLocaleString()
                }}</span>
                만 원
              </p>
            </div>
          </div>

          <!-- 중간 2개 박스 -->
          <div class="flex items-center space-x-4 h-[30%]">
            <div
              class="w-[45%] text-center bg-gradient-to-b from-kb-yellow-4 to-kb-yellow-10 p-6 rounded-3xl shadow-md flex flex-col items-center justify-center"
            >
              <p class="text-[18px] text-font-color">
                {{ userName }}님의 소득 대비<br />
                지출 비율
                <span class="text-font-color text-[22px] font-semibold pl-1">
                  {{ userExpenditurePercent.toFixed(1) }}%</span
                >
              </p>
            </div>

            <!-- VS 요소 -->
            <div
              class="w-12 h-12 flex items-center justify-center flex-shrink-0"
            >
              <span class="text-font-color font-bold text-2xl">VS</span>
            </div>

            <div
              class="w-[45%] text-center bg-gradient-to-b from-kb-yellow-4 to-kb-yellow-10 p-6 rounded-3xl shadow-md flex flex-col items-center justify-center"
            >
              <p class="text-[18px] text-font-color">
                {{ incomeRange }}분위 소득 대비<br />
                지출 비율
                <span class="text-font-color text-[22px] font-semibold pl-1"
                  >{{ rangeExpenditurePercent.toFixed(1) }}%</span
                >
              </p>
            </div>
          </div>

          <div
            class="w-full bg-gradient-to-b from-kb-yellow-4 to-kb-yellow-10 p-6 rounded-3xl shadow-md h-[30%] flex flex-col items-center justify-center"
          >
            <p class="text-[18px] text-font-color">
              {{ userName }}님은
              <span class="font-bold">{{ incomeRange }}분위</span>에
              속합니다.<br />
              해당 분위의 평균 월 소득과 비교할 때, 사용자의 소득은
              <span class="font-bold text-red-700">평균 {{ isAverage }}</span
              >입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const hashtags = [
  '지출관리필요',
  '소득대비소비지출높음',
  '20대재정리스크',
  '소득대비지출초과',
];
const userMonthlyIncome = 5000000;
const userAnnualIncome = 3163182;
const userName = ref('문준일');
const incomeRange = ref(5);
const userExpenditurePercent = ref(39);
const rangeExpenditurePercent = ref(80.96610926541375);
const isAverage = ref('이상');
const isVisible = ref(false);
const yellowCircle = ref(null);

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true; // 원이 보이면 애니메이션 실행
      observer.disconnect(); // 애니메이션이 실행된 후 옵저버 해제
    }
  });
};

let observer;

onMounted(() => {
  observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
  });

  if (yellowCircle.value) {
    observer.observe(yellowCircle.value); // yellowCircle 요소를 옵저버에 추가
  }
});
</script>

<style scoped>
@keyframes grow {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.grow-animation {
  animation: grow 2s ease-out forwards;
}

@keyframes grow-hash {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.grow-animation-hash {
  animation: grow-hash 2s ease-out forwards;
}
</style>
