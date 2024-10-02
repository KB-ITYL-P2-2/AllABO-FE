<template>
    <div class="h-[70px] bg-kb-brown-1 mb-[50px]"></div>
  <div class="mt-[100px] flex justify-center">
    <img src="../../assets/images/user.png" alt="프로필 이미지" class="justify-center w-32 h-32 rounded-full  mb-[60px]" />
  </div>
    <div class="flex justify-center">
      <!-- 사이드바 -->
      <div class="w-1/5 p-8 flex flex-col items-center">
        <ul class="space-y-8 text-lg text-font-color ml-[40px]">
          <li>
            <button @click="editProfile" class=" hover:bg-stone-500 hover:text-white hover:rounded-md focus:outline-none text-[20px] p-3">프로필 수정</button>
          </li>
          <li>
            <button @click="editPassword" class="hover:bg-stone-500 hover:text-white hover:rounded-md focus:outline-none text-[20px] p-3">비밀번호 변경</button>
          </li>
          <li>
            <button @click="withdrawMembership" class="hover:bg-stone-500 hover:text-white hover:rounded-md focus:outline-none text-[20px] p-3">회원탈퇴</button>
          </li>
        </ul>
      </div>
  
      <!-- 정보 수정 폼 -->
      <div class="w-4/5 flex flex-col items-center mb-[100px] ml-[100px]">
        <form @submit.prevent="editForm" class="w-2/3">
          <!-- 이름 -->
          <div class="flex flex-col">
            <label for="name" class="block text-font-color mb-1">이름</label>
            <input type="text" id="name" v-model="name" placeholder="이름을 입력해주세요" 
                   class="text-font-color pl-4 h-[50px] w-[500px] rounded-md border border-kb-gray-1 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 transition duration-200 mb-10"/>
          </div>
  
          <!-- 생년월일 -->
          <div class="flex flex-col">
            <label for="birthday" class="block text-font-color mb-1">생년월일</label>
            <input
              type="text"
              id="birthday"
              v-model="birthday"
              placeholder="YYYY.MM.DD 형식으로 입력해주세요"
              class="text-font-color pl-4 h-[50px] w-[500px] rounded-md border border-kb-gray-1 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 transition duration-200 mb-10"/>          
            </div>
          <!-- 이메일 -->
          <div class="flex flex-col">
            <label for="email" class="block text-font-color mb-1">이메일</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="이메일을 입력해주세요"
              class="text-font-color pl-4 h-[50px] w-[500px] rounded-md border border-kb-gray-1 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 transition duration-200 mb-10"/>        
          </div>
          <!-- 전화번호 -->
          <div class="flex flex-col">
            <label for="tel" class="block text-font-color mb-1">전화번호</label>
            <input
              type="tel"
              id="tel"
              v-model="tel"
              placeholder="010-1234-1234"
              class="text-font-color pl-4 h-[50px] w-[500px] rounded-md border border-kb-gray-1 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 transition duration-200"/>         
          </div>
  
          <!-- 버튼 -->
          <div class="flex mt-8 mr-[20px]">
            <button
              type="button"
              @click="$router.push('/mypage')"
              class="w-[200px] h-[50px] rounded-[15px] bg-white text-font-color border-kb-gray-1 hover:bg-kb-gray-1 transition duration-200"
            >
              취소
            </button>
            <button
              type="submit"
              :class="[isFormValid ? 'bg-kb-brown-2 text-white hover:bg-kb-yellow-1' : 'bg-gray-300 text-gray-400']"
              :disabled="!isFormValid"
              class="w-[200px] h-[50px] rounded-[15px] transition duration-200"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';

  // 가라 데이터 
  const name = ref('김가나');
  const birthday = ref('1999.01.01');
  const email = ref('abc@gmail.com');
  const tel = ref('010-1234-1234');
  
  const router = useRouter();
  
  const isFormValid = computed(() => {
    return name.value && birthday.value && email.value && tel.value;
  });
  
  // 폼 제출 핸들러
  const editForm = () => {
    if (isFormValid.value) {
      console.log('폼 제출:', { name: name.value, birthday: birthday.value, email: email.value, tel: tel.value });
      router.push('/mypage'); // 저장 후 마이페이지로 이동
    }
  };
  
  // 사이드바 메뉴 핸들러
  const editProfile = () => {
    router.push('/mypage-profile')
  }
  const editPassword = () =>  router.push('/mypage-password')
  const withdrawMembership = () => router.push('/mypage-withdraw')
  </script>
  
  