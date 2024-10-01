<template>
  <div class="survey-container flex flex-col h-screen">
    <!-- 상단 고정 부분 (항상 50% 높이) -->
    <SurveyTop :progress="progress" :currentQuestion="currentQuestion" />

    <!-- 하단 선택지 부분 (나머지 50% 높이) -->
    <div
      ref="answerContainer"
      class="bg-white h-1/2 flex flex-col items-center px-4 py-8 overflow-y-auto"
    >
      <div v-for="(question, index) in questions" :key="index" class="w-full mb-8">
        <AnswerButton
          :question="question"
          @select-option="selectOption"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import SurveyTop from "../components/Survey/SurveyTop.vue";
import AnswerButton from "../components/Survey/AnswerButton.vue";

const route = useRoute();
const category = computed(() => route.query.category || 1);

const currentQuestionIndex = ref(0);
const answerContainer = ref(null);

const questions = [
  {
    text: "본인의 나이를 선택해주세요.",
    options: ["10대", "20대", "30대", "40대", "50대", "60대 이상"],
  },
  {
    text: "원하는 카드의 유형을 선택해주세요.",
    options: ["신용카드", "체크카드"],
  },
  {
    text: "희망하는 연회비를 선택해주세요.",
    options: [
      "없음",
      "1만원 이하",
      "1만원 ~ 3만원",
      "3만원 ~ 10만원",
      "10만원 이상",
    ],
  },
  {
    text: "원하는 형태의 혜택을 선택해주세요.",
    options: ["할인형", "적립형", "마일리지형"],
  },
  {
    text: "주로 소비하는 유형을 선택해주세요.",
    options: [
      "여행",
      "쇼핑",
      "렌탈",
      "주유/충전",
      "의료",
      "통신",
      "교육",
      "공공/정부지원",
    ],
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

const scrollToNextQuestion = () => {
  if (answerContainer.value) {
    const nextQuestionElement =
      answerContainer.value.children[currentQuestionIndex.value];
    if (nextQuestionElement) {
      nextQuestionElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};

watch(currentQuestionIndex, () => {
  scrollToNextQuestion();
});
</script>

<style scoped>
.survey-container {
  height: calc(100vh - 60px); /* 헤더의 높이를 60px로 가정 */
}
</style>
