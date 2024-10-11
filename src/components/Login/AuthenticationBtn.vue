<template>
  <div class="firebase-sms-auth mt-6 flex flex-col">
    <div id="recaptcha-container"></div>
  <!--전화번호 -->
    <label for="tel" class="text-font-color mb-1">전화번호</label>
    <div class="flex flex-col">
      <input
        type="text"
        v-model="phoneNumber"
        placeholder="전화번호 입력 (+8210xxxxxxxx)"
        class="pl-4 h-[50px] w-full rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"
      />
      <button
        @click="sendCode"
        :disabled="!isRecaptchaVerified"
        class="h-[50px] w-1/4 rounded-md bg-kb-brown-2 text-white hover:bg-kb-yellow-1 transition duration-200"
      >
        인증코드 전송
      </button>
    </div>
    <div class="error-message">{{ errorMessage }}</div>
    <br /><br />
    <!--인증코드 확인-->
    <div class="flex justify-between">
      <input
      type="text"
      v-model="verificationCode"
      placeholder="인증코드 입력"
      class="pl-4 h-[50px] w-2/3 mr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"
    />
    <button
      @click="verifyCode"
      class="h-[50px] w-1/3 rounded-md bg-kb-brown-2 text-white hover:bg-kb-yellow-1 transition duration-200"
    >
      인증코드 확인
    </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { auth } from "../../apis/utils/init";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

export default {
  name: "FirebaseSMSAuth",
  setup() {
    const phoneNumber = ref("");
    const verificationCode = ref("");
    const errorMessage = ref("");
    const isRecaptchaVerified = ref(false);

    let recaptchaVerifier;
    let confirmationResult;

    const setUpRecaptcha = async () => {
      try {
        recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "normal",
          callback: () => {
            console.log("reCAPTCHA solved, verification process can continue.");
            isRecaptchaVerified.value = true;
          },
          "expired-callback": () => {
            console.log("reCAPTCHA expired. Please solve it again.");
            isRecaptchaVerified.value = false;
          },
        });
        await recaptchaVerifier.render();
      } catch (error) {
        console.error("Error setting up reCAPTCHA:", error);
        errorMessage.value = "reCAPTCHA 설정 오류: " + error.message;
      }
    };

    const sendCode = async () => {
      try {
        console.log("Attempting to send SMS to:", phoneNumber.value);
        confirmationResult = await signInWithPhoneNumber(
          auth,
          phoneNumber.value,
          recaptchaVerifier
        );
        console.log("SMS sent successfully");
        alert("인증 코드가 전송되었습니다. 메시지를 확인해 주세요.");
        errorMessage.value = "";
      } catch (error) {
        console.error("Error sending SMS:", error.code, error.message);
        if (error.code === "auth/captcha-check-failed") {
          errorMessage.value =
            "reCAPTCHA 인증에 실패했습니다. 다시 시도해 주세요.";
          try {
            await recaptchaVerifier.render();
          } catch (renderError) {
            console.error("Error re-rendering reCAPTCHA:", renderError);
          }
        } else {
          errorMessage.value = `SMS 전송 실패: ${error.message}`;
        }
      }
    };

    const verifyCode = async () => {
      try {
        const result = await confirmationResult.confirm(verificationCode.value);
        const user = result.user;
        console.log("User signed in:", user);
        alert("인증에 성공했습니다!");
        errorMessage.value = "";
      } catch (error) {
        console.error("Error verifying code:", error);
        errorMessage.value = "인증 코드 확인 실패: " + error.message;
      }
    };

    onMounted(() => {
      setUpRecaptcha();
    });

    return {
      phoneNumber,
      verificationCode,
      errorMessage,
      isRecaptchaVerified,
      sendCode,
      verifyCode,
    };
  },
};
</script>

<style scoped>
.firebase-sms-auth {
  font-family: Arial, sans-serif;
}

.error-message {
  color: red;
}

#recaptcha-container {
  width: 100px;
}
</style>
