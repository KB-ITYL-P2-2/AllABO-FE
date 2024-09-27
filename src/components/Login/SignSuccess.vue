<template>
    <div class="h-[70px]"></div>
  
    <div class="flex justify-center mt-[90px]">
        <div class="text-3xl font-bold text-font-color">회원가입</div>
    </div>
    <div class="flex justify-center mt-[25px]">
      <img alt="circle" src="../../assets/images/empty_circle.png" class="mx-9 w-5 h-5" />
      <img alt="circle" src="../../assets/images/empty_circle.png" class="mx-9 w-5 h-5" />
      <img alt="circle" src="../../assets/images/full_circle.png" class="mx-9 w-5 h-5" />
    </div>
    <div class="flex justify-center mt-[20px]">
        <p class="mx-5 text-[14px] ">약관동의</p>
        <p class="mx-5 text-[14px]">정보입력</p>
        <p class="mx-5 text-[14px] font-semibold">회원가입</p>
     </div>
     <div class="flex flex-col items-center mt-[90px]">
        <div class="flex justify-start">
          <p class="text-[36px] mr-80 mb-[55px]">000님</p>
        </div>
        <p class="text-[36px] text-center">회원가입이 완료되었습니다.</p><br>
        <hr class="w-[454px]">
      </div>
      
        <div class="flex justify-center mt-[180px]">
            <button  @click="$router.push('/login')"
             class="text-white bg-kb-brown-2 rounded-[15px] w-[454px] h-[50px]">로그인 후 서비스 이용하기</button>
        </div>
    </template>
  
  <script setup>
 
  </script>
  