<template>
  <div :class="[`flex flex-col ${LAYOUT_VARIANTS.default}`]">
    <h1 class="font-bold text-[28px] md:max-laptop:mb-10 mb-24 z-20 text-left">{{ `${item.title} TOP3` }}</h1>
    <div class="w-full">
      <div class="flex flex-col items-center justify-center w-full h-auto">
        <!-- <ProductsCards v-for="(item, index) in cardData" :item="item" :key="index" :class="[`transition-transform order-${cardOrder[currentIndex][index]}`, cardOrder[currentIndex][index]==2 ? `scale-110` : '']" /> -->
        <div class="flex flex-row h-[350px] items-center w-[900px] overflow-hidden" id="carousel-container">
          <div
            v-for="(item, index) in item.title.includes('카드') ? cardData : assetData"
            :key="index"
            class="px-4 flex-none basis-[300px] flex items-center justify-center z-10"
            :class="[index == currentIndex && 'z-20', isAnimate && 'transition-all']"
            :style="{
              transform: `translateX(-${(currentIndex - 1) * 300}px) scale(${currentIndex === index ? (!isHover ? 1.1 : 1.1) : 1})`,
            }"
          >
            <ProductsCards
              :item="item"
              :isHover="isHover"
              :isNow="currentIndex == index"
              class=""
              @click="carouselItemClickHandler(index)"
              @mouseover="productMouseOverHandler(index)"
              @mouseleave="productMouseLeaveHandler"
            />
          </div>
        </div>

        <div class="z-10 flex gap-3 mt-7">
          <button
            v-for="(item, index) in buttonIndex"
            :key="index"
            :class="['w-3 h-3 rounded-full', item.id == currentIndex ? 'bg-kb-yellow-1' : 'bg-kb-gray-2']"
            @click="currentIndex = item.id"
          ></button>
        </div>

        <!-- 동그라미 효과 -->
        <div
          class="absolute w-[589px] h-[589px] md:max-laptop:w-[489px] md:max-laptop:h-[489px] border border-kb-yellow-3 rounded-full flex justify-center items-center transition-all"
          :class="isHover ? 'scale-[2.5] z-10' : 'z-0'"
        >
          <div class="w-[496px] h-[496px] md:max-laptop:w-[389px] md:max-laptop:h-[389px] bg-kb-yellow-3 absolute rounded-full blur-sm"></div>
        </div>
      </div>
    </div>

    <!-- 전체 조회 버튼 -->
    <div class="z-0 mt-8">
      <button class="p-2 border border-gray-400 rounded-[10px] text-font-color bg-white">{{ `${item.title} 전체 조회` }}</button>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref, watch } from "vue";

import ProductsCards from "./ProductsAllView/ProductsCards.vue";
import LAYOUT_VARIANTS from "../../constant/layout";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const isAnimate = ref(true);
const isHover = ref(false);
const currentIndex = ref(2);
const isClickable = ref(true); // 클릭 가능 여부

const buttonIndex = [{ id: 2 }, { id: 3 }, { id: 4 }];

const cardOrder = [
  [3, 1, 2], // 1일때
  [1, 2, 3], // 2일때
  [2, 3, 1], // 3일때
];

const cardData = ref([
  {
    cardImageUrl: "/images/Products/card1.png",
    cardName: "우리동네 체크카드(키뮤)",
    cardContent: "다 같이 돌자 동네 한 바퀴",
  },
  {
    cardImageUrl: "/images/Products/card2.png",
    cardName: "2번째 카드",
    cardContent: "다 같이 돌자 동네 한 바퀴",
  },
  {
    cardImageUrl: "/images/Products/card3.png",
    cardName: "3번째카드",
    cardContent: "다 같이 돌자 동네 한 바퀴",
  },
]);

const assetData = ref([
  {
    cardImageUrl: "/images/Products/asset.png",
    cardName: "예적금",
    cardContent: "다 같이 돌자 동네 한 바퀴",
  },
  {
    cardImageUrl: "/images/Products/asset.png",
    cardName: "2번째 예적금",
    cardContent: "다 같이 돌자 동네 한 바퀴",
  },
  {
    cardImageUrl: "/images/Products/asset.png",
    cardName: "3번째 예적금",
    cardContent: "다 같이 돌자 동네 한 바퀴",
  },
]);

const productMouseOverHandler = index => {
  if (index == currentIndex.value) {
    isHover.value = true;
  }
};

const productMouseLeaveHandler = () => {
  isHover.value = false;
};

onBeforeMount(() => {
  const cardStart = cardData.value.slice(0, 2);
  const cardEnd = cardData.value.slice(-2);
  cardData.value = [...cardEnd, ...cardData.value, ...cardStart];

  const assetStart = assetData.value.slice(0, 2);
  const assetEnd = assetData.value.slice(-2);
  assetData.value = [...assetEnd, ...assetData.value, ...assetStart];
  // console.log(cardData);
});

watch(currentIndex, () => {
  if (currentIndex.value == 5) {
    setTimeout(() => {
      isAnimate.value = false;
      currentIndex.value = 2;
    }, 150);
  } else if (currentIndex.value == 1) {
    setTimeout(() => {
      isAnimate.value = false;
      currentIndex.value = 4;
    }, 150);
  }

  setTimeout(() => {
    isAnimate.value = true;
  }, 200);
});

const carouselItemClickHandler = index => {
  // 캐러셀 넘어갈때 클릭 빠르게 하면 item 벗어나는 거 막음
  if (!isClickable.value) return; // 클릭이 막혀 있으면 이벤트를 무시

  currentIndex.value = index;
  isClickable.value = false; // 클릭 이벤트 막기

  setTimeout(() => {
    isClickable.value = true; // 150ms 후 다시 클릭 가능
  }, 200);
};
</script>
