<template>
  <div class="flex flex-col h-screen">
    <!-- 상단 고정 부분 -->
    <SurveyTop 
      :progress="progress"
      :currentQuestion="currentQuestion"
      :currentStep="currentStep"
      :totalQuestion="totalQuestion"
      />

    <!-- 하단 선택지 부분 (나머지 50% 높이, 스크롤 가능) -->
    <div
      ref="optionsContainer"
      class="bg-white h-[53%] overflow-y-auto scrollbar-hide"
      @scroll="handleScroll"
    >
      <div v-if="currentQuestion" class="h-full flex items-center justify-center">
        <OptionButton
          :dataOptions="currentQuestion.options"
          :currentQuestionIndex="currentQuestionIndex"
          :questionIndex="currentQuestion.id"
          :selectedOption="answers[currentQuestion.id]"
          @select-option="selectOption"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick} from "vue";
import { useRouter, useRoute } from "vue-router";
import SurveyTop from "../components/Survey/SurveyTop.vue";
import OptionButton from "../components/Survey/OptionButton.vue";

import { insuranceSurvey, cardSurvey, loanSurvey, savingSurvey } from "../constant/surveyData";

const router = useRouter();
const route = useRoute();
const currentQuestionIndex = ref(0);
const optionsContainer = ref(null);
const answers = ref({});

const totalQuestion = computed(() => {
  const category = route.query.category;

  switch (category) {
    case '카드': return 4;
    case '예/적금': return 5;
    case '대출': return 3;
    case '보험': return 4;
  }
})

const surveyData = computed(() => {
  const category = route.query.category;

  switch (category) {
    case '카드': return cardSurvey;
    case '예/적금': return savingSurvey;
    case '대출': return loanSurvey;
    case '보험': return insuranceSurvey;
  }
});

const currentQuestion = computed(() => 
  surveyData.value.find(q => q.id === currentQuestionIndex.value) || {}
);

const currentStep = computed(() => {
  return surveyData.value.findIndex(q => q.id === currentQuestionIndex.value) + 1;
});

const progress = computed(() => (currentStep.value / totalQuestion.value) * 100);

const selectOption = (index, option) => {
  answers.value[index] = option;
  const question = surveyData.value.find(q => q.id === index);

  if (question) {
    const nextQuestionId = typeof question.nextQuestion === 'function'
      ? question.nextQuestion(option)
      : question.nextQuestion;
    
    if (nextQuestionId !== null) {
      currentQuestionIndex.value = nextQuestionId;
      nextTick(() => {
        scrollToQuestion(nextQuestionId);
      });
    } else {
      console.log('Survey completed', answers.value);
      router.push('/asset-detail');
    }
  }
};

const scrollToQuestion = (index) => {
  if (optionsContainer.value) {
    const targetScroll = index * optionsContainer.value.clientHeight;
    optionsContainer.value.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  }
};

const handleScroll = () => {
  if (optionsContainer.value) {
    const scrollPosition = optionsContainer.value.scrollTop;
    const questionHeight = optionsContainer.value.clientHeight;
    const newIndex = Math.round(scrollPosition / questionHeight);
    if (newIndex < surveyData.value.length) {
      currentQuestionIndex.value = newIndex;
    }
  }
}

onMounted(() => {
  if (optionsContainer.value) {
    optionsContainer.value.style.scrollSnapType = 'y mandatory';
    const questionDivs = optionsContainer.value.children;
    for (let div of questionDivs) {
      div.style.scrollSnapAlign = 'start';
    }
  }
});
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

</style>
