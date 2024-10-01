<template>
    <div class="h-[70px] bg-kb-brown-1 mb-[160px]"></div>
    <!-- 마이페이지 시작 -->
    <div class="flex justify-center">
      <div class="w-full max-w-5xl">
        <div class="flex items-center mb-[30px]">
          <img src="../assets/images/user.png" class="w-36 h-36 rounded-full" alt="user profile" />
          <div class="ml-[40px]">
            <div class="flex items-center">
              <p class="text-4xl font-bold mt-[70px]">김가나</p>
              <button class="text-kb-gray-2 ml-[22px]  mt-[100px]">로그아웃</button>
            </div>
            <div class="flex items-center mt-2">
              <p class="text-[20px] text-font-color">abc@gmail.com</p>
            </div>
          </div>
          <button class="text-kb-gray-2 underline">내 정보 수정</button>

        </div>
  
        <!-- 찜한 상품 섹션 -->
        <div class="mt-[75px]">
          <p class="text-[20px] text-font-color">찜한 상품</p>
          <div class="border-t-2 border-kb-brown-1 w-full mt-4"></div>
          <p class="text-[20px] mt-8 text-center text-font-color">아직 찜한 상품이 없어요</p>
          <button class="text-center mt-4 underline text-kb-gray-2">상품 보러가기 &gt;</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  