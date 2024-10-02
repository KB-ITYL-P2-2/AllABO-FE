<template>
    <div class="h-[70px] bg-kb-brown-1 mb-[50px]"></div>
  
    <div class="flex h-screen">
      <!-- 사이드바 -->
      <div class="w-1/4 bg-gray-100 p-8 flex flex-col items-start">
        <img src="../assets/images/user.png" alt="프로필 이미지" class="w-24 h-24 rounded-full mb-8" />
        <ul class="space-y-8 text-lg text-gray-700">
          <li>
            <button @click="editProfile" class="hover:underline focus:outline-none">프로필 수정</button>
          </li>
          <li>
            <button @click="changePassword" class="hover:underline focus:outline-none">비밀번호 변경</button>
          </li>
          <li>
            <button @click="withdrawMembership" class="hover:underline focus:outline-none">회원탈퇴</button>
          </li>
        </ul>
      </div>
  
      <!-- 정보 수정 폼 -->
      <div class="w-3/4 flex flex-col items-center justify-center">
        <form @submit.prevent="submitForm" class="w-2/3 space-y-6">
          <!-- 이름 -->
          <div class="flex flex-col">
            <label for="name" class="block text-gray-700 mb-2">이름</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="이름을 입력해주세요"
              class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
  
          <!-- 생년월일 -->
          <div class="flex flex-col">
            <label for="birthday" class="block text-gray-700 mb-2">생년월일</label>
            <input
              type="text"
              id="birthday"
              v-model="birthday"
              placeholder="YYYY.MM.DD 형식으로 입력해주세요"
              class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
  
          <!-- 이메일 -->
          <div class="flex flex-col">
            <label for="email" class="block text-gray-700 mb-2">이메일</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="이메일을 입력해주세요"
              class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
  
          <!-- 전화번호 -->
          <div class="flex flex-col">
            <label for="tel" class="block text-gray-700 mb-2">전화번호</label>
            <input
              type="tel"
              id="tel"
              v-model="tel"
              placeholder="010-1234-1234"
              class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
  
          <!-- 버튼 -->
          <div class="flex justify-between mt-8">
            <button
              type="button"
              @click="$router.push('/mypage')"
              class="w-[150px] h-[50px] rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 transition duration-200"
            >
              취소
            </button>
            <button
              type="submit"
              :class="[isFormValid ? 'bg-kb-brown-2 text-white hover:bg-kb-yellow-1' : 'bg-gray-300 text-gray-400']"
              :disabled="!isFormValid"
              class="w-[150px] h-[50px] rounded-md transition duration-200"
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
  
  // 폼 필드 데이터
  const name = ref('김가나');
  const birthday = ref('1999.01.01');
  const email = ref('abc@gmail.com');
  const tel = ref('010-1234-1234');
  
  // 라우터 사용 설정
  const router = useRouter();
  
  // 폼 유효성 검사: 모든 필드가 채워졌는지 확인
  const isFormValid = computed(() => {
    return name.value && birthday.value && email.value && tel.value;
  });
  
  // 폼 제출 핸들러
  const submitForm = () => {
    if (isFormValid.value) {
      console.log('폼 제출:', { name: name.value, birthday: birthday.value, email: email.value, tel: tel.value });
      router.push('/mypage'); // 저장 후 마이페이지로 이동
    }
  };
  
  // 사이드바 메뉴 핸들러
  const editProfile = () => console.log('프로필 수정 클릭됨');
  const changePassword = () => console.log('비밀번호 변경 클릭됨');
  const withdrawMembership = () => console.log('회원탈퇴 클릭됨');
  </script>
  
  