<template>
  <div class="h-[calc(100%-70px)] flex flex-col">
    <!-- 소개 -->
    <div class="h-[45%] flex px-[17%] py-[2%] items-end">
      <h1>
        <span>자산, 부채, 저축을 고려한</span><br />
        <span class="font-bold text-[42px]">개인 맞춤 개선 전략</span>
      </h1>
    </div>

    <!-- 네비게이션 -->
    <div class="h-[55%] bg-kb-yellow-4 flex items-center justify-center gap-5 px-[12%] py-[70px]">
      <div v-for="(item, index) in navItem" :key="index" class="flex flex-col justify-end flex-1 h-full pl-4 pr-16 pb-7 bg-kb-brown-2" @click="router.push(item.url)">
        <p class="text-white whitespace-nowrap text-[24px]"><span class="text-[60px]">{{ item.id }}</span> {{ item.text }}</p>
        <div class="w-full bg-white h-[1px]"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const navItem = [
  { id: "01", text: "맞춤 개선 전략", url: "/asset-plan/strategy"},
  { id: "02", text: "1년 후 예상 자산", url: ""},
  { id: "03", text: "보험 리밸런싱", url: "asset-plan/insurance"},
];
</script>
