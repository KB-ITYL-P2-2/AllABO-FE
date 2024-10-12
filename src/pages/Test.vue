<!-- <template>
  <div class="firebase-sms-auth">
    <h1>Firebase SMS 인증</h1>
    <div id="recaptcha-container"></div>
    <input
      v-model="phoneNumber"
      type="text"
      placeholder="전화번호 입력 (+8210xxxxxxxx)"
    />
    <button @click="sendCode" :disabled="!recaptchaSolved">
      인증코드 전송
    </button>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <br /><br />
    <input v-model="verificationCode" type="text" placeholder="인증코드 입력" />
    <button @click="verifyCode">인증코드 확인</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6AMxiZJAoqx5_cJhhRMD3OJHFsQL39GQ",
  authDomain: "allabo.firebaseapp.com",
  projectId: "allabo",
  storageBucket: "allabo.appspot.com",
  messagingSenderId: "146321755351",
  appId: "1:146321755351:web:f4dbec6eb05d6ba4d93492",
  measurementId: "G-P5PYFPLZVM"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
auth.languageCode = 'ko';

const phoneNumber = ref('');
const verificationCode = ref('');
const errorMessage = ref('');
const recaptchaSolved = ref(false);
const recaptchaVerifier = ref(null);
const confirmationResult = ref(null);

const setUpRecaptcha = async () => {
  try {
    recaptchaVerifier.value = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'normal',
      callback: () => {
        recaptchaSolved.value = true;
      },
      'expired-callback': () => {
        recaptchaSolved.value = false;
      },
    });
    await recaptchaVerifier.value.render();
  } catch (error) {
    console.error('Error setting up reCAPTCHA:', error);
    errorMessage.value = 'reCAPTCHA 설정 오류: ' + error.message;
  }
};

const sendCode = async () => {
  try {
    confirmationResult.value = await signInWithPhoneNumber(
      auth,
      phoneNumber.value,
      recaptchaVerifier.value
    );
    alert('인증 코드가 전송되었습니다. 메시지를 확인해 주세요.');
    errorMessage.value = '';
  } catch (error) {
    console.error('Error sending SMS:', error);
    errorMessage.value = `SMS 전송 실패: ${error.message}`;
    if (error.code === 'auth/captcha-check-failed') {
      await setUpRecaptcha();
    }
  }
};

const verifyCode = async () => {
  try {
    const result = await confirmationResult.value.confirm(verificationCode.value);
    console.log('User signed in:', result.user);
    alert('인증에 성공했습니다!');
    errorMessage.value = '';
  } catch (error) {
    console.error('Error verifying code:', error);
    errorMessage.value = '인증 코드 확인 실패: ' + error.message;
  }
};

onMounted(setUpRecaptcha);
</script>

<style scoped>
.firebase-sms-auth {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

input,
button {
  margin: 10px 0;
  padding: 5px;
}

.error-message {
  color: red;
}

#recaptcha-container {
  width: 100px;
}
</style> -->

<!--직접 코드 만들기 -->

<template>
<div class="mt-40">
테스트 페이지 
</div>
<div class="re">

</div>
</template>
<script setup>
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
import {
        getAuth,
        signInWithPhoneNumber,
        RecaptchaVerifier,
      } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js';
const firebaseConfig = {
        apiKey: import.meta.env.VITE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_DE,
        appId: import.meta.env.VITE_APP_ID,
        measurementId: import.meta.env.VITE_MEASUREMENT_ID
      };
if (!firebase.apps.length) {

firebase.initializeApp(firebaseConfig);

} else {

firebase.app();

}
</script>