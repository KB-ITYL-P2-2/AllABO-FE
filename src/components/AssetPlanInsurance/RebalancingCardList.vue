<template>
    <div class="flex justify-cente space-x-10">
      <RebalancingCard
        v-for="rebalancing in rebalancingData"
        :key="rebalancing.id"
        :title="rebalancing.title"
        :desc="rebalancing.desc"
      />
    </div>
  </template>
  
  <script setup>
  import RebalancingCard from '../AssetPlanInsurance/RebalancingCardList/RebalancingCard.vue'
  
  const props = defineProps({
    rebalancingData: {
      type: Array,
      required: true,
    }
  })
  </script>