<template>
  <div>
    <div
      class="rounded-full h-[300px] w-[300px] bg-kb-yellow-3 relative flex justify-center items-center"
    >
      <div class="flex flex-col items-center">
        <span class="text-[24px] mt-3">{{ title }}</span>
        <span class="text-[45px] text-red-500 font-bold">{{ percent }}%</span>
      </div>

      <!-- border circle -->
      <div
        class="absolute w-full h-full translate-x-2 border rounded-full top-[-4px] right-[-4px] border-kb-yellow-2"
      ></div>
      <div
        class="absolute w-full h-full border rounded-full border-kb-yellow-2 top-2 right-2"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  percent: {
    type: Number,
    required: true,
  },
});
</script>
