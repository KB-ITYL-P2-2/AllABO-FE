<template>
  <div class="h-[70px] bg-kb-brown-1 mb-[120px]"></div>
  <div class="flex">
    <SideBar />

    <div class="flex-col justify-center relative">
      <div class="flex justify-center relative">
        <img
          :src="selectedIcon"
          alt="프로필 이미지"
          class="justify-center w-32 h-32 rounded-full ml-[450px] mb-[50px] relative"
        />
        <button
          @click="showIconPicker = true"
          class="absolute bottom-[50px] right-[85px] p-0 border-none bg-transparent"
        >
          <img
            src="/images/Mypage/imgEditBtn.png"
            alt="연필 아이콘"
            class="w-8 h-8"
          />
        </button>
      </div>

      <!-- 아이콘 변경 모달-->
      <div
        v-if="showIconPicker"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap justify-center bg-white p-6 rounded-lg shadow-lg"
      >
        <div
          v-for="(icon, index) in icons"
          :key="index"
          class="cursor-pointer p-3"
          @click="selectIcon(icon)"
        >
          <img :src="icon" class="w-16 h-16 rounded-full" />
        </div>
        <button
          @click="showIconPicker = false"
          class="absolute top-2 right-2 bg-gray-200 p-2 rounded-full"
        >
          ✕
        </button>
      </div>

      <!-- 정보 수정 폼 -->
      <div class="w-4/5 flex flex-col items-center mb-[100px] ml-[250px]">
        <form @submit.prevent="editForm" class="w-2/3">
          <div class="flex flex-col">
            <label for="name" class="block text-font-color mb-1">이름</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="이름을 입력해주세요"
              class="text-font-color pl-4 h-[50px] w-[500px] rounded-md border border-kb-gray-1 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 transition duration-200 mb-6"
              readonly
            />
          </div>
          <div class="flex flex-col">
            <label for="birthday" class="block text-font-color mb-1"
              >생년월일</label
            >
            <input
              type="text"
              id="birthday"
              v-model="birthday"
              placeholder="YYYY.MM.DD 형식으로 입력해주세요"
              class="text-font-color pl-4 h-[50px] w-[500px] rounded-md border border-kb-gray-1 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 transition duration-200 mb-6"
              readonly
            />
          </div>
          <div class="flex flex-col">
            <label for="email" class="block text-font-color mb-1">이메일</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="이메일을 입력해주세요"
              class="text-font-color pl-4 h-[50px] w-[500px] rounded-md border border-kb-gray-1 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 transition duration-200 mb-6"
            />
          </div>
          <div class="flex flex-col">
            <label for="tel" class="block text-font-color mb-1">전화번호</label>
            <input
              type="tel"
              id="tel"
              v-model="tel"
              placeholder="010-1234-1234"
              class="text-font-color pl-4 h-[50px] w-[500px] rounded-md border border-kb-gray-1 focus:outline-none focus:ring-1 focus:ring-kb-brown-2 transition duration-200"
            />
          </div>
          <div class="flex mt-8 ml-[80px]">
            <button
              type="button"
              @click="$router.push('/mypage')"
              class="h-[50px] w-[150px] rounded-md bg-white text-kb-brown-2 border border-kb-brown-2 mr-4 hover:bg-gray-100 transition duration-200"
            >
              취소
            </button>
            <button
              type="submit"
              :class="[
                isFormValid
                  ? 'bg-kb-brown-2 hover:bg-kb-yellow-1'
                  : 'bg-kb-gray-2',
              ]"
              :disabled="!isFormValid"
              class="h-[50px] w-[150px] rounded-md text-white transition duration-200"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import SideBar from "./SideBar.vue";

const name = ref("김가나");
const birthday = ref("1999.01.01");
const email = ref("abc@gmail.com");
const tel = ref("010-1234-1234");
const router = useRouter();

const isFormValid = computed(() => {
  return name.value && birthday.value && email.value && tel.value;
});

const editForm = () => {
  if (isFormValid.value) {
    console.log("폼 제출:", {
      name: name.value,
      birthday: birthday.value,
      email: email.value,
      tel: tel.value,
    });
    router.push("/mypage");
  }
};

// 아이콘 선택 관련 로직
const showIconPicker = ref(false);
const selectedIcon = ref("/images/Mypage/user1.png");
const icons = [
  "/images/Mypage/user.png",
  "/images/Mypage/user1.png",
  "/images/Mypage/user2.png",
  "/images/Mypage/user3.png",
];

const selectIcon = (icon) => {
  selectedIcon.value = icon;
  showIconPicker.value = false;
};
</script>
