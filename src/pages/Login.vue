<template>
  <div class="flex flex-col h-screen">
    <!-- 상단 40% 배경 -->
    <div class="h-[35vh] bg-kb-brown-1 flex flex-col items-center justify-center">
      <div class="mt-10 text-3xl font-bold text-white">F:YL</div>
    </div>

    <!-- 나머지 60% 배경 -->
    <div class="h-[65vh] bg-white flex flex-col items-center justify-start">
      <div class="flex justify-center mt-10">
        <form class="w-[400px]">
          <!-- 이메일 -->
          <label for="email" class="block mb-2 text-kb-gray-2">이메일</label>
          <input 
            id="email"
            type="email"
            placeholder="이메일을 입력하세요"
            class="pl-4 h-[50px] w-full rounded-md border border-kb-gray-2 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-150"
          />
          
          <!-- 비밀번호 -->
          <label for="password" class="block mt-4 mb-2 text-kb-gray-2">비밀번호</label>
          <input 
            id="password"
            type="password" 
            placeholder="비밀번호를 입력하세요"
            class="pl-4 h-[50px] w-full rounded-md border border-kb-gray-2 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-150"
          />

          <!-- 로그인 버튼 -->
          <button 
            type="submit"
            class="h-[50px] w-full rounded-md bg-kb-brown-1 text-white text-[16px] mt-8 hover:bg-kb-yellow-1 focus:bg-kb-yellow-1 transition duration-150"
          >
            로그인
          </button>
          
          <!-- 추가 옵션 -->
          <div class="flex justify-center mt-4 space-x-6 text-sm text-kb-gray-2">
            <button @click.prevent="openEmailModal" type="button" class="underline">이메일 찾기</button>
            <button @click.prevent="openPasswordModal" type="button" class="underline">비밀번호 찾기</button>
            <button @click="$router.push('/signup-condition')" type="button" class="underline">회원가입</button>
          </div>
        </form>
      </div>

      <!-- 간편 로그인 -->
      <div class="flex justify-center mt-12">
        <hr class="w-40 mt-3 border-kb-gray-2"/> 
        <p class="px-4 text-sm text-kb-gray-2">간편 로그인</p>
        <hr class="w-40 mt-3 border-kb-gray-2"/> 
      </div>
    

      <!-- 간편 로그인 버튼 -->
      <div class="flex justify-center mt-8 space-x-8">
        <button class="w-[55px] h-[55px] rounded-full bg-[#FEE500] flex items-center justify-center hover:shadow-lg transition duration-150"
          @click="kakaoLoginRequestCodeHandler"
          >
          <img src="../assets/images/kakaoBtn.png" alt="카카오 로그인" class="w-10 h-10">
        </button>
        <button @click="handleGoogleLogin"
          class="w-[55px] h-[55px] rounded-full border-[1px] border-gray-200 flex items-center justify-center hover:shadow-lg transition duration-150">
          <img src="../assets/images/googleBtn.png" alt="구글 로그인" class="w-6 h-6">
        </button>
      </div>
    </div>
  </div>

  <!-- 모달 컴포넌트 -->
  <EmailModal v-if="showEmailModal" @close="showEmailModal = false" />
  <PasswordModal v-if="showPasswordModal" @close="showPasswordModal = false" />
</template>

<script setup>
import { ref } from 'vue';
import EmailModal from '../components/Login/EmailModal.vue';
import PasswordModal from '../components/Login/PasswordModal.vue';
import { kakaoLoginRequestCodeHandler } from '../apis/api/kakao';
import { googleLoginHandler,sendTokenToBackend } from "../apis/api/firebaseGoogle.js";

// 모달 상태
const showEmailModal = ref(false);
const showPasswordModal = ref(false);

const openEmailModal = () => {
  showEmailModal.value = true;
};

const openPasswordModal = () => {
  showPasswordModal.value = true;
};
const handleGoogleLogin = async () => {
  try {
    const idToken = await googleLoginHandler();  // 구글 로그인 수행
    const response = await sendTokenToBackend(idToken);  // 토큰을 백엔드로 전송
    console.log("로그인 성공:", response);
  } catch (error) {
    console.error("로그인 처리 중 오류 발생:", error);
  }
};


</script>

<style>
body {
  margin: 0;
  padding: 0;
}

button:focus {
  outline: none;
}
</style>
