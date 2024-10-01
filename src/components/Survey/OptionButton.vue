<template>
  <div class="w-full max-w-md space-y-4">
    <button
      v-for="option in dataOptions"
      :key="option"
      @click="selectOption(option)"
      class="w-full py-3 px-6 bg-gray-200 text-font-color hover:bg-kb-yellow-2 rounded-[15px] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup>
  const props = defineProps({
    dataOptions: Array,
    currentQuestionIndex: Number,
    questionIndex: Number,
  })

  const emit = defineEmits(['select-option']);

  const selectOption = (option) => {
    emit('select-option', props.questionIndex, option);
  };
</script>

<style scope></style>
