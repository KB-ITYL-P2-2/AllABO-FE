<template>
  <div class="h-[320px] bg-kb-yellow-4"></div>
  <!-- 마이페이지-->
  <div class="flex justify-center">
    <div class="w-full max-w-5xl">
      <div class="flex items-center mb-[30px]">
        <div class="flex flex-col">
          <img src="/images/Mypage/user1.png" class="w-40 h-40 rounded-full mb-[10px]" alt="user profile" />
          <button @click="$router.push('/mypage-profile')" class="text-kb-gray-2 underline">내 정보 수정</button>
        </div>

        <div class="ml-[40px] flex flex-col justify-center">
          <div class="flex items-end">
            <p class="text-4xl text-font-color font-semibold">김가나</p>
            <button class="text-kb-gray-2 ml-[22px]" @click="logout">로그아웃</button>
          </div>
          <div class="flex items-center mt-2">
            <p class="text-[20px] text-font-color">abc@gmail.com</p>
          </div>
        </div>
      </div>
      <LikeProducts/>
  </div>
</div>
</template>

<script setup>

import { useRouter } from 'vue-router';
import LikeProducts from '../components/MyPage/LikeProducts.vue';

const router=useRouter();
const logout = () => {
  router.push("/");
};
</script>
