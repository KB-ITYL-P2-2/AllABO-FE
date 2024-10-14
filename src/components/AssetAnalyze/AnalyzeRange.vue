<template>
  <div>
    <p
      class="flex justify-center text-[32px] text-font-color font-semibold underline underline-offset-8"
    >
      분위별 분석 결과
    </p>
  </div>
  <div class="flex justify-center mt-20 px-10 mx-auto space-x-60">
    <!-- 왼쪽 원형 영역 -->
    <div
      class="relative flex flex-col justify-center items-center"
      ref="yellowCircle"
    >
      <div class="relative">
        <!-- 큰 노란 원 -->
        <div
          class="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-kb-yellow-4 to-kb-yellow-10 shadow-lg h-[550px] w-[550px] text-center px-8"
          :class="{ 'grow-animation': isVisible }"
        >
          <div class="flex flex-col space-y-4 p-6 items-center">
            <div
              v-for="(tag, index) in hashtags"
              :key="index"
              class="text-font-color p-4 rounded-lg transition-all duration-300 hover:bg-kb-yellow-10"
            >
              <p class="font-semibold text-kb-brown-1 text-[24px]">{{ tag }}</p>
            </div>
          </div>
        </div>

        <!-- 주황색 원  -->
        <div
          class="absolute top-[-30px] right-[50px] transform translate-x-10 translate-y-10 rounded-full bg-gradient-to-b from-kb-yellow-9 to-kb-yellow-10 shadow-md h-[150px] w-[150px] flex items-center justify-center"
        >
          <p class="font-semibold text-center text-[40px]">{{ incomeRange }}</p>
        </div>
      </div>
      <!-- 소득 및 지출 비율 차이 작은 원 -->
      <div
        class="absolute top-[130px] right-[-80px] rounded-full bg-gradient-to-b from-kb-pink-8 to-kb-pink-5 shadow-md h-[180px] w-[180px] flex items-center justify-center"
      >
        <p class="text-[32px] font-semibold text-center">
          {{ userSpendingRatio }}%
          {{ spendingManagementNeeded ? "초과" : "미만" }}
        </p>
      </div>
    </div>

    <!-- 텍스트 영역 -->
    <div class="relative mt-16">
      <div
        class="bg-white shadow-md rounded-lg transition-all duration-500 ease-in-out overflow-hidden grow-animation-hash"
        :class="
          isVisible
            ? 'w-[500px] h-[500px] opacity-100'
            : 'w-[0px] h-[0px] opacity-0'
        "
      >
        <div
          v-if="isVisible"
          class="flex flex-col space-y-4 p-6 items-start ml-10"
        >
          <p class="mt-8 text-[20px]">
            사용자 월 소득 :
            <span class="text-kb-brown-1 text-[28px] font-semibold"
              >{{ formatNumber(userIncome) }} 원</span
            >
          </p>
          <p class="text-[20px]">
            소속 분위 평균 소득 :
            <span class="text-kb-brown-1 text-[28px] font-semibold"
              >{{ formatNumber(avgIncomeInGroup) }} 원</span
            >
          </p>
          <p class="mt-4 text-[20px]">
            {{
              spendingManagementNeeded
                ? "지출 관리가 필요합니다."
                : "지출 관리가 양호합니다."
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useAuthStore } from "../../stores/auth";

// 개별 ref 선언
const userIncome = ref("");
const userSpendingRatio = ref("");
const avgIncomeInGroup = ref("");
const incomeRange = ref("");
const hashtags = ref([]);
const spendingManagementNeeded = ref(false);

const isVisible = ref(false);
const yellowCircle = ref(null);

// 숫자 정리
const formatNumber = (value) => {
  if (typeof value === "number") {
    return Math.floor(value).toLocaleString(); // 소수점 이하 버리고 세 자리마다 콤마 추가
  }
  return value;
};

const fetchIncomeData = async () => {
  const authStore = useAuthStore();
  const token = authStore.token;
  if (!token) {
    console.error("토큰이 없습니다. 로그인 후 다시 시도하세요.");
    return;
  }
  try {
    const response = await axios.post(
      `http://localhost:8080/assets/income-level`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data.resultMap;
    userIncome.value = Number(data["사용자 월 소득(원)"]);
    userSpendingRatio.value = data["사용자 월 소득 대비 지출 비율(%제외)"];
    avgIncomeInGroup.value = Number(data["소속 분위 소득(원)"]);
    incomeRange.value = data["소득분위(n분위)"];
    hashtags.value = data["#요약키워드(4개)"];
    spendingManagementNeeded.value = data["지출 관리 필요성(true or false)"];
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
  }
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true; // 원이 보이면 애니메이션 실행
      observer.disconnect(); // 애니메이션이 실행된 후 옵저버 해제
    }
  });
};

let observer;

onMounted(() => {
  fetchIncomeData();
  observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
  });

  if (yellowCircle.value) {
    observer.observe(yellowCircle.value); // yellowCircle 요소를 옵저버에 추가
  }
});
</script>

<style scoped>
@keyframes grow {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.grow-animation {
  animation: grow 1s ease-out forwards;
}

@keyframes grow-hash {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.grow-animation-hash {
  animation: grow-hash 1s ease-out forwards;
}
</style>
