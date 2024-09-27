<template>
  <div class="h-[70px]"></div>

<ProductsAllView v-for="(item, index) in data" :key="index" :item="item" />

</template>
<script setup>
import ProductsAllView from '../components/Products/ProductsAllView.vue';

const data = [{title: "신용카드"},{title: "체크카드"},{title: "예/적금"}]
</script>
