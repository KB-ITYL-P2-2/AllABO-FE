<template>
  <div>
    <p class="flex justify-center text-[32px] text-font-color font-semibold underline underline-offset-8">
      분위별 분석 결과 
    </p>
  </div>
  <div class="flex justify-center mt-20 px-10 mx-auto space-x-60">
    <!-- 왼쪽 원형 영역 -->
    <div class="relative flex flex-col justify-center items-center" ref="yellowCircle">
      <div class="relative">
        <!-- 큰 노란 원 -->
        <div class="flex flex-col justify-center rounded-full bg-gradient-to-b from-kb-yellow-4 to-kb-yellow-10 shadow-lg h-[550px] w-[550px] text-center px-8" :class="{ 'grow-animation': isVisible }">
          <p class="text-lg">사용자 월 소득 :<span class="font-bold">{{ userMonthlyIncome }}</span> 만원</p>
          <p class="text-lg">연간 소득 : <span class="font-bold">{{ userAnnualIncome }}</span> 만 원</p>
          <p class="mt-2 text-lg" > 
          소득 5분위를 기준으로 <span class="font-bold">000 님은 {{ incomeRange }}분위</span> 에 속합니다.<br>
            <span class="font-bold">{{ incomeRange }}분위</span> 에 속하는
            평균 연간 소득 <span class="font-bold">{{ averageAnnualIncome }}</span> 원과 비교할 때,<br> 사용자의 소득은 평균을 초과합니다.
          </p>
        </div>
        <!-- 주황색 원 (5분위) -->
        <div class="absolute top-[-30px] right-[50px] transform translate-x-10 translate-y-10 rounded-full bg-gradient-to-b from-kb-yellow-9 to-kb-yellow-10 shadow-md h-[150px] w-[150px] flex items-center justify-center">
          <p class="font-semibold text-center text-[40px]">{{incomeRange}}분위</p>
        </div>
      </div>
      <!-- 소득 및 지출 비율 차이 작은 원 -->
      <div 
        class="absolute top-[130px] right-[-80px] rounded-full bg-gradient-to-b from-kb-pink-8 to-kb-pink-5 shadow-md h-[180px] w-[180px] flex items-center justify-center cursor-pointer"
        @click="toggleHashTags"
      >
        <p class="text-[20px] font-semibold text-center">36% 초과<br>개선하고 싶다면?<br> click</p>
      </div>
    </div>

    <!-- 해시태그 -->
    <div class="relative mt-20">
      <div 
        class="bg-white shadow-md rounded-lg transition-all duration-500 ease-in-out overflow-hidden"
        :class="isExpanded ? 'w-[400px] h-[400px] opacity-100' : 'w-[0px] h-[0px] opacity-0'"
      >
        <div v-if="isExpanded" class="flex flex-col space-y-4 p-6 items-center">
          <div 
            v-for="(tag, index) in hashtags" 
            :key="index" 
            class="text-font-color p-4 rounded-lg transition-all duration-300 hover:bg-kb-yellow-11"
          >
            <p class=" font-semibold text-[20px] text-font-color">#{{ tag }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const hashtags = ["지출관리필요", "소득대비소비지출높음", "20대재정리스크", "소득대비지출초과"];
const isExpanded = ref(false);
const userMonthlyIncome = 3000000; 
const userAnnualIncome = userMonthlyIncome * 12;
const incomeRange = 5; 
const averageAnnualIncome = 28000000; 

const isVisible = ref(false);
const yellowCircle = ref(null);

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isVisible.value = true; // 원이 보이면 애니메이션 실행
      observer.disconnect(); // 애니메이션이 실행된 후 옵저버 해제
    }
  });
};

let observer;

onMounted(() => { //원 보일때 애니메이션
  observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1
  });

  if (yellowCircle.value) {
    observer.observe(yellowCircle.value); // yellowCircle 요소를 옵저버에 추가
  }
});

const toggleHashTags = () => {
  isExpanded.value = !isExpanded.value;
};
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
  animation: grow 1s ease-out forwards; 
}
</style>
