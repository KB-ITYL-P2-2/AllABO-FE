<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div class="bg-white p-8 rounded-[15px] shadow-lg w-[750px] h-[600px] relative">
        <button @click="$emit('close')" class="absolute top-4 right-4 text-[24px] font-bold text-kb-gray-2">✕</button>
        
        <p class="text-3xl mb-[20px] font-bold flex justify-center text-font-color">LOGO</p>
        <p class="text-[24px] font-bold mb-[90px] flex justify-center text-font-color">비밀번호 찾기</p>
        
        <form @submit.prevent="handleSubmit">
          <div class="mb-[30px] flex justify-center items-center px-[30px]">
            <label for="name" class="text-font-color text-[16px] w-[100px] text-left">이름</label>
            <input type="text" id="name" v-model="name" placeholder="이름을 입력해주세요" 
                   class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2"/>
          </div>
          <div class="mb-[30px] flex justify-center items-center px-[30px]">
            <label for="tel" class="text-font-color text-[16px] w-[100px] text-left">전화번호</label>
            <input type="text" id="tel" v-model="tel" placeholder="전화번호를 입력해주세요" 
                   class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2"/>
          </div>
          <div class="mb-[60px] flex justify-center items-center px-[30px]">
            <label for="birthday" class="text-font-color text-[16px] w-[100px] text-left">생년월일 </label>
            <input type="text" id="birthday" v-model="birthday" placeholder="생년월일을 입력해주세요(YYYYMMdd)" 
                   class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2"/>
          </div>
          <div class="flex justify-center">
            <button :disabled="!isFormValid" type="submit" class="h-[50px] w-[500px] rounded-[15px] bg-kb-brown-2 text-white flex justify-center items-center">
             비밀번호 찾기
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const name = ref('');
  const tel = ref('');
  const birthday = ref('');
  
  // 유효성 검사를 위한 computed
  const isFormValid = computed(() => {
    return name.value && tel.value && birthday.value && /^[0-9]{8}$/.test(birthday.value) && /^[0-9]{10,11}$/.test(tel.value);
  });
  
  const handleSubmit = () => {
    if (isFormValid.value) {
      alert('비밀번호 찾기 요청을 보냈습니다.');
    } else {
      alert('모든 필드를 올바르게 입력해주세요.');
    }
  };
  </script>
  