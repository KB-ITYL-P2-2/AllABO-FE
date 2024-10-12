<template>
  <div class="firebase-sms-auth">
    <h1>Firebase SMS 인증</h1>
    <div id="recaptcha-container" ref="recaptchaContainer"></div>
    <!--전화번호 입력 칸 -->
   <div class="mt-6 flex flex-col">
    <div class="flex">
      <input
    v-model="phoneNumber"
    type="text"
    placeholder="전화번호 입력 (+8210xxxxxxxx)"
    class="pl-4 text-font-colorpl-4 h-[50px] w-3/4 pr-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"/>
    </div>
    <div class="mt-6">
      <button @click="sendCode" :disabled="!recaptchaSolved"
      class="bg-kb-brown-1 w-1/3 text-white rounded-md h-[50px] hover:text-font-color hover:bg-kb-yellow-4">
    
        인증코드 전송
      </button>
    </div>
   </div>
  <!--에러메세지-->
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <br /><br />
    <!--인증코드-->
   <div class="mt-6 flex flex-col">
    <label for="verificationCode" class="text-font-color mb-1">인증코드</label>
    <input v-model="verificationCode" type="text" placeholder="인증코드 입력"
    class="pl-4 text-font-colorpl-4 h-[50px] w-3/4 pr-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"/>
    <button @click="verifyCode"
    class="bg-kb-brown-1 w-1/3 text-white rounded-md h-[50px] hover:text-font-color hover:bg-kb-yellow-4">
    인증코드 확인</button>
   </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { firebaseConfig } from '../../apis/utils/firebase';

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps();
}

const auth = getAuth();
auth.languageCode = 'ko';
// console.log(auth);

const phoneNumber = ref('');
const verificationCode = ref('');
const errorMessage = ref('');
const recaptchaSolved = ref(false);
let recaptchaVerifier = null;
let confirmationResult = null;
const recaptchaContainer = ref(null)

// Recaptcha 설정 함수
const setUpRecaptcha = async () => {
  try {
    recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaContainer.value, {
      size: 'normal',
      callback: () => {
        recaptchaSolved.value = true;
      },
      'expired-callback': () => {
        recaptchaSolved.value = false;
      },
    });
    await recaptchaVerifier.render();
  } catch (error) {
    console.error('Error setting up reCAPTCHA:', error);
    errorMessage.value = 'reCAPTCHA 설정 오류: ' + error.message;
  }
};

// 인증 코드 전송 함수
const sendCode = async () => {
  // 전화번호 형식이 올바른지 검증 (이 부분을 추가해도 좋습니다)
  const phoneNumberRegex = /^\+8210\d{8}$/; // +8210으로 시작하고 뒤에 8자리 숫자
  if (!phoneNumberRegex.test(phoneNumber.value)) {
    errorMessage.value = '전화번호 형식이 잘못되었습니다. (+8210xxxxxxxx 형식으로 입력하세요)';
    return;
  }
  console.log(auth);
  console.log(phoneNumber.value);
  console.log(recaptchaVerifier)
  try {
    confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber.value,
      recaptchaVerifier
    );
    console.log("안녕안녕~~", confirmationResult)
    alert('인증 코드가 전송되었습니다. 메시지를 확인해 주세요.');
    errorMessage.value = '';
  } catch (error) {
    console.error('Error sending SMS:', error);
    errorMessage.value = `SMS 전송 실패: ${error.message}`;
    
    // reCAPTCHA 오류 시 재설정
    if (error.code === 'auth/captcha-check-failed') {
      await setUpRecaptcha();
    }
  }
};
// 인증 코드 확인 함수
const verifyCode = async () => {
  try {
    const result = await confirmationResult.confirm(verificationCode.value);
    console.log('User signed in:', result.user);
    alert('인증에 성공했습니다!');
    errorMessage.value = '';
  } catch (error) {
    console.error('Error verifying code:', error);
    errorMessage.value = '인증 코드 확인 실패: ' + error.message;
  }
};

onMounted(() => {
  setUpRecaptcha(); // DOM이 완전히 준비된 후 reCAPTCHA 설정
});
</script>

<style scoped>

.error-message {
  color: red;
}

#recaptcha-container {
  width: 100px;
}
</style>
