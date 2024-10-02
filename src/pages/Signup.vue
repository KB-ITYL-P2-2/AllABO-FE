<template>
  <div class="h-screen flex flex-col">
    <div class="h-[40vh] bg-white flex flex-col items-center justify-center">
      <div class="flex justify-center mt-[50px]">
      </div>
    </div>

    <div class="h-[60vh] bg-white flex flex-col items-center">
      <!--회원가입 입력 폼-->
      <div class="w-full max-w-lg px-6">
        <form @submit.prevent="submitForm">
          <div class="mt-[50px] flex flex-col">
            <label for="name" class="text-font-color mb-1">이름</label>
            <input type="text" id="name" v-model="name" placeholder="이름을 입력해주세요" 
                   class="text-font-color pl-4 h-[50px] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"/>
          </div>
          
          <div class="mt-6 flex flex-col">
            <label for="birthday" class="text-font-color mb-1">생년월일</label>
            <input type="text" id="birthday" v-model="birthday" placeholder="YYYYMMDD 형식으로 입력해주세요"
                   class="text-font-color pl-4 h-[50px] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"/>
          </div>

          <div class="mt-6 flex flex-col">
            <label for="email" class="text-font-color mb-1">이메일</label>
            <div class="flex">
              <input type="email" id="email" v-model="email" placeholder="이메일을 입력해주세요"
              class="text-font-color pl-4 h-[50px] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"/>
       <!-- 이메일 유효성 검사 실패 시 경고 문구 표시 -->
       <p v-if="emailError && emailTouched" class="text-sm text-red-500 mt-2">이메일 형식에 맞게 입력해주세요.</p>
              <!-- <button class="ml-4 h-[50px] w-[120px] rounded-md bg-kb-brown-2 text-white hover:bg-kb-yellow-1 transition duration-200">인증</button> -->
            </div>
          </div>

          <div class="mt-6 flex flex-col">
            <label for="password" class="text-font-color mb-1">비밀번호</label>
            <input type="password" id="password" v-model="password" placeholder="비밀번호를 입력해주세요"
                   class="text-font-color pl-4 h-[50px] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"/>
            <p v-if="passwordError" class="text-sm text-kb-gray-2">비밀번호는 특수문자, 영문, 숫자를 포함하여 8~12자로 설정해주세요.</p>
          </div>

          <div class="mt-6 flex flex-col">
            <label for="passwordConfirm" class="text-font-color mb-1">비밀번호 확인</label>
            <input type="password" id="passwordConfirm" v-model="passwordConfirm" placeholder="비밀번호를 다시 입력해주세요"
                   class="pl-4 h-[50px] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"/>
            <p v-if="passwordConfirmError" class="text-sm text-red-500 mt-1">비밀번호가 일치하지 않습니다.</p>
          </div>

          <div class="mt-6 flex flex-col">
            <label for="tel" class="text-font-color mb-1">전화번호</label>
            <div class="flex">
              <input type="tel" id="tel" v-model="tel" placeholder="전화번호를 입력해주세요 (01012341234)" 
                     class="pl-4 h-[50px] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"/>
              <button class="ml-4 h-[50px] w-[120px] rounded-md bg-kb-brown-2 text-white hover:bg-kb-yellow-1 transition duration-200">인증</button>
            </div>
          </div>

          <div class="mt-6 flex flex-col">
            <label for="asset" class="text-font-color mb-1">연 소득</label>
            <input type="text" id="asset" v-model="asset" placeholder="연 소득을 입력해주세요 (예: 30000000)"
                   class="pl-4 text-font-colorpl-4 h-[50px] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"/>
          </div>

          <div class="flex justify-center mt-[50px] mb-[50px]">
            <button @click="$router.push('/login')"
                    class="h-[50px] w-[150px] rounded-md bg-white text-kb-brown-2 border border-kb-brown-2 mr-4 hover:bg-gray-100 transition duration-200">취소</button>
            <button :class="[isFormValid ? 'bg-kb-brown-2 hover:bg-kb-yellow-1' : 'bg-kb-gray-2']" 
                    :disabled="!isFormValid" 
                    class="h-[50px] w-[150px] rounded-md text-white  transition duration-200">가입하기</button>
          </div>
        </form>
      </div>
    </div>
  </div>
 
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const birthday = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const tel = ref('');
const asset = ref('');

const router = useRouter();

const emailTouched=ref(false);

//이메일 유효성 
const emailError = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(email.value);
});
// 비밀번호 유효성
const passwordError = computed(() => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!#*])[A-Za-z\d~!#*]{8,12}$/;
  return !passwordRegex.test(password.value);
});

// 비밀번호 확인 유효성 
const passwordConfirmError = computed(() => {
  return password.value !== passwordConfirm.value;
});

// 모든 입력 필드 채워졌는지 확인 
const isFormValid = computed(() => {
  return name.value && birthday.value && email.value && !passwordError.value && !passwordConfirmError.value && tel.value && asset.value;
});

function submitForm() {
  if (isFormValid.value) {
    router.push("/signup-success");
  } else {
    alert('모든 필드를 정확히 입력해주세요.');
  }
}
function handleEmailBlur() {
  emailTouched.value = true;
}
</script>
