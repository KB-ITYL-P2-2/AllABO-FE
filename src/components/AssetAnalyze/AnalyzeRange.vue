<template>
  <div>
    <p class="flex justify-center text-[32px] text-font-color font-semibold underline underline-offset-8">
      분위별 분석 결과 
    </p>
  </div>
  <div class="flex justify-center mt-20 px-10 mx-[300px] space-x-60">
    <!-- 왼쪽 원형 영역 -->
    <div class="relative flex flex-col justify-center items-center">
      <div class="relative">
        <!-- 큰 노란 원 -->
        <div class="flex flex-col justify-center rounded-full bg-gradient-to-b from-kb-yellow-4 to-kb-yellow-9 shadow-lg h-[550px] w-[550px] text-center px-8">
          <!-- 텍스트가 들어가는 부분 -->
          <p>사용자의 월 소득은 <span class="font-bold">(사용자월소득)</span>만 원으로,<br> 연간 소득은 약 <span class="font-bold">(사용자연소득)</span>만 원입니다.</p>
          <p class="mt-2"> 
            <span class="font-bold">(사용자분위)</span>에 속하는<br>
            평균 연간 소득 <span class="font-bold">(사용자분위의 평균연간소득)</span>원과 비교할 때,<br> 사용자의 소득은 평균과 비슷한 수준입니다.
          </p>
        </div>
        <!-- 주황색 원 (5분위) -->
        <div class="absolute top-[-30px] right-[50px] transform translate-x-10 translate-y-10 rounded-full bg-gradient-to-b from-kb-yellow-10 to-kb-yellow-9 shadow-md h-[150px] w-[150px] flex items-center justify-center">
          <p class="font-semibold text-center text-[40px]">5분위</p>
        </div>
      </div>
      <!-- 소득 및 지출 비율 차이 작은 원 -->
      <div class="absolute top-[130px] right-[-80px] rounded-full bg-gradient-to-b from-kb-pink-5 to-kb-pink-8 shadow-md h-[180px] w-[180px] flex items-center justify-center">
        <p class="text-[16px] font-semibold text-center">소득 및 지출 비율 차이<br />36만 원</p>
      </div>
    </div>

    <!-- 오른쪽 해시태그 분석 -->
    <div class="flex flex-col space-y-4">
      <!-- 해시태그 부분 -->
      <div v-for="(tag, index) in hashtags" :key="index" class="bg-yellow-300 hover:bg-yellow-400 p-4 rounded-lg shadow-md transition-colors duration-300">
        <p class="font-semibold text-lg text-gray-700">#{{ tag }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 해시태그 목록 (백엔드에서 받아온다고 가정)
const hashtags = ["지출관리필요", "소득대비소비지출높음", "20대재정리스크", "소득대비지출초과"];
</script>

<style scoped>
/* 해시태그에 적용될 스타일을 더 추가할 수 있습니다. */
</style>
