<template>
  <div class="h-[70px] bg-kb-brown-1 mb-[160px]"></div>
  <!-- 마이페이지-->
  <div class="flex justify-center">
    <div class="w-full max-w-5xl">
      <div class="flex items-center mb-[30px]">
        <div class="flex flex-col">
          <img src="/images/Mypage/user.png" class="w-36 h-36 rounded-full mb-[10px]" alt="user profile" />
          <button @click="$router.push('/mypage-profile')" class="text-kb-gray-2 underline">내 정보 수정</button>
        </div>

        <div class="ml-[40px] flex flex-col justify-center">
          <div class="flex items-end">
            <p class="text-4xl font-bold">김가나</p>
            <button class="text-kb-gray-2 ml-[22px]" @click="logout">로그아웃</button>
          </div>
          <div class="flex items-center mt-2">
            <p class="text-[20px] text-font-color">abc@gmail.com</p>
          </div>
        </div>
      </div>

      <!-- 찜한 상품 섹션 -->
      <div class="mt-[75px] flex justify-between items-center">
        <p class="text-[20px] text-font-color px-8">찜한 상품</p>
        <div class="ml-4 relative">
          <select v-model="selectedCategory" class="border border-gray-300 rounded-md p-2 text-kb-gray-1">
            <option value="category0" class="text-kb-gray-1 py-2">전체</option>
            <option value="category1" class="text-kb-gray-1">카드</option>
            <option value="category2" class="text-kb-gray-1">예/적금</option>
            <option value="category3" class="text-kb-gray-1">보험</option>
            <option value="category4" class="text-kb-gray-1">대출</option>
          </select>
        </div>
      </div>

      <div class="border-t-2 border-kb-brown-1 w-full mt-4">

      <!-- 조건에 따른 렌더링 -->
      <div v-if="selectedCategory === 'category1'" class="mt-10">
        <p class="text-[20px] text-center text-font-color mr-[450px]">카드 상품이 없습니다.</p>
      </div>
      <div v-else-if="selectedCategory === 'category2'" class="mt-8">
        <p class="text-[20px] text-center text-font-color mr-[450px]">예/적금 상품이 없습니다.</p>
      </div>
      <div v-else-if="selectedCategory === 'category3'" class="mt-8">
        <p class="text-[20px] text-center text-font-color mr-[450px]">보험 상품이 없습니다.</p>
      </div>
      <div v-else-if="selectedCategory === 'category4'" class="mt-8">
        <p class="text-[20px] text-center text-font-color mr-[450px]">대출 상품이 없습니다.</p>
      </div>
      <div v-else class="mt-8">
        <p class="text-[20px] text-center text-font-color mr-[450px]">아직 찜한 상품이 없어요.</p>
      </div>
      <!--추후에 전체 상품으로 연결-->
      <button  @click="$router.push('/products')" class="text-center mt-8 underline text-kb-gray-2 ml-[190px]">상품 보러가기 &gt;</button>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router=useRouter();
const selectedCategory = ref('category0'); 

const logout = () => {
  router.push("/");
};
</script>
