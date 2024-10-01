<template>
  <div class="flex flex-col h-screen">
    <!-- 상단 고정 부분 -->
    <SurveyTop :progress="progress" :currentQuestion="currentQuestion" />

    <!-- 하단 선택지 부분 (나머지 50% 높이, 스크롤 가능) -->
    <div
      ref="optionsContainer"
      class="bg-white h-[53%] overflow-y-auto scrollbar-hide"
      @scroll="handleScroll"
    >
      <div v-for="(data, index) in surveyData" :key="data.id" class="h-full flex items-center justify-center">
        <OptionButton
          :dataOptions="data.options"
          :currentQuestionIndex="currentQuestionIndex"
          :questionIndex="index"
          @select-option="selectOption"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import SurveyTop from "../components/Survey/SurveyTop.vue";
import OptionButton from "../components/Survey/OptionButton.vue";

import surveyData from '../constant/surveyData.js'

const router = useRouter();
const currentQuestionIndex = ref(0);
const optionsContainer = ref(null);
const answers = ref([]);

const currentQuestion = computed(() => surveyData[currentQuestionIndex.value]);
const progress = computed(
  () => ((currentQuestionIndex.value + 1) / surveyData.length) * 100
);

const selectOption = (index, option) => {
  answers.value[index] = option;
  if (index < surveyData.length - 1) {
    nextTick(() => {
      scrollToQuestion(index + 1);
    });
  } else {
    console.log("Survey completed", answers.value);
    router.push('/products/survey/loading');
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
    if (newIndex <= surveyData.length - 1) {
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
