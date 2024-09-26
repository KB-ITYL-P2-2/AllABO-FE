<template>
    <div class="h-[70px]"></div>
    <div class="flex justify-center mt-[90px]">
        <div class="text-3xl font-bold text-font-color">회원가입</div>
      </div>
      <div class="flex justify-center mt-[25px]">
          <img  alt="circle" src = "../../assets/images/full_circle.png"  class="mx-9 w-5 h-5"/>
          <img alt="circle" src = "../../assets/images/empty_circle.png"  class="mx-9 w-5 h-5"/>
          <img alt="circle" src = "../../assets/images/empty_circle.png"  class="mx-9 w-5 h-5"/>
      </div>
      <div class="flex justify-center mt-[25px]">
         <p class="mx-4 text-[15px]">약관동의</p>
         <p class="mx-4 text-[15px]">정보입력</p>
         <p class="mx-4 text-[15px]">회원가입</p>
      </div>
    <div class="mt-[90px] mb-3 flex justify-start mx-auto w-[760px]">
        <p class="text-kb-yellow-2 text-lg font-bold ">[필수] </p> 
        <p class="text-font-color text-lg font-bold"> 개인정보 수집 및 이용 동의 </p>
    </div>
    <div>
        <div class="flex justify-center mx-auto w-[760px] h-[380px] rounded-[15px] border-2">
            <p class="p-2">
                <br><br>
                (주)000 는 아래의 목적으로 개인정보를 수집 및 이용하며, 회원의 개인정보를 안전하게 취급하는데
                최선을 다합니다. <br><br>  
                <b>개인정보 수집 및 이용에 대한 안내</b><br><br>          
                1. 목적 : 금융거래 인증, 금융제공 -> 여기는 내용 조금 더 추가를 해볼 수 있ㄷ면....해야함<br>
                2. 항목 : 아이디, 비밀번호, 이름,주민번호, 휴대폰번호3. 보유기간 : 회원 탈퇴 시까지 보유 (개인 신상정보를 삭제한 지원이력 정보는 일방향 암호화하여 보관됩니다.)<br><br>
                
                위 개인정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 지원자 등록이 제한될 수 있습니다.더 자세한 내용에 대해서는 ㅇㅇㅇ의  개인정보처리방침을 참고하시길 바랍니다.
                        </p>
        </div>
        <div class="flex justify-center mt-[60px]">
            <button @click="$router.push('/login')" class="w-[213px] h-[50px] text-lg rounded-[15px] mr-10 bg-white text-font-color border border-kb-brown-2">취소</button>
            <button @click="$router.push('/signup')" type="button"
                    class="w-[213px] h-[50px] text-lg rounded-[15px] bg-kb-brown-2 text-white">동의하기</button>
        </div>

    </div>
</template>

<script setup>
</script>
