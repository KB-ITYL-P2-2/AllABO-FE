<template>
  <div>
    <!-- 처음 -->
     <MainPageFirst />

    <!-- 두번쨰 -->
    <div class="flex items-center justify-center h-screen bg-white">
      <div class="bg-kb-yellow-1 blur-[80px] md:max-laptop:w-[320px] md:max-laptop:h-[320px] w-[460px] h-[460px] rounded-full"></div>
      <p class="absolute md:max-laptop:text-[24px] text-[36px] text-center">
        혁신적인 금융자산 분석 비교 서비스<br />
        기존에 없던 편리한 금융 서비스를 경험하세요.
      </p>
    </div>

    <!-- 세번째 -->
    <div class="bg-[url('/images/MainPage/background1.png')] flex items-center justify-center h-screen bg-cover">
      <h1 class="font-bold text-white text-[60px] md:max-laptop:text-[42px]">상품 추천 | 자산 분석 |자산 설계</h1>
    </div>
    <MainPageNavigation/>
    <!-- <MainPageSection v-for="(item, index) in data" :item="item" :key="index" /> -->

  </div>
</template>

<script setup>
import MainPageFirst from "../components/MainPage/MainPageFirst.vue";
import MainPageNavigation from "../components/MainPage/MainPageNavigation.vue";
// import MainPageSection from "../components/MainPage/MainPageSection.vue";

// const data = [
//   {
//     title: "추천 서비스",
//     mainContent: "사용자 맞춤 상품 추천",
//     subContent: "예금, 적금 부터 보험 대출 그리고 카드까지\n사용자 맞춤형 서비스 제공",
//     buttonText: "상품 추천 받으러 가기",
//     left: true,
//   },
//   {
//     title: "자산 분석 서비스",
//     mainContent: "개인 자산 분석 비교 한번에",
//     subContent: "연령, 소득, 소비 등\n사용자에 맞는 개인 자산 분석 비교 결과 제공",
//     buttonText: "자산 분석 하러 가기",
//     left: false,
//   },
//   {
//     title: "자산 설계 서비스",
//     mainContent: "개인 자산 맞춤 설계",
//     subContent: "소비 패턴, 투자 성향 등을 토대로\n개인 자산 맞춤 설계 서비스 제공",
//     buttonText: "자산 설계 하러 가기",
//     left: true,
//   },
// ];

</script>
