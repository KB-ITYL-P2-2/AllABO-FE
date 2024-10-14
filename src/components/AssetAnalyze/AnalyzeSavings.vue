<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-semibold text-center text-font-color underline underline-offset-8 mb-12">
      저축 분석 결과
    </h1>
    
    <div class="relative mx-auto max-w-4xl">
      <!-- Background circle -->
      <div class="absolute inset-0 bg-kb-yellow-4 opacity-50 rounded-full h-[600px] w-[600px] mx-auto shadow-lg"></div>

      <!-- Total Savings Comparison -->
      <div class="relative z-10 flex flex-col items-start w-full mt-16 mb-12">
        <SavingsGraph :userSavings="totalUserSavings" :averageSavings="totalAverageSavings" />
        <div class="space-y-2 ml-12">
          <p class="text-xl text-kb-brown-6">{{ age }}대 평균 저축액보다</p>
          <p class="font-bold text-4xl text-font-color">
            약 {{ Math.abs(parseFloat(compareSavings1)).toFixed(1) }}배 더 
            {{ parseFloat(compareSavings1) >= 0 ? '높습니다' : '낮습니다' }}
          </p>
          <p class="text-kb-blue-5 font-semibold text-2xl">{{ totalSavingsKeywords.join(', ') }}</p>
        </div>
      </div>

      <!-- Savings to Asset Ratio Comparison -->
      <div class="relative z-10 flex flex-col items-start w-full">
        <SavingsGraph class="rotate-180 ml-52" :userSavings="assetUserSavings" :averageSavings="assetAverageSavings" />
        <div class="space-y-2 ml-12">
          <p class="text-xl text-kb-brown-6">{{ age }}대 평균 자산 대비 저축 비율보다</p>
          <p class="font-bold text-4xl text-font-color">
            약 {{ Math.abs(parseFloat(compareSavings2)).toFixed(1) }}배 더 
            {{ parseFloat(compareSavings2) >= 0 ? '높습니다' : '낮습니다' }}
          </p>
          <p class="text-kb-blue-5 font-semibold text-2xl">{{ savingsRatioKeywords.join(', ') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
import SavingsGraph from './graph/SavingsGraph.vue';

//비교군
const age = ref(20);

//평균 저축액 비교
const totalUserSavings = ref(0);
const totalAverageSavings = ref(0);

//평균 자산 대비 저축 비율
const assetUserSavings = ref(0);
const assetAverageSavings = ref(0);

const compareSavings1 = ref('0');
const compareSavings2 = ref('0');
const totalSavingsKeywords = ref([]);
const savingsRatioKeywords = ref([]);

// Fetch data from backend
const fetchSavingsAnalysisData = async () => {
  const authStore = useAuthStore();
  const token = authStore.token;
  if (!token) {
    console.error("토큰이 없습니다. 로그인 후 다시 시도하세요.");
    return;
  }

  try {
    const response = await axios.post(
      `http://localhost:8080/assets/saving-ratio`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data.jsonNode;
    
    // Update state with fetched data
    age.value = parseInt(data.비교균);
    
    // Total Savings Analysis
    totalUserSavings.value = parseInt(data['총 저축 금액 분석']['내 자산'].replace('원', ''));
    totalAverageSavings.value = parseInt(data['총 저축 금액 분석']['비교군 자산'].replace('원', ''));
    compareSavings1.value = data['총 저축 금액 분석']['비교군과 비교%'].replace('%', '');
    totalSavingsKeywords.value = data['총 저축 금액 분석']['요약'];

    // Savings to Asset Ratio Analysis
    assetUserSavings.value = parseFloat(data['자산 대비 저축 비율 분석']['자산 대비 저축 비율'].replace('%', ''));
    assetAverageSavings.value = parseFloat(data['자산 대비 저축 비율 분석']['비교균 저축 비율'].replace('%', ''));
    compareSavings2.value = data['자산 대비 저축 비율 분석']['차이'].replace('%', '');
    savingsRatioKeywords.value = data['자산 대비 저축 비율 분석']['요약'];

  } catch (error) {
    console.error("데이터 가져오기 오류", error);
  }
};

onMounted(fetchSavingsAnalysisData);
</script>