<template>
  <div class="h-[70px]"></div>

  <div class="flex justify-center mt-[90px]">
    <div class="text-3xl font-bold text-font-color">회원가입</div>
  </div>
  <div class="flex justify-center mt-[25px]">
    <img alt="circle" src="../assets/images/empty_circle.png" class="mx-9 w-5 h-5" />
    <img alt="circle" src="../assets/images/full_circle.png" class="mx-9 w-5 h-5" />
    <img alt="circle" src="../assets/images/empty_circle.png" class="mx-9 w-5 h-5" />
  </div>
  <div class="flex justify-center mt-[20px]">
    <p class="mx-5 text-[14px]">약관동의</p>
    <p class="mx-5 text-[14px] font-semibold">정보입력</p>
    <p class="mx-5 text-[14px]">회원가입</p>
 </div>
  <!--회원가입 입력 폼-->
  <div>
    <div class="mt-[90px] flex justify-center">
      <form @submit.prevent="submitForm">
        <div class="mb-[50px] flex items-center">
          <label for="name" class="text-font-color text-[16px] w-[120px]">이름 </label>
          <input type="text" id="name" v-model="name" placeholder="이름을 입력해주세요" 
                 class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 "/>
        </div>
        <div class="mb-[50px] flex items-center">
          <label for="birthday" class="w-[120px]">생년월일 </label>
          <input type="text" id="birthday" v-model="birthday" placeholder="생년월일을 입력해주세요(YYYY-MM-dd)" 
                 class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2"/>
        </div>
        <div class="flex items-center">
          <label for="email" class="w-[120px]">이메일 </label>
          <input type="text" id="email" v-model="email" placeholder="이메일을 입력해주세요"
                 class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 mr-[50px]"/>
          <button class="text-white bg-kb-brown-2 h-[50px] w-[150px] rounded-[15px]">이메일 인증</button><br>
        </div>
        <p class="text-[12px] text-gray-300 flex items-center ml-[130px] p-2">반드시 실제로 사용하는 이메일 주소를 입력해주세요</p>

        <div class="mt-[50px] flex items-center">
          <label for="password" class="w-[120px]">비밀번호</label>
          <input type="password" id="password" v-model="password" placeholder="   비밀번호를 입력해주세요"
                 class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2"/>
        </div>
        <!-- 비밀번호 유효성 검사 경고 메시지 -->
        <p v-if="passwordError" class="text-gray-300 text-sm ml-[130px] p-2">비밀번호는 특수문자(~!#*) 및 영문과 숫자를 포함하여 8~12자로 설정해주세요.</p>

        <div class="mt-[50px] flex items-center">
          <label for="passwordConfirm" class="w-[120px]">비밀번호 확인 </label>
          <input type="password" id="passwordConfirm" v-model="passwordConfirm" placeholder="   비밀번호를 다시 한번 입력해주세요"
                 class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2"/>
        </div>
        <!-- 비밀번호 확인 경고 메시지 -->
        <p v-if="passwordConfirmError" class="text-red-500 text-sm ml-[130px] p-2">비밀번호가 일치하지 않습니다.</p>

        <div class="mt-[50px] flex items-center">
          <label for="text" class="w-[120px]">전화번호 </label>
          <input type="text" id="tel" v-model="tel" placeholder="   - 없이 전화번호를 입력해주세요(01012341234)"
                 class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 mr-[50px]"/>
          <button class="text-[16px] text-white bg-kb-brown-2 h-[50px] w-[150px] rounded-[15px]">인증번호 발송</button>
        </div>
        <div class="mt-[50px] flex items-center">
          <label for="asset" class="w-[120px]">연 소득 </label>
          <input type="text" id="asset" v-model="asset" placeholder="  현재 연간 소득을 입력해주세요 (ex: 3000000)"
                 class="pl-4 h-[50px] w-[400px] text-font-color rounded-[15px] border border-kb-gray-2 focus:outline-none focus:ring-1 focus:ring-kb-brown-2"/>
        </div>

        <div class="flex justify-center mt-[90px] mb-[90px]">
          <button @click="$router.push('/login')"
                  class="w-[213px] h-[50px] text-[16px] rounded-[15px] mr-10 bg-white text-font-color border border-kb-brown-2">취소</button>
          <button :class="[isFormValid ? 'bg-kb-brown-2' : 'bg-kb-gray-2']" 
                  :disabled="!isFormValid" 
                  @click="submitForm"
                  class="w-[213px] h-[50px] text-[16px] rounded-[15px] text-font-color">가입하기</button>
        </div>
      </form>
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

// 비밀번호 유효성 검사
const passwordError = computed(() => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!#*])[A-Za-z\d~!#*]{8,12}$/;
  return !passwordRegex.test(password.value);
});

// 비밀번호 확인 유효성 검사
const passwordConfirmError = computed(() => {
  return password.value !== passwordConfirm.value;
});

// 모든 입력 필드가 채워졌는지 확인하는 computed 속성
const isFormValid = computed(() => {
  return name.value && birthday.value && email.value && !passwordError.value && !passwordConfirmError.value && tel.value && asset.value;
});

function submitForm() {
  if (isFormValid.value) {
    // 가입 처리 로직
    router.push("/signup-success");
  } else {
    alert('모두 입력해주세요');
  }
}
</script>
