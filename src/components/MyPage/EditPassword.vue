<template>
  <div class="h-[70px] bg-kb-brown-1 mb-[120px]"></div>
  <div class="flex">
    <SideBar />
    <div>
      <form @submit.prevent="editPasswordForm">
            <p class="text-[20px]  ml-[150px] mb-[100px]">비밀번호 변경</p>
        <div class="mt-6 flex flex-col  justify-center ml-[350px]">
          <label for="password1" class="text-font-color mb-1">기존 비밀번호</label>
          <input
            type="password"
            id="password1"
            v-model="password1"
            placeholder="기존 비밀번호를 입력해주세요"
            class="text-font-color pl-4 h-[50px] w-[500px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200 mb-2"
          />
        </div>
        <!--새로운 비밀번호 입력-->
        <div class="mt-6 flex flex-col justify-center  ml-[350px]">
          <label for="password" class="text-font-color mb-1">새 비밀번호</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="새 비밀번호를 입력해주세요"
            class="text-font-color pl-4 h-[50px] w-[500px]rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200 "
          />
          <p v-if="passwordError" class="text-sm text-kb-gray-2 mb-2">
            비밀번호는 특수문자, 영문, 숫자를 포함하여 8~12자로 설정해주세요.
          </p>
        </div>
  
        <div class="mt-6 flex flex-col justify-center ml-[350px]">
          <label for="passwordConfirm" class="text-font-color mb-1"
            >새 비밀번호 확인</label
          >
          <input
            type="password"
            id="passwordConfirm"
            v-model="passwordConfirm"
            placeholder="새 비밀번호를 재입력해주세요"
            class="pl-4 h-[50px] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 transition duration-200"
          />
          <p v-if="passwordConfirmError" class="text-sm text-red-500 mt-1">
            비밀번호가 일치하지 않습니다.
          </p>
        </div>
        <div class="flex justify-center mt-[50px] mb-[50px] ml-[350px]">
            <button @click="$router.push('/mypage')"
                    class="h-[50px] w-[150px] rounded-md bg-white text-kb-brown-2 border border-kb-brown-2 mr-4 hover:bg-gray-100 transition duration-200">취소</button>
            <button :class="[isFormValid ? 'bg-kb-brown-2 hover:bg-kb-yellow-1' : 'bg-kb-gray-2']" 
                    :disabled="!isFormValid" 
                    class="h-[50px] w-[150px] rounded-md text-white  transition duration-200">비밀번호 변경</button>
          </div>
        </form>
      </div>
  </div>
</template>
<script setup>
import SideBar from "./SideBar.vue";
import { ref,computed } from "vue";
import { useRouter } from "vue-router";

const router=useRouter();
const password = ref('');
const passwordConfirm = ref('');
const password1=ref('');

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
  return  !passwordError.value && !passwordConfirmError.value;
});

function editPasswordForm() {
  if (isFormValid.value) {
    router.push("/mypage");
  } else {
    alert('모든 필드를 정확히 입력해주세요.');
  }
}
</script>
