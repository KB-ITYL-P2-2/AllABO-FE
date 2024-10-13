<template>
  <div>
    <h1 class="text-[44px]">{{ title }}</h1>

    <div class="flex gap-5 mt-5">
      <span
        class="bg-kb-brown-3 rounded-[100px] p-2 text-center text-white w-[150px]"
        v-for="(product, index) in products"
        :key="index"
        >{{ product }}</span
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
});
</script>
