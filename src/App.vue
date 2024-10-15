<template>
  <Header />
  <AnalyzeLoading v-if="analyzeLoading" />
  <RecommendLoading v-if="false" />
  <PlanLoading v-if="false" />
  <router-view></router-view>
</template>

<script setup>
import Header from "./components/Header.vue";

import RecommendLoading from "./components/Loading/RecommendLoading.vue";
import AnalyzeLoading from "./components/Loading/AnalyzeLoading.vue";
import PlanLoading from "./components/Loading/PlanLoading.vue";

import { useHeaderStore } from "./stores/headerStore";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { loadingStateStore } from "./stores/loadingStateStore";
import { ref } from "vue";
import { computed } from "vue";

const headerStore = useHeaderStore();
const loadingStore = loadingStateStore();

const router = useRouter();

const analyzeLoading = computed(() => loadingStore.isAssetAnalyzeLoading);
console.log(analyzeLoading.value);

onMounted(() => {
  router.beforeEach((to, from, next) => {
    headerStore.resetState();
    next();
  });
});
</script>

<style scoped></style>
