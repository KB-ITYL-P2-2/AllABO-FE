<template>
  <swiper :direction="'vertical'"
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
  >
  <swiper-slide>
    <div class="w-screen h-screen relative overflow-hidden">
        <div 
          class="w-full transition-all duration-300 ease-in-out bg-[#5F584E] absolute top-0 left-0"
          :style="{
            height: isExpanded ? '100%' : '50%'
          }"
        >
          <h1 class="absolute left-1/2 transform -translate-x-1/2 text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold px-4 w-full"
              style="top: 25vh;">
            간단한 설문을 통해 맞춤 상품을 추천 받아보세요!
          </h1>
        </div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      flex justify-between items-center w-full"
      :class="`${LAYOUT_VARIANTS.default}`">
        <div
          v-for="category in productCategoryData" :key="category.id"
          class="flex-shrink-0 transition-all duration-200 ease-in-out"
          :style="{ width: 'calc(25% - 3%)', maxWidth: '180px', aspectRatio: '1 / 1' }"
        >
          <CategoryButton
            :categoryName="category.name"
            :backgroundColor="category.color"
            @mouseenter="isExpanded = true"
            @mouseleave="isExpanded = false"
          />
        </div>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide v-for="(item, index) in data" :key="index">
  <ProductsAllView :item="item" />
</swiper-slide>
</swiper>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Pagination } from 'swiper/modules';
  
  import 'swiper/css';
  import 'swiper/css/pagination';
  
  import CategoryButton from '../components/Products/CategoryButton.vue'
  import ProductsAllView from '../components/Products/ProductsAllView.vue';

  import LAYOUT_VARIANTS from '../constant/layout.js';
  import productCategoryData from '../constant/productCategoryData.js';

  const data = [{title: "신용카드"},{title: "체크카드"},{title: "예/적금"}]
  
  const isExpanded = ref(false)

  const modules = [Mousewheel, Pagination];
  </script>

<style scoped>
  .swiper-slide {
    text-align:center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>