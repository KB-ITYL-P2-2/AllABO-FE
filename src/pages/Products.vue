<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="{
      sensitivity: 0.3,
      thresholdDelta: 80,
      thresholdTime: 600,
    }"
    :speed="1200"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper w-screen h-screen"
    @slideChange="handleSlideChange"
    @touchStart="handleTouchStart"
    @touchEnd="handleTouchEnd"
  >
    <swiper-slide>
      <div class="w-screen h-screen relative overflow-hidden">
        <div
          class="w-full transition-all duration-300 ease-in-out bg-[#5F584E] absolute top-0 left-0"
          :style="{
            height: isExpanded ? '100%' : '50%',
          }"
        >
          <h1
            class="absolute left-1/2 transform -translate-x-1/2 text-center text-white text-xl sm:text-2xl md:text-3xl font-bold px-4 w-full"
            style="top: 25vh"
          >
            간단한 설문을 통해 맞춤 상품을 추천 받아보세요!
          </h1>
          <p
            v-if="isExpanded"
            class="absolute left-1/2 transform -translate-x-1/2 text-center text-white text-lg sm:text-xl md:text-2xl font-bold px-4 w-full"
            style="top: 75vh"
          >
            {{ hoveredCategory }} 설문하러 가기
          </p>
        </div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-full"
          :class="`${LAYOUT_VARIANTS.default}`"
        >
          <div
            v-for="category in productCategoryData"
            :key="category.id"
            class="flex-shrink-0 transition-all duration-200 ease-in-out"
            :style="{
              width: 'calc(25% - 3%)',
              maxWidth: '180px',
              aspectRatio: '1 / 1',
            }"
          >
            <router-link
              :to="{
                path: 'products/survey',
                query: { category: category.id },
              }"
              custom
              v-slot="{ navigate }"
            >
              <CategoryButton
                :categoryName="category.name"
                :backgroundColor="category.color"
                @mouseenter="onCategoryHover(category.name)"
                @mouseleave="onCategoryLeave"
                @click="navigate"
              />
            </router-link>
          </div>
        </div>

        <div
          v-if="!isExpanded"
          class="flex flex-col justify-center items-center absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-gray-400 space-y-0"
        >
          <p class="text-sm">전체 상품 보러가기</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 -mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide v-for="(item, index) in data" :key="index">
      <ProductsAllView :item="item" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper/modules";
import { useHeaderStore } from "../stores/headerStore.js";

import "swiper/css";
import "swiper/css/pagination";

import CategoryButton from "../components/Products/CategoryButton.vue";
import ProductsAllView from "../components/Products/ProductsAllView.vue";

import LAYOUT_VARIANTS from "../constant/layout.js";
import productCategoryData from "../constant/productCategoryData.js";

const headerStore = useHeaderStore();

let touchStartY = 0;
let swiperInstance = null;

const handleSlideChange = (swiper) => {
  headerStore.setScrolled(swiper.activeIndex > 0);
};

const handleTouchStart = (event) => {
  touchStartY = event.touches[0].clientY;
};

const handleTouchEnd = (event) => {
  const touchEndY = event.changedTouches[0].clientY;
  const deltaY = touchEndY - touchStartY;

  if (deltaY < 0 && swiperInstance.activeIndex === 0) {
    // Scrolling down from the top
    headerStore.setScrolled(true);
  } else if (deltaY > 0 && swiperInstance.activeIndex === 0) {
    // Scrolling up to the top
    headerStore.setScrolled(false);
  }
};

const onSwiper = (swiper) => {
  swiperInstance = swiper;
};

const data = [
  { title: "신용카드" },
  { title: "체크카드" },
  { title: "예/적금" },
];

const isExpanded = ref(false);
const hoveredCategory = ref("");

const modules = [Mousewheel, Pagination];

const onCategoryHover = (categoryName) => {
  isExpanded.value = true;
  hoveredCategory.value = categoryName;
};

const onCategoryLeave = () => {
  isExpanded.value = false;
  hoveredCategory.value = "";
};

onMounted(() => {
  headerStore.resetState();
});

onUnmounted(() => {
  headerStore.resetState();
});
</script>

<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
