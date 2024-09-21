<template>
  <div class="container">
    <div class="flex flex-col items-center justify-center h-screen bg-kb-dark-gray">
      <div class="md:max-2xl:text-[54px] text-[80px] font-black border border-x-[20px] border-t-[20px] px-[72px] border-white border-b-0">
        <span class="text-white">{{ text }}</span>
        <span class="text-primary-color">{{ dot }}</span>
      </div>
      <p class="md:max-2xl:text-[28px] text-[40px] text-white mt-6">Next Generation FinTech</p>
    </div>

    <div class="h-screen bg-white"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const initialText = "F:YL"; // 초기 텍스트
const finalText = "F:ND YOUR LIFE"; // 최종 목표 텍스트
const dot = ref(" .");
const text = ref(initialText); // 현재 표시되는 텍스트

// 텍스트를 반복해서 애니메이션하는 함수
function animateText() {
  let removing = true; // 텍스트 지우기와 추가를 관리할 플래그
  let trigger = true;

  // 애니메이션 반복 함수
  const animationInterval = setInterval(() => {
    if (removing) {
      dot.value = "";
      // 텍스트 지우기 단계
      if (text.value.length > 2) {
        text.value = text.value.slice(0, -1); // 한 글자씩 지우기
      } else {
        removing = false; // 지우기 끝나면 추가 단계로 전환
      }
    } else {
      // 텍스트 추가 단계
      const targetText = trigger ? finalText : initialText;
      const nextChar = targetText[text.value.length]; // 다음에 추가할 글자

      if (nextChar !== undefined) {
        text.value += nextChar; // 한 글자씩 추가
      } else {
        dot.value = " .";
        // 모든 글자를 추가한 후 1초 대기 후 지우기 시작
        setTimeout(() => {
          removing = true; // 지우기 단계로 전환
          trigger = !trigger; // 텍스트 전환
        }, 1000);
      }
    }
  }, 100); // 0.1초마다 실행
}

// 초기 애니메이션 시작
setTimeout(animateText, 1000);
</script>
