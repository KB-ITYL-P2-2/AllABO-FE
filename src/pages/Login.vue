<template>
    <div class="h-[70px]"></div>
    <div class="flex justify-center mt-[187px]">
        <div class="text-3xl font-bold text-font-color">F:YL</div>
    </div>
    <div class="mt-6 flex justify-center">
        <form>
            <!--email-->
            <label for="email" name="useremail" class="block mb-2"></label>
            <input type="text" placeholder="이메일을 입력하세요" 
                   class="h-[50px] w-[340px] rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
            <br>
            <label for="password" name="password" class="block mt-4 mb-2"></label>
            <input type="password" placeholder="비밀번호를 입력하세요" 
                   class="h-[50px] w-[340px] rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
            <br>
            <button class="h-[50px] w-[340px] rounded-[15px] bg-kb-brown-1 text-white text- py-2 px-4  focus:ring-kb-brown-2 mt-4">LOGIN</button>
            <!--페이지 생성 후 수정 예정-->
            <div class="user_info mt-4">
                <a href="#" class="text-kb-gray-2 text-[16px] underline">이메일 찾기</a>
                <button @click=""></button>
                <a href="#" class="text-kb-gray-2 text-[16px] underline ml-4">비밀번호 찾기</a>
                <button @click="$router.push('/signup')" class="text-kb-gray-2 text-[16px] underline ml-4">회원가입</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import EmailModal from '../components/modal/EmailModal.vue';

const showModal=ref(false);

</script>
