<template>
  <div class="h-[calc(100vh-70px)]">
    <div class="h-[70px] bg-kb-brown-1"></div>

    <!-- 제목 섹션 -->
    <div class="flex justify-center h-[14%] my-10">
      <h1 class="text-[32px]">1년 후 예상 자산</h1>
    </div>

    <!-- 차트와 텍스트 섹션 -->
    <div class="px-[18%] h-full w-full">
      <!-- 시뮬레이션 데이터 텍스트 -->
      <div class="flex flex-wrap justify-between gap-8">
        <template v-for="(item, index) in simulationData" :key="index">
          <!-- 텍스트 정보 -->
          <div class="flex flex-col items-center w-[45%] justify-center mb-6">
            <!-- 차트 렌더링 -->
            <div class="w-[100%] h-full p-4 mb-4" :style="{ backgroundColor: item.bgColor }">
              <Line :data="getChartData(item.title)" :options="chartOptions" />
            </div>

            <div class="flex items-center w-full gap-8">
              <div class="rounded-full border-2 inline-flex flex-col w-[130px] h-[130px] items-center justify-center" :style="{ borderColor: item.hexColor }">
                <span>{{ item.title }}</span>
                <img
                  :src="`/images/AssetPlanSimulation/${item.title.includes('자산') ? `asset-${item.color}` : `dept-${item.color}`}.png`"
                  alt=""
                  class="w-[50px] h-[50px] object-contain"
                />
              </div>

              <div class="flex flex-col">
                <span>현재 전략: {{ item.data.now }}</span>
                <span>개선된 전략: {{ item.data.future }}</span>
                <div class="h-[1px] bg-black"></div>
                <span class="text-[20px] font-semibold">{{ item.data.amount }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script setup>
import { Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

// ChartJS 플러그인 등록
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

// 시뮬레이션 데이터
const simulationData = [
  { title: "총 자산", data: { now: "4.07% 상승", future: "6.17% 상승", amount: "2222만원 더 상승" }, color: "yellow", hexColor: "#F4BF42", bgColor: "#FFFBE7" },
  { title: "총 부채", data: { now: "4.07% 감소", future: "6.17% 감소", amount: "2222만원 더 감소" }, color: "pink", hexColor: "#FFAAAA", bgColor: "#FFF6FA" },
  { title: "순 자산", data: { now: "4.07% 증가", future: "6.17% 증가", amount: "2222만원 더 증가" }, color: "blue", hexColor: "#8AC6FF", bgColor: "#EEFCFF" },
  {
    title: "총 투자금액",
    data: { now: "4.07% 상승", future: "6.17% 상승", amount: "2222만원 더 상승" },
    color: "green",
    hexColor: "#B1EF5A",
    bgColor: "#F0FFEE",
  },
];

// 차트 데이터
const chartData = {
  현재_전략: {
    labels: ["현재", "3개월 후", "6개월 후", "9개월 후", "1년 후"],
    datasets: [
      {
        label: "총 자산 (현재 전략)",
        data: [12281439.0, 12404663.23, 12529123.81, 12654833.15, 12781803.77],
        borderColor: "#FAE6A2",
        backgroundColor: "#FAE6A2",
      },
      {
        label: "총 부채 (현재 전략)",
        data: [20000000.0, 19751040.22, 19505179.49, 19262379.23, 19022601.34],
        borderColor: "#FFAAAA",
        backgroundColor: "#FFAAAA",
      },
      {
        label: "순 자산 (현재 전략)",
        data: [-7718561.0, -7346376.99, -6976055.68, -6607546.08, -6240797.57],
        borderColor: "#8AC6FF",
        backgroundColor: "#8AC6FF",
      },
      {
        label: "총 투자금액 (현재 전략)",
        data: [20000000.0, 20200667.41, 20403348.19, 20608062.53, 20814830.86],
        borderColor: "#B1EF5A",
        backgroundColor: "#B1EF5A",
      },
    ],
  },
  개선된_전략: {
    labels: ["현재", "3개월 후", "6개월 후", "9개월 후", "1년 후"],
    datasets: [
      {
        label: "총 자산 (개선된 전략)",
        data: [12281439.0, 12466583.23, 12654518.53, 12845286.98, 13038931.28],
        borderColor: "#FAE6A2",
        backgroundColor: "#FAE6A2",
      },
      {
        label: "총 부채 (개선된 전략)",
        data: [20000000.0, 19504155.09, 19020603.29, 18549039.83, 18089167.48],
        borderColor: "#F8D8D8",
        backgroundColor: "#F8D8D8",
      },
      {
        label: "순 자산 (개선된 전략)",
        data: [-7718561.0, -7037571.86, -6366084.77, -5703752.85, -5050236.2],
        borderColor: "#CBE6FF",
        backgroundColor: "#CBE6FF",
      },
      {
        label: "총 투자금액 (개선된 전략)",
        data: [20000000.0, 20301502.5, 20607550.19, 20918211.58, 21233556.24],
        borderColor: "#D3EFAC",
        backgroundColor: "#D3EFAC",
      },
    ],
  },
};

// 차트 옵션
const chartOptions = {
  // responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        // y축 눈금을 5개로 고정
        maxTicksLimit: 5,
        // 만 단위로 포맷팅
        callback: function (value) {
          return (value / 10000).toLocaleString() + "만";
        },
      },
    },
  },
};

// 각 항목에 맞는 차트 데이터 반환
const getChartData = title => {
  if (title === "총 자산") {
    return {
      labels: chartData.현재_전략.labels,
      datasets: [chartData.현재_전략.datasets[0], chartData.개선된_전략.datasets[0]],
    };
  } else if (title === "총 부채") {
    return {
      labels: chartData.현재_전략.labels,
      datasets: [chartData.현재_전략.datasets[1], chartData.개선된_전략.datasets[1]],
    };
  } else if (title === "순 자산") {
    return {
      labels: chartData.현재_전략.labels,
      datasets: [chartData.현재_전략.datasets[2], chartData.개선된_전략.datasets[2]],
    };
  } else if (title === "총 투자금액") {
    return {
      labels: chartData.현재_전략.labels,
      datasets: [chartData.현재_전략.datasets[3], chartData.개선된_전략.datasets[3]],
    };
  }
};
</script>

<style scoped>
.flex-2 {
  flex: 4 1 0;
}
</style>
