<template>
  <div
    class="relative bg-white rounded-2xl shadow-md w-[280px] h-[380px] p-5 overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 right-0 h-1/3 bg-[#FFF7CD] flex flex-col justify-center"
    >
      <h2 class="text-lg text-center font-bold text-font-color">{{ name }}</h2>
    </div>

    <div class="absolute left-1/2 transform -translate-x-1/2 top-[calc(33.33%-1.25rem)] z-20 bg-[#F9E26F] text-font-color px-3 py-1 rounded-full">
      {{ solution }}
    </div>

    <div class="absolute bottom-3 left-5 right-5">
      <div class="text-sm mb-4">
        <span class="text-kb-gray-1 block mb-1">가입일</span>
        <span class="block text-font-color mb-6">{{ date }}</span>
      </div>
      <div class="text-sm">
        <span class="text-kb-gray-1 block mb-1">월납입금액</span>
        <span class="block text-font-color mb-6">{{ amount.toLocaleString() }}원</span>
      </div>
      <div class="text-sm">
        <span class="text-kb-gray-1 block mb-1">권장 방안</span>
        <span class="block text-font-color mb-6">{{ recommend }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  solution: String,
  date: String,
  amount: Number,
  recommend: String,
});
</script>
