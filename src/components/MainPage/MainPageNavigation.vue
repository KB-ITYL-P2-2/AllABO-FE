<template>
  <div class="flex items-center justify-center h-screen py-8 px-[100px] gap-[100px] bg-kb-yellow-4">
    <div class="flex justify-center ml-80 space-x-32">
      <!-- 큰 노란색 원과 텍스트, 버튼 -->
      <div class="relative w-[600px] h-[600px] rounded-full bg-kb-yellow-12 flex items-center justify-center">
        <!-- 작은 원과 버튼 -->
        <div class="absolute top-[150px] left-[-100px] w-[350px] h-[350px] rounded-full bg-kb-yellow-13 z-10 shadow-lg flex items-center justify-center">
          <div class="relative w-[300px] h-[300px] rounded-full whitespace-pre-wrap">
            <button
              v-for="(btn, index) in buttons"
              :key="index"
              @click="handleClick(index)"  
              :class="getButtonClass(index)"
              :style="getButtonStyle(index)"
              class="ml-8"
            >
              {{ btn }}
            </button>
          </div>
        </div>

        <!-- 텍스트와 버튼 -->
        <div class="left-[200px] relative z-10 text-left">
          <div class="relative inline">
            <h1 class="text-[25px] inline font-bold z-10">{{ currentItem.title }}</h1>
            <div class="absolute bottom-0 left-4 bg-kb-yellow-1 w-[93%] h-[50%] opacity-50 inline"></div>
          </div>
          <h3 class="text-4xl font-bold mt-4 text-kb-brown-2">{{ currentItem.mainContent }}</h3>
          <h3 class="text-[18px] mt-2 whitespace-pre-wrap">{{ currentItem.subContent }}</h3>
          <div class="mt-8 ml-16">
            <MainPageButton :text="currentItem.buttonText" />
          </div>
        </div>
      </div>

      <!-- 오른쪽 노트북 이미지 -->
      <div class="flex items-center justify-center">
        <div class="bg-[url('/images/MainPage/macbook.png')] w-[1000px] h-[400px] bg-contain bg-no-repeat"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import MainPageButton from "./MainPageButton.vue";

// data 배열을 이 컴포넌트 안에 직접 포함
const data = ref([
  {
    title: "추천 서비스",
    mainContent: "사용자 맞춤 상품 추천",
    subContent: "예금, 적금 부터 보험 대출 그리고 카드까지\n사용자 맞춤형 서비스 제공",
    buttonText: "상품 추천 받으러 가기",
  },
  {
    title: "자산 분석 서비스",
    mainContent: "개인 자산 분석 비교 한번에",
    subContent: "연령, 소득, 소비 등\n사용자에 맞는 개인 자산 분석 비교 결과 제공",
    buttonText: "자산 분석 하러 가기",
  },
  {
    title: "자산 설계 서비스",
    mainContent: "개인 자산 맞춤 설계",
    subContent: "소비 패턴, 투자 성향 등을 토대로\n개인 자산 맞춤 설계 서비스 제공",
    buttonText: "자산 설계 하러 가기",
  },
]);

// 버튼 목록
const buttons = ref(["맞춤\n상품", "자산\n분석", "자산\n설계"]);
const focusedIndex = ref(0);  // 선택된 인덱스를 저장

// 클릭 시 인덱스를 업데이트하는 함수
const handleClick = (index) => {
  focusedIndex.value = index;  // 클릭된 버튼의 인덱스를 업데이트
};

// 현재 선택된 데이터를 가져오는 함수
const currentItem = computed(() => data.value[focusedIndex.value]);

// 버튼의 위치를 계산하는 함수 (작은 원 안에 배치)
const getButtonStyle = (index) => {
  const radius = 90;  // 작은 원 반지름
  const angle = (index * (120 / buttons.value.length) - focusedIndex.value * (90 / buttons.value.length)) * (Math.PI / 180);
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return {
    position: 'absolute',
    left: `${x + 150}px`,
    top: `${y + 150}px`,
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.5s ease',
  };
};

// 버튼의 스타일을 설정하는 함수
const getButtonClass = (index) => {
  return 'text-kb-gray-2 hover:text-kb-yellow-1 focus:text-kb-yellow-1';
};
</script>
