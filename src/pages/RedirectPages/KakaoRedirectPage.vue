<template>
  <div class="h-[70px] bg-kb-brown-1"></div>
  <div>카카오 로그인중...</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { kakaoLoginRequestTokenHandler } from "../../apis/api/kakao";
import { onMounted } from "vue";

const route = useRoute();

onMounted(() => {
  const kakaoLogin = async () => {
    const result = await kakaoLoginRequestTokenHandler(route.query.code);
    // console.log(result);
  };
  kakaoLogin();
});
</script>
