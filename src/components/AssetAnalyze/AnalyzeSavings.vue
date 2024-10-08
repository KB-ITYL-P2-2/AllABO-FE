<!-- 
"총 저축 금액 분석": "사용자 저축 금액은 {13,950}만 원으로
{20}대 평균 저축액인 {875}만 원보다 약 {1494.29}% 더 높음 {#고저축 #우수한저축률"},
 "자산 대비 저축 비율 분석": "사용자의 자산 대비 저축 비율은 {70.63}%로, 20대 평균 자산 대비 저축 비율인 {59.9}%보다 {10.73}% 높음 {#저축관리잘됨 #안정적인자산운용}",
 "연 소득 대비 저축 비율 분석": "사용자의 연 소득 대비 저축 비율은 {199.29}%로, {#저축률우수 #재정안정성높음}" -->
<template>
    <p class="flex justify-center text-[32px] text-font-color font-semibold underline underline-offset-8">
      저축 분석 결과
    </p>
    <div class="flex flex-col justify-center items-center mt-[60px] space-x-10">
      <!--연령대별 총 저축 금액 비교-->
    <div>
        <div class="text-[14px]"></div>
        <!--그래프 자리 -->
        <p class="text-[20px] text-kb-brown-6">{{ age }}대 평균 저축액보다</p><br>
        <p class="font-bold text-[36px] text-font-color">약 {{ compareSavings1 }}% 더 높습니다</p>
        <span class="text-kb-blue-5 font-semibold text-[26px]">{{ hashSavings[0] }}, {{ hashSavings[1] }}</span>
    </div>
    <!--연령대별 평균자산 대비 저축 비율 비교-->
    <div>
        <p class="text-[20px] text-kb-brown-6">{{ age }}대 평균 자산 대비 저축 비율보다</p><br>
        <p class="font-bold text-[36px] text-font-color">약 {{ compareSavings2 }}% 더 높습니다</p>
        <span class="text-kb-blue-5 font-semibold text-[26px]">{{ hashSavings[2] }}, {{ hashSavings[3] }}</span>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 나이, 비교 저축 비율, 해시태그 값
  const age = ref(20);
  const totalUserSavings=ref(13950);
  const totalAverageSavings=ref(875);
  const assetUserSavings=ref('70.63');
  const assetTotalSavings=ref('59.9');
  const compareSavings1 = ref('1494.29');
  const compareSavings2=ref('10.73');
  const hashSavings = ref(['#고저축', '#우수한저축률','#저축관리잘됨',"#안정적인자산운용"]);
  </script>
  