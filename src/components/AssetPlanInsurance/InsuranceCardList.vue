<template>
    <div class="flex justify-cente space-x-10">
      <InsuranceCard
        v-for="insurance in insuranceData"
        :key="insurance.id"
        :name="insurance.name"
        :solution="insurance.solution"
        :date="insurance.date"
        :amount="insurance.amount"
        :recommend="insurance.recommend"
      />
    </div>
  </template>
  
  <script setup>
  import InsuranceCard from './InsuranceCardList/InsuranceCard.vue'
  import insuranceData from '../../constant/insuranceData';
  
  const props = defineProps({
    insuranceData: {
      type: Array,
      required: true,
    }
  })
  </script>