<template>
    <Header />
  <AnalyzeLoading v-if="false" />
  <RecommendLoading v-if="false" />
  <router-view></router-view>
</template>

<script setup>
import Header from "./components/Header.vue";

import RecommendLoading from "./components/Loading/RecommendLoading.vue";
import AnalyzeLoading from "./components/Loading/AnalyzeLoading.vue";

import { useHeaderStore } from "./stores/headerStore";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const headerStore = useHeaderStore();
const router = useRouter();

onMounted(() => {
  router.beforeEach((to, from, next) => {
    headerStore.resetState();
    next();
  });
});
</script>

<style scoped></style>
