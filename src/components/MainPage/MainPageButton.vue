<template>
  <button
    @click="$emit('click')"
    v-if="left"
    class="rounded-[15px] text-white border border-white p-4 hover:bg-white hover:text-kb-brown-2"
  >
    {{ text }}
  </button>

  <button
    v-else
    class="rounded-[15px] bg-white text-kb-brown-2 shadow-md px-4 py-3 hover:bg-kb-brown-2 hover:text-white duration-300"
  >
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  left: {
    type: Boolean,
    required: true,
  },
});
</script>
