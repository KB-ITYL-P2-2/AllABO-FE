<template>
  <div class="survey-container flex flex-col h-screen">
    <!-- 상단 고정 부분 (항상 50% 높이) -->
    <div
      class="bg-[#5F584E] h-1/2 flex flex-col items-center justify-center px-4 py-8 relative"
    >
      <!-- 프로그레스 바 -->
      <div
        class="progress-bar-container absolute w-full max-w-[528px] left-1/2 transform -translate-x-1/2"
        style="top: 50%"
      >
        <div class="progress-bar bg-gray-300 h-2 rounded-full overflow-hidden">
          <div
            class="bg-yellow-400 h-full"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>

      <!-- 질문 텍스트 -->
      <h2
        class="text-white text-3xl font-bold text-center absolute w-full max-w-[528px]"
        style="top: 66.7%;"
      >
        {{ currentQuestion.text }}
      </h2>

      <!-- 구분선 -->
      <div
        class="w-full max-w-[760px] h-px bg-white opacity-50 absolute left-1/2 transform -translate-x-1/2"
        style="bottom: 16.6%"
      ></div>
    </div>

    <!-- 하단 선택지 부분 (나머지 50% 높이) -->
    <div
      class="bg-white h-1/2 flex items-center justify-center px-4 py-8 overflow-y-auto"
    >
      <div class="w-full max-w-md space-y-4">
        <button
          v-for="option in currentQuestion.options"
          :key="option"
          @click="selectOption(option)"
          class="w-full py-3 px-6 bg-gray-200 text-font-color hover:bg-kb-yellow-2 rounded-[15px] transition duration-300"
        >
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const category = computed(() => route.query.category || 1);

const currentQuestionIndex = ref(0);
const questions = [
  {
    text: "어떤 카드를 찾으시나요?",
    options: ["신용카드", "체크카드"],
  },
  {
    text: "주로 어디서 카드를 사용하시나요?",
    options: ["국내", "해외", "온라인 쇼핑"],
  },
  {
    text: "어떤 혜택을 원하시나요?",
    options: ["적립", "할인", "캐시백", "마일리지"],
  },
  {
    text: "연회비는 얼마가 적당하신가요?",
    options: ["없음", "1만원 이하", "1만원~3만원", "3만원 이상"],
  },
  // 추가 질문을 여기에 넣을 수 있습니다.
];

const currentQuestion = computed(() => questions[currentQuestionIndex.value]);

const progress = computed(
  () => ((currentQuestionIndex.value + 1) / questions.length) * 100
);

const selectOption = (option) => {
  console.log(`Selected option: ${option}`);

  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    console.log("Survey completed");
    // 여기에 결과 페이지로 이동하는 로직을 추가할 수 있습니다.
  }
};
</script>

<style scoped>
.survey-container {
  height: calc(100vh - 60px); /* 헤더의 높이를 60px로 가정 */
}

.progress-bar-container {
  width: 100%;
  max-width: 528px;
  margin-left: auto;
  margin-right: auto;
}

.progress-bar {
  border-radius: 40px;
}
</style>
