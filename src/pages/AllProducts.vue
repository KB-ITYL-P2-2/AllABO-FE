<template>
  <div>
    <div class="h-[70px] bg-kb-brown-1"></div>

    <!-- py-16 px-[20%] -->
    <h1 class="font-bold text-[28px] z-20 text-left bg-kb-yellow-4 h-[160px]" :class="`${LAYOUT_VARIANTS.default}`">
      {{ `신용카드` }}
    </h1>

    <div>
      <ProductItem
        v-for="(item, index) in displayData(depositData, dataStartIndex, dataEndIndex)"
        :key="index"
        :items="item"
        :index="index"
        :nowItemIndex="nowItemIndex"
        @click="
          () => {
            if (nowItemIndex == index) {
              nowItemIndex = null;
            } else {
              nowItemIndex = index;
            }
          }
        "
      />
    </div>

    <div class="flex justify-center my-5">
      <button :disabled="pageIndex <= 0" @click="prevPagingHandler">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        v-for="(item, index) in pageArray[pageWrapIndex]"
        :key="index"
        @click="pagingHandler(index + pageWrapIndex * 5)"
        class="px-4 py-2 rounded-[10px] text-kb-gray-1"
        :class="pageIndex == index + pageWrapIndex * 5 && 'text-kb-yellow-1 bg-kb-yellow-4'"
      >
      
        <!-- 버튼 컴포넌트 값 변경을 위함 -->
        {{ index + 1 + pageWrapIndex * 5 }}
      </button>
      <button :disabled="pageIndex >= pageCount - 1" @click="nextPagingHandler">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from "vue";

import LAYOUT_VARIANTS from "../constant/layout";
import ProductItem from "../components/AllProducts/ProductItem.vue";

const nowItemIndex = ref(null);
const dataStartIndex = ref(0);
const dataEndIndex = ref(5);

const pageCount = ref(1);
const pageWrapIndex = ref(0);
const pageIndex = ref(0);
const pageArray = reactive([]);

const displayData = (data, start, end) => {
  return data.slice(start + 5 * pageIndex.value, end + 5 * pageIndex.value);
};

const pagingHandler = index => {
  pageIndex.value = index;
};

// 이전 그룹 핸들러 (페이지 그룹을 이전으로 이동)
const prevPagingHandler = () => {
  if (pageIndex.value % 5 === 0 && pageWrapIndex.value > 0) {
    pageWrapIndex.value -= 1; // 그룹을 이전으로 이동
  }
  pageIndex.value -= 1;
};

// 다음 그룹 핸들러 (페이지 그룹을 다음으로 이동)
const nextPagingHandler = () => {
  pageIndex.value += 1;
  if (pageIndex.value % 5 === 0 && pageWrapIndex.value < Math.ceil(pageCount.value / 5) - 1) {
    pageWrapIndex.value += 1; // 그룹을 다음으로 이동
  }
};

onBeforeMount(() => {
  pageCount.value = Math.ceil(depositData.length / 5);

  for (let i = 0; i < pageCount.value; i += 5) {
    if (i + 5 < pageCount.value) {
      pageArray.push(new Array(5).fill(null));
    } else {
      pageArray.push(new Array(Math.ceil(pageCount.value % 5)).fill(null));
    }
  }
  // console.log(pageArray);
});

const cardData = [
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
  },
];
const depositData = [
  {
    name: "KB Star 정기예금1",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금7",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금8",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금9",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금10",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금11",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금1",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금7",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금8",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금9",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금10",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금11",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금1",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금7",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금8",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금9",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금10",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금11",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금1",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
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
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금7",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금8",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금9",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금10",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
  {
    name: "KB Star 정기예금11",
    content: "Digital KB의 대표 정기예금",
    data: {
      category: "예금",
      date: "1~36개월",
      interestRate: "연 2.7% ~ 3.4%",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000938",
    },
  },
];
const loanData = [
  {
    name: "KB 직장인든든 신용대출",
    data: {
      content: "직장인이라면",
      category: "신용대출",
      amount: "최고 3억원",
      channel: "스타뱅킹",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://obank.kbstar.com/quics?page=C103429&cc=b104363:b104516&isNew=N&prcode=LN20000159&QSL=F",
    },
  },
];
const insuranceData = [
  {
    name: "KB자동차보험",
    data: {
      content: "보험이에욤",
      category: "자동차/운전자",
    },
    url: {
      imageUrl: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/01760_img.png",
      pageUrl: "https://www.kbinsure.co.kr/CG301010012.ec",
    },
  },
];
</script>
