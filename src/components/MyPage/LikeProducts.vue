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

  <div class="border-t-2  w-full mt-4">
    <div v-if="selectedCategory === 'category1'" class="mt-10">
      <!-- <p class="text-[20px] text-center text-font-color mr-[450px]">카드 상품이 없습니다.</p> -->
      <!--있는경우-->
      <div
        v-for="(card, index) in likeCards"
        :key="index"
        class="w-[850px] flex items-center justify-between border p-4 mb-4 ml-[90px] rounded-[15px]"
      >
        <img :src="card.icon" alt="카드 이미지" class="w-14 h-20 rounded-md" />
        <p class="text-[20px] text-font-color">{{ card.name }}</p>
        <button class="p-3 ml-4 bg-white rounded-full">
          <font-awesome-icon
            :icon="['far', 'heart']"
            class="text-kb-yellow-3"
            size="xl"
          />
        </button>
      </div>
    </div>
    <div v-else-if="selectedCategory === 'category2'" class="mt-8">
      <div
        v-for="(deposit, index) in likeDeposit"
        :key="index"
        class="w-[850px] flex items-center justify-between border p-4 mb-4 ml-[90px] rounded-[15px] bg-kb-yellow-4"
      >
        <p class="text-[20px] text-font-color">{{ deposit.name }}</p>
        <button class="p-3 ml-4 bg-white rounded-full">
          <font-awesome-icon
            :icon="['far', 'heart']"
            class="text-kb-yellow-3"
            size="xl"
          />
        </button>
      </div>
    </div>
    <div v-else-if="selectedCategory === 'category3'" class="mt-8">
      <p class="text-[20px] text-center text-font-color mr-[450px]">
        보험 상품이 없습니다.
      </p>
      <button
        @click="router.push('/products')"
        class="text-center mt-8 underline text-kb-gray-2 ml-[190px]"
      >
        상품 보러가기 &gt;
      </button>
    </div>
    <div v-else-if="selectedCategory === 'category4'" class="mt-8">
      <p class="text-[20px] text-center text-font-color mr-[450px]">
        대출 상품이 없습니다.
      </p>
      <button
        @click="router.push('/products')"
        class="text-center mt-8 underline text-kb-gray-2 ml-[190px]"
      >
        상품 보러가기 &gt;
      </button>
    </div>
    <div v-else class="mt-8">
      <p class="text-[20px] text-center text-font-color mr-[450px]">
        아직 찜한 상품이 없어요.
      </p>
      <button
        @click="router.push('/products')"
        class="text-center mt-8 underline text-kb-gray-2 ml-[190px]"
      >
        상품 보러가기 &gt;
      </button>
    </div>
    <!--추후에 전체 상품으로 연결-->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const selectedCategory = ref("category0");
const likeCards = ref([
  { name: "WE:SH All 카드", icon: "/images/Products/card1.png" },
  { name: "톡톡 pay카드 ", icon: "/images/Products/card2.png" },
  { name: "우리동네 체크카드(키뮤)", icon: "/images/Products/card3.png" },
  { name: "우리동네 체크카드(키뮤)", icon: "/images/Products/card3.png" },
  { name: "우리동네 체크카드(키뮤)", icon: "/images/Products/card3.png" },
]);
const likeDeposit = ref([
  { name: "KB Star 정기예금" },
  { name: "국민수퍼정기예금(개인)" },
  { name: "KB국민UP정기예금" },
  { name: "KB차차차 적금" },
  { name: "KB맑은하늘적금" },
  { name: "KB장병내일준비적금" },
]);
</script>
