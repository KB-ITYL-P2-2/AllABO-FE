<script setup>
import Header from './components/Header.vue';
import { storeToRefs } from 'pinia';
import { useHeaderStore } from './stores/headerStore';

const headerStore = useHeaderStore()
const { isForceScrolled } = storeToRefs(headerStore)
</script>

<template>
<Header :forceScrolled = "isForceScrolled" />
<router-view></router-view>
</template>

<style scoped>
</style>
