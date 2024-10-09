<template>
  <!-- 찜한 상품 섹션 -->
  <div class="mt-[75px] flex justify-between items-center">
    <p class="text-[20px] text-font-color px-8">찜한 상품</p>
    <div class="ml-4 relative">
      <select
        v-model="selectedCategory"
        class="border border-gray-300 rounded-md p-2 text-kb-gray-1"
      >
        <option value="category0" class="text-kb-gray-1 py-2">전체</option>
        <option value="category1" class="text-kb-gray-1">카드</option>
        <option value="category2" class="text-kb-gray-1">예/적금</option>
        <option value="category3" class="text-kb-gray-1">보험</option>
        <option value="category4" class="text-kb-gray-1">대출</option>
      </select>
    </div>
  </div>

  <div class="border-t-2 w-full mt-4">
    <div v-if="selectedCategory === 'category1'" class="mt-10">
      <div v-for="(card, index) in cardData" :key="index"
        class="relative flex w-full gap-4 p-5 cursor-pointer hover:bg-gray-50"
        :class="index != nowItemIndex && 'border-b'">

        <!-- 이미지 -->
        <div class="relative w-20 h-20 rotate-90">
          <div class="absolute w-full h-full rounded-full bg-kb-yellow-3 blur-sm"></div>
          <img :src="card.url.imageUrl" class="absolute top-[14px]" alt="카드 이미지" />
        </div>

        <!-- 내용 -->
        <div class="flex flex-col justify-center">
          <h1 class="text-[18px]">{{ card.name }}</h1>
          <h3 class="text-[14px] mt-2 text-kb-gray-1">{{ card.content }}</h3>
        </div>

        <div class="absolute right-3 top-[30%] flex items-center gap-2">
          <button class="p-2 ml-4 bg-white rounded-full shadow-lg">
            <font-awesome-icon :icon="['far', 'heart']" class="text-kb-yellow-3" size="xl" />
          </button>
          <button>
            <svg v-if="index != nowItemIndex" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6 text-kb-gray-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

            <svg v-if="index == nowItemIndex" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6 text-kb-gray-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="selectedCategory === 'category2'" class="mt-10">
      <div v-for="(deposit, index) in depositData" :key="index"
        class="relative flex w-full gap-4 p-5 cursor-pointer hover:bg-gray-50"
        :class="index != nowItemIndex && 'border-b'">

        <!-- 이미지 -->
        <div class="relative w-20 h-20">
          <!-- <div class="absolute w-full h-full rounded-full bg-kb-yellow-3 blur-sm"></div> -->
          <img :src="deposit.url.imageUrl" class="absolute top-[14px]" alt="예금 이미지" />
        </div>

        <!-- 내용 -->
        <div class="flex flex-col justify-center">
          <h1 class="text-[18px]">{{ deposit.name }}</h1>
          <h3 class="text-[14px] mt-2 text-kb-gray-1">{{ deposit.content }}</h3>
        </div>

        <div class="absolute right-3 top-[30%] flex items-center gap-2">
          <button class="p-2 ml-4 bg-white rounded-full shadow-lg">
            <font-awesome-icon :icon="['far', 'heart']" class="text-kb-yellow-3" size="xl" />
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="selectedCategory === 'category3'" class="mt-8">
      <p class="text-[20px] text-center text-font-color mr-[450px]">보험 상품이 없습니다.</p>
      <button @click="router.push('/products')" class="text-center mt-8 underline text-kb-gray-2 ml-[190px]">
        상품 보러가기 &gt;
      </button>
    </div>

    <div v-else-if="selectedCategory === 'category4'" class="mt-8">
      <p class="text-[20px] text-center text-font-color mr-[450px]">대출 상품이 없습니다.</p>
      <button @click="router.push('/products')" class="text-center mt-8 underline text-kb-gray-2 ml-[190px]">
        상품 보러가기 &gt;
      </button>
    </div>

    <div v-else class="mt-8">
      <p class="text-[20px] text-center text-font-color mr-[450px]">아직 찜한 상품이 없어요.</p>
      <button @click="router.push('/products')" class="text-center mt-8 underline text-kb-gray-2 ml-[190px]">
        상품 보러가기 &gt;
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const selectedCategory = ref("category0");
const nowItemIndex = ref(null); // 현재 아이템 인덱스
const cardData = ref([
  {
    name: "첵첵 체크카드(마루는강쥐)",
    content: "마루와 함께 혜택도 첵첵!",
    data: {
      category: "할인",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=01760",
    },
  },
  {
    name: "첵첵 체크카드(마루는강쥐)",
    content: "마루와 함께 혜택도 첵첵!",
    data: {
      category: "할인",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=01760",
    },
  },
  {
    name: "첵첵 체크카드(마루는강쥐)",
    content: "마루와 함께 혜택도 첵첵!",
    data: {
      category: "할인",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=01760",
    },
  },
  {
    name: "첵첵 체크카드(마루는강쥐)",
    content: "마루와 함께 혜택도 첵첵!",
    data: {
      category: "할인",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=01760",
    },
  },
  {
    name: "첵첵 체크카드(마루는강쥐)",
    content: "마루와 함께 혜택도 첵첵!",
    data: {
      category: "할인",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=01760",
    },
  }

]);
const depositData =ref([
  {
    name: "KB Star 정기예금1",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "/images/Mypage/my_deposit.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금2",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "/images/Mypage/my_deposit.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금3",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "/images/Mypage/my_deposit.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금4",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "/images/Mypage/my_deposit.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금5",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "/images/Mypage/my_deposit.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금6",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "/images/Mypage/my_deposit.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  ]);


</script>
