<template>
  <swiper
    ref="mySwiper"
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
    class="w-screen h-screen mySwiper"
    @swiper="onSwiperInit"
    @slideChange="handleSlideChange"
  >
    <swiper-slide>
      <div class="relative w-screen h-screen overflow-hidden">
        <div
          class="w-full transition-all duration-300 ease-in-out bg-[#5F584E] absolute top-0 left-0"
          :style="{
            height: isExpanded ? '100%' : '50%',
          }"
        >
          <h1
            class="absolute w-full px-4 text-xl font-bold text-center text-white transform -translate-x-1/2 left-1/2 sm:text-2xl md:text-3xl"
            style="top: 25vh"
          >
            간단한 설문을 통해 맞춤 상품을 추천 받아보세요!
          </h1>
          <p
            v-if="isExpanded"
            class="absolute w-full px-4 text-lg font-bold text-center text-white transform -translate-x-1/2 left-1/2 sm:text-xl md:text-2xl"
            style="top: 75vh"
          >
            {{ hoveredCategory }} 설문하러 가기
          </p>
        </div>
        <div
          class="absolute flex items-center justify-between w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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
                query: { category: category.name },
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
          class="absolute flex flex-col items-center justify-center space-y-0 text-center text-gray-400 transform -translate-x-1/2 bottom-2 left-1/2"
        >
          <p class="text-sm">전체 상품 보러가기</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-mt-1 size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide v-for="(item, index) in data" :key="index">
      <ProductsAllView :item="item" />
    </swiper-slide>

    <!-- 네비게이션 -->
    <div
      class="fixed left-[10%] top-[30%] z-10 flex flex-col border border-[#BDBDBD] bg-white rounded-[10px] overflow-hidden p-2"
      :class="{
        'opacity-0': !navigationTrigger,
        'opacity-100': navigationTrigger,
        invisible: !navigationTrigger, // opacity 0일 때만 보이지 않게 설정
        visible: navigationTrigger, // opacity 100일 때만 보이게 설정
      }"
      :style="{
        transition: 'opacity 1000ms',
      }"
    >
      <div v-for="(item, index) in data" :key="index" class="py-1 text-center" :class="index!==data.length-1 && 'border-b-[1px]'">
        <button ref="navButton" class="rounded-[10px] text-[18px] w-[60px] h-[60px]" :class="item.index === swiperIndex ? 'bg-kb-yellow-3' : 'text-kb-gray-3'" @click="goToSlide(item.index)">
          <span v-html="formatText(item.title)"></span>
        </button>
      </div>
    </div>
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

const navigationTrigger = ref(false);
const swiperIndex = ref(0);

const mySwiper = ref(null);

const handleSlideChange = swiper => {
  swiperIndex.value = swiper.activeIndex;
  // console.log(swiperIndex.value)

  headerStore.setScrolled(swiper.activeIndex > 0);

  if (swiper.activeIndex > 0) {
    navigationTrigger.value = true;
  } else {
    navigationTrigger.value = false;
  }
};

const onSwiperInit = swiperInstance => {
  mySwiper.value = swiperInstance; // Swiper 인스턴스 저장
};

const goToSlide = index => {
  if (mySwiper.value) {
    // console.log(mySwiper.value)
    mySwiper.value.slideTo(index); // Swiper 인스턴스의 slideTo 메서드 호출
  }
};

const formatText=(text)=>{
  return text.replace(/.{2}/g, '$&<br>');
}

const data = [
  { title: "신용카드", index: 1 },
  { title: "체크카드", index: 2 },
  { title: "예금적금", index: 3 },
  { title: "보험", index: 4 },
  { title: "대출", index: 5 },
];

const isExpanded = ref(false);
const hoveredCategory = ref("");

const modules = [Mousewheel, Pagination];

const onCategoryHover = categoryName => {
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
::v-deep .swiper-pagination {
  display: none !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
