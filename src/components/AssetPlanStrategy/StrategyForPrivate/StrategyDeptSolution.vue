<template>
  <div>
    <span
      class="absolute bg-white rounded-[100px] py-1 px-4 top-[-38px] left-[41%]"
      >{{ title }}</span
    >
    <span
      :class="[
        'py-6 px-8 text-center bg-kb-yellow-9 shadow-md text-[20px]',
        positionClass,
      ]"
      >{{ content }}</span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  positionClass: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.solution-top-left {
  border-radius: 20px 20px 0 20px;
}

.solution-top-right {
  border-radius: 20px 20px 20px 0;
}

.solution-bottom-left {
  border-radius: 20px 0 20px 20px;
}

.solution-bottom-right {
  border-radius: 0 20px 20px 20px;
}
</style>
