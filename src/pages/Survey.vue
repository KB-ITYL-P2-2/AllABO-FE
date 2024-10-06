<template>
  <div class="flex flex-col h-screen">
    <!-- 페이지 상단 -->
    <div
      class="bg-[#5F584E] h-[47%] flex flex-col items-center justify-center px-4 py-8 relative"
    >
      <!-- 프로그레스 바 -->
      <div
        class="absolute w-full max-w-[528px] left-1/2 transform -translate-x-1/2"
        style="top: 50%"
      >
        <div class="absolute top-[-24px] left-0 text-white text-sm">
          {{ currentStep }} / {{ totalStep }}
        </div>
        <div class="progress-bar bg-gray-300 h-2 rounded-full overflow-hidden">
          <div
            class="bg-yellow-400 h-full duration-200 ease-out"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>

      <!-- 질문 텍스트 -->
      <Transition name="fade" mode="out-in">
        <h2
          :key="currentQuestion.id"
          class="text-white text-3xl font-bold text-center absolute w-full max-w-[760px]"
          style="top: 66.7%"
        >
          {{ currentQuestion.text }}
        </h2>
      </Transition>

      <!-- 구분선 -->
      <div
        class="w-full max-w-[760px] h-px bg-white opacity-50 absolute left-1/2 transform -translate-x-1/2"
        style="bottom: 16.6%"
      ></div>
    </div>

    <!-- 페이지 하단 -->
    <div
      class="bg-white h-[53%] overflow-hidden relative flex items-center justify-center"
    >
      <Transition
        :name="isMovingForward ? 'slide-left' : 'slide-right'"
        mode="out-in"
      >
        <div
          :key="currentQuestion.id"
          class="w-full max-w-[448px] flex items-center justify-center"
        >
          <!-- 선택지 -->
          <TransitionGroup
            :name="
              isMovingForward ? 'list-complete-left' : 'list-complete-right'
            "
            tag="div"
            :class="[containerClass, 'w-full']"
          >
            <button
              v-for="option in currentQuestion.options"
              :key="option"
              @click="selectOption(option, currentQuestion)"
              :class="[
                buttonClass,
                'py-3 px-6 bg-gray-200 text-font-color rounded-[15px] transition duration-300 disabled:opacity-50',
                selectedOptions[currentQuestion.id] === option
                  ? 'bg-kb-yellow-2 border-inherit'
                  : 'bg-gray-200 hover:bg-kb-gray-3',
              ]"
            >
              {{ option }}
            </button>
          </TransitionGroup>
        </div>
      </Transition>

      <!-- 이전 버튼 -->
      <button
        v-if="currentStep > 1"
        @click="goToPreviousQuestion"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import gsap from 'gsap';

import {
  insuranceSurvey,
  cardSurvey,
  loanSurvey,
  savingSurvey,
} from '../constant/surveyData';

const route = useRoute();
const router = useRouter();

const currentStep = ref(1);
const questionHistory = ref([]);
const selectedOptions = ref({});
const isMovingForward = ref(true);

const totalStep = computed(() => {
  const category = route.query.category;

  switch (category) {
    case '카드':
      return 4;
    case '예/적금':
      return 5;
    case '대출':
      return 3;
    case '보험':
      return 4;
  }
});

const surveyData = computed(() => {
  const category = route.query.category;

  switch (category) {
    case '카드':
      return cardSurvey;
    case '예/적금':
      return savingSurvey;
    case '대출':
      return loanSurvey;
    case '보험':
      return insuranceSurvey;
  }
});

const currentQuestion = computed(() => {
  return (
    surveyData.value[questionHistory.value[questionHistory.value.length - 1]] ||
    {}
  );
});

const progress = computed(() => (currentStep.value / totalStep.value) * 100);

const isCompactLayout = computed(
  () => currentQuestion.value.options?.length <= 5
);

const containerClass = computed(() => {
  const optionsCount = currentQuestion.value.options?.length || 0;
  return optionsCount > 5
    ? 'grid grid-cols-2 gap-6'
    : 'flex flex-col space-y-6';
});

const buttonClass = computed(() => {
  const optionsCount = currentQuestion.value.options?.length || 0;
  return optionsCount > 5 ? 'w-full' : 'w-full';
});

watch(
  () => route.query.category,
  () => {
    initializeSurvey();
  },
  { immediate: true }
);

function initializeSurvey() {
  currentStep.value = 1;
  questionHistory.value = [0]; // Start with the first question
  selectedOptions.value = {};
}

function selectOption(option, question) {
  selectedOptions.value[question.id] = option;
  currentStep.value++;
  isMovingForward.value = true;

  if (currentStep.value > totalStep.value) {
    router.push('/result'); // 결과 페이지로 이동
    return;
  }

  const nextQuestionId =
    typeof question.nextQuestion === 'function'
      ? question.nextQuestion(option)
      : question.nextQuestion;

  if (nextQuestionId !== null) {
    const nextQuestionIndex = surveyData.value.findIndex(
      (q) => q.id === nextQuestionId
    );
    if (nextQuestionIndex !== -1) {
      questionHistory.value.push(nextQuestionIndex);
    }
  }
}

function goToPreviousQuestion() {
  if (questionHistory.value.length > 1) {
    questionHistory.value.pop(); // Remove the current question
    currentStep.value--;
    isMovingForward.value = false;
  }
}

// Animation hooks (remain the same)
function beforeEnter(el) {
  el.style.opacity = 0;
  el.style.transform = isMovingForward.value
    ? 'translateX(100%)'
    : 'translateX(-100%)';
}

function enter(el, done) {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    onComplete: done,
  });
}

function leave(el, done) {
  gsap.to(el, {
    opacity: 0,
    x: isMovingForward.value ? '-100%' : '100%',
    duration: 0.5,
    onComplete: done,
  });
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.progress-bar {
  border-radius: 40px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.list-complete-left-enter-active,
.list-complete-left-leave-active,
.list-complete-right-enter-active,
.list-complete-right-leave-active {
  transition: all 0.3s ease;
}

.list-complete-left-enter-from,
.list-complete-right-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.list-complete-left-leave-to,
.list-complete-right-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
