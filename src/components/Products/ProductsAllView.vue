<template>
  <div :class="[`h-screen flex flex-col ${LAYOUT_VARIANTS.default}`]">
    <h1 class="font-bold text-[28px] mb-24">체크카드 TOP 3</h1>
    <div class="w-full">
      <div class="flex flex-col items-center justify-center w-full h-auto">
        <div class="flex flex-row gap-12">
          <!-- <ProductsCards v-for="(item, index) in cardData" :item="item" :key="index" :class="[`transition-transform order-${cardOrder[currentIndex][index]}`, cardOrder[currentIndex][index]==2 ? `scale-110` : '']" /> -->
          <ProductsCards v-for="(item, index) in cardData" :item="item" :key="index" :class="[`transition-transform order-${cardOrder[currentIndex][index]}`, cardOrder[currentIndex][index]==2 ? `scale-110` : '']" />
        </div>

        <div class="flex gap-3 mt-7">
          <button
            v-for="(item, index) in buttonIndex"
            :key="index"
            :class="['w-3 h-3 rounded-full', index == currentIndex ? 'bg-kb-yellow-1' : 'bg-kb-disabled']"
            @click="currentIndex = item.id"
          ></button>
        </div>

        <!-- 동그라미 효과 -->
        <div
          class="absolute w-[589px] h-[589px] md:max-laptop:w-[489px] md:max-laptop:h-[489px] opacity-50 border border-kb-yellow-2 rounded-full -z-10 flex justify-center items-center"
        >
          <div class="bg-kb-yellow-2 w-[496px] h-[496px] md:max-laptop:w-[389px] md:max-laptop:h-[389px] absolute rounded-full blur-sm"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

import ProductsCards from "./ProductsAllView/ProductsCards.vue";
import LAYOUT_VARIANTS from "../../constant/layout";

const currentIndex = ref(0);

const buttonIndex = [{ id: 0 }, { id: 1 }, { id: 2 }];

const cardOrder = [
  [3, 1, 2], // 1일때
  [1, 2, 3], // 2일때
  [2, 3, 1]  // 3일때
]

const cardData = [
  {
    cardImageUrl: "/images/Products/card1.png",
    cardName: "우리동네 체크카드(키뮤)",
    cardContent: "다 같이 돌자 동네 한 바퀴",
  },
  {
    cardImageUrl: "/images/Products/card2.png",
    cardName: "우리동네 체크카드(키뮤)",
    cardContent: "다 같이 돌자 동네 한 바퀴",
  },
  {
    cardImageUrl: "/images/Products/card3.png",
    cardName: "우리동네 체크카드(키뮤)",
    cardContent: "다 같이 돌자 동네 한 바퀴",
  },
];
</script>
