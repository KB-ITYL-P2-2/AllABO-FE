<template>
    <div class="h-[70px]"></div>
    <div class="flex justify-center mt-[90px]">
      <div class="text-3xl font-bold text-font-color">F:YL</div>
    </div>
    <div class="mt-[120px] flex justify-center">
      <form>
        <!--email-->
        <label for="email" name="useremail" class="block mb-2"></label>
        <input type="text" placeholder=" 이메일을 입력하세요" 
               class="h-[50px] w-[400px] rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
        <br>
        <label for="password" name="password" class="block mt-4 mb-2"></label>
        <input type="password" placeholder=" 비밀번호를 입력하세요" 
               class="h-[50px] w-[400px] rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
        <br>
        <button class="h-[50px] w-[400px] rounded-[15px] bg-kb-brown-1 text-white text- py-2 px-4 focus:ring-kb-brown-2 mt-[45px]">LOGIN</button>
        <div class="user_info mt-4 flex justify-center">
          <button @click.prevent="openEmailModal" type="button" class="text-kb-gray-2 text-[16px] underline ">이메일 찾기</button>
          <button @click.prevent="openPasswordModal" type="button" class="text-kb-gray-2 text-[16px] underline ml-8 ">비밀번호 찾기</button>
          <button @click="$router.push('/signup-condition')" type="button" class="text-kb-gray-2 text-[16px] underline ml-8 ">회원가입</button>
        </div>
      </form>
    </div>
  
    <!-- 모달 컴포넌트 -->
    <EmailModal v-if="showEmailModal" @close="showEmailModal = false" />
    <PasswordModal v-if="showPasswordModal" @close="showPasswordModal = false" />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import EmailModal from '../components/Login/EmailModal.vue';
  import PasswordModal from '../components/Login/PasswordModal.vue';
  
  // 모달 상태
  const showEmailModal = ref(false);
  const showPasswordModal = ref(false);
  
  const openEmailModal = () => {
    showEmailModal.value = true;
  };
  
  const openPasswordModal = () => {
    showPasswordModal.value = true;
  };
  </script>
  