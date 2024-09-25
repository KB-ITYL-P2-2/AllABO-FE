<template>
    <div class="h-[70px]"></div>

    <div class="flex justify-center mt-[90px]">
      <div class="text-3xl font-bold text-font-color">회원가입</div>
    </div>
    <div class="flex justify-center mt-[25px]">
        <img  alt="circle" src = "../assets/images/empty_circle.png"  class="mx-9 w-5 h-5"/>
        <img alt="circle" src = "../assets/images/full_circle.png"  class="mx-9 w-5 h-5"/>
        <img alt="circle" src = "../assets/images/empty_circle.png"  class="mx-9 w-5 h-5"/>
    </div>
    <div class="flex justify-center mt-[25px]">
       <p class="mx-3">약관동의</p>
       <p class="mx-3">정보입력</p>
       <p class="mx-3">회원가입</p>
    </div>
    <!--회원가입 입력 폼-->
    <div>
      <div class=" mt-[90px] flex justify-center">
        <form @submit.prevent="submitForm">
          <div class="mb-[50px] flex items-center">
            <label for="name" class="text-font-color text-[16px] w-[120px]">이름  </label>
            <input type="text" id="name" placeholder="   이름을 입력해주세요" 
                   class="h-[50px] w-[400px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1 focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
          </div>
          <div class="mb-[50px] flex items-center">
            <label for="birthday" class="w-[120px]">생년월일 </label>
            <input type="text" id="birthday" placeholder="   생년월일을 입력해주세요(YYYYMMdd)" 
                   class="h-[50px] w-[400px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1 focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
          </div>
          <div class="flex items-center">
            <label for="email" class="w-[120px]">이메일  </label>
            <input type="text" id="email" placeholder="   이메일을 입력해주세요" v-model="email"
                   class="h-[50px] w-[400px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 mr-[50px]"/>
            <button class="text-lg text-white bg-kb-brown-2 h-[50px] w-[150px] rounded-[15px]">이메일 인증</button><br>
          </div>
          <p class="text-[12px] flex items-center ml-[130px] p-2">반드시 실제로 사용하는 이메일 주소를 입력해주세요</p>

          <div class="mt-[50px] flex items-center">
            <label for="password" class="w-[120px]">비밀번호 </label>
            <input type="password" id="password" v-model="password" placeholder="   비밀번호를 입력해주세요"
                   class="h-[50px] w-[400px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1 focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
            </div>
            <p class="text-[12px] flex items-center ml-[130px] p-2">특수문자(~!#*) 및 영문과 숫자를 포함하여 8~12자로 설정해주세요.</p>

          <div class="mt-[50px] flex items-center">
            <label for="passwordConfirm" class="w-[120px]">비밀번호 확인 </label>
            <input type="password" id="passwordConfirm" v-model="passwordConfirm" placeholder="   비밀번호를 다시 한번 입력해주세요"
                   class="h-[50px] w-[400px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1 focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
          </div>
          <div class="mt-[50px] flex items-center">
            <label for="tel" class="w-[120px]">전화번호 :</label>
            <input type="number" id="tel" v-model="tel" placeholder="   - 없이 전화번호를 입력해주세요(01012341234)"
                   class="h-[50px] w-[400px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1 focus:outline-none focus:ring-2 focus:ring-kb-brown-2 mr-[50px]"/>
            <button class="text-lg text-white bg-kb-brown-2 h-[50px] w-[150px] rounded-[15px]">인증번호 발송</button>
            <!--인증번호 받기를 클릭하시면, 입력하신 이메일 및 보조이메일로 인증메일이 전송됩니다.
이메일로 발송되는 인증코드를 5분 이내에 입력하여 주세요. -> 인증 뜰때 하기 
-->
          </div>
          <div class="mt-[50px] flex items-center">
            <label for="asset" class="w-[120px]">현재 자산 </label>
            <input type="text" id="asset" v-model="asset" placeholder="  현재 자산을 입력해주세요 (ex: 1000000원)"
                   class="h-[50px] w-[400px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1 focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
          </div>
  
          <div class="flex justify-center mt-[90px] mb-[90px]">
            <button @click="$router.push('/login')"
                    class="w-[213px] h-[50px] text-lg rounded-[15px] mr-10 bg-white text-font-color border border-kb-brown-2">취소</button>
            <button @click="$router.push('/signup')" type="button"
                    class="w-[213px] h-[50px] text-lg rounded-[15px] bg-kb-gray-2 text-font-color">가입하기</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  </script>
  