<template>
    <div class="mypage">
      <h1>마이 페이지</h1>
      <p><strong>이름:</strong> {{ userData.name }}</p>
      <p><strong>생년월일:</strong> {{ userData.birthday }}</p>
      <p><strong>이메일:</strong> {{ userData.email }}</p>
      <p><strong>전화번호:</strong> {{ userData.tel }}</p>
      <p><strong>연 소득:</strong> {{ userData.asset }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  // 서버로부터 받은 데이터를 route.params에서 가져오기
  const userData = route.params.userData || {};
  </script>
  