<template>
  <div
    class="flex h-[300px] relative duration-150 gap-3"
    :class="`bg-[url('${items.cardImageUrl}')]`"
    :style="{
      width: isNow && isHover ? '450px' : '200px',
      transform: isNow && isHover ? 'translateX(-100px)' : 'none',
    }"
  >
    <img :src="`${items.cardImageUrl}`" class="" :class="isCard && ''" alt="" />

    <!-- opacity와 visibility에 조건부 transition 적용 -->
    <div
      class="flex flex-col flex-1 gap-6 text-left"
      :style="{
        opacity: isHover && isNow ? 1 : 0,
        visibility: isHover ? 'visible' : 'hidden', // hidden 대신 visibility 사용
        transition: isHover && isNow ? 'opacity 1000ms' : 'none', // opacity 애니메이션이 끝난 후 visibility 변경
      }"
    >
      <h1 class="font-bold text-kb-brown-1 text-[22px] whitespace-pre-wrap">{{ items.cardName }}</h1>
      <h3 class="text-kb-brown-1 text-[18px] whitespace-pre-wrap">{{ items.cardContent }}</h3>
      <div class="mt-4">
        <button class="text-white bg-kb-brown-1 rounded-[15px] p-4" @click="openPage">자세히 보기</button>
        <button class="p-3 ml-4 bg-white rounded-full">
          <font-awesome-icon :icon="['far', 'heart']" class="text-kb-yellow-3" size="xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  isHover: {
    type: Boolean,
    required: true,
  },
  isNow: {
    type: Boolean,
    required: true,
  },
  isCard: {
    type: Boolean,
    required: true,
  },
});

const openPage = ()=>{
  window.open(props.items.pageUrl);
}
</script>
