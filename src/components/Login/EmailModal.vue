<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
    <div class="bg-white p-8 rounded-[15px] shadow-lg w-[750px] h-[600px] relative">
      <!-- Close Button -->
      <button @click="$emit('close')" class="absolute top-4 right-4 text-[24px] font-bold text-kb-gray-2">✕</button>
      
      <!-- Logo and Title -->
      <p class="text-3xl mb-[20px] font-bold flex justify-center  text-font-color">LOGO</p>
      <p class="text-[24px] font-bold text-font-color mb-[90px] flex justify-center">이메일 찾기</p>
      
      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <div class="mb-[30px] flex justify-center items-center px-[30px]">
          <label for="name" class="text-font-color text-[16px] w-[100px] text-left">이름</label>
          <input type="text" id="name" placeholder="이름을 입력해주세요" 
                 class=" pl-4 h-[50px] w-[400px] text-kb-gray-2 rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2"/>
        </div>
        <div class="mb-[60px] flex justify-center items-center px-[30px]">
          <label for="tel" class="text-font-color text-[16px] w-[100px] text-left">전화번호</label>
          <input type="text" id="tel" v-model="tel" placeholder="전화번호를 입력해주세요" 
                 class="pl-4 h-[50px] w-[400px] text-kb-gray-2 rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2"/>
        </div>
        <div class="flex justify-center">
          <button type="submit" class="h-[50px] w-[500px] rounded-[15px] bg-kb-brown-2 text-white flex justify-center items-center">
            이메일 찾기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  alert('이메일 찾기 요청을 보냈습니다.');
};
</script>
