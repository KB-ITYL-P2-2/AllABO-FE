<template>
  <div>
    <div class="h-[70px] bg-kb-brown-1"></div>

    <!-- py-16 px-[20%] -->
    <h1 class="font-bold text-[28px] md:max-laptop:mb-10 mb-24 z-20 text-left bg-kb-yellow-4 h-[160px]" :class="`${LAYOUT_VARIANTS.default}`">{{ `신용카드` }}</h1>
    <div >
      
      <ProductItem v-for="(item, index) in cardData" :key="index" :items="item" />
    </div>
  </div>
</template>

<script setup>
import LAYOUT_VARIANTS from "../constant/layout";
import ProductItem from "../components/AllProducts/ProductItem.vue";

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
    name: "KB Star 정기예금",
    data: {
      content: "Digital KB의 대표 정기예금",
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
    name: "KB Star 정기예금",
    data: {
      content: "Digital KB의 대표 정기예금",
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
    name: "KB Star 정기예금",
    data: {
      content: "Digital KB의 대표 정기예금",
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
    name: "KB Star 정기예금",
    data: {
      content: "Digital KB의 대표 정기예금",
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
    name: "KB Star 정기예금",
    data: {
      content: "Digital KB의 대표 정기예금",
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
    name: "KB Star 정기예금",
    data: {
      content: "Digital KB의 대표 정기예금",
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
