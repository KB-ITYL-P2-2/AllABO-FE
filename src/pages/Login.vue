<template>
    <div class="h-[70px]"></div>
    <div class="mt-[187px] ml-[784px]">
        <div class="text-3xl font-bold text-font-color ml-[70px] ">F:YL</div>
        <form>
            <!--email-->
            <label for="email" name="useremail" class="block mb-2">이메일:</label>
            <input type="text" placeholder="이메일을 입력하세요" 
                   class="w-72 h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <br>
            <label for="password" name="password" class="block mt-4 mb-2">비밀번호:</label>
            <input type="password" placeholder="비밀번호를 입력하세요" 
                   class="w-72 h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <br>
            <button class="h-[50px] w-[340px] rounded-[15px] bg-kb-brown-1 text-white text-lg py-2 px-4  focus:ring-kb-brown-2">LOGIN</button>
            <!--페이지 생성 후 수정 예정-->
            <div class="user_info mt-4">
                <a href="#" class="text-blue-500 hover:underline">이메일 찾기</a> |
                <a href="#" class="text-blue-500 hover:underline">비밀번호 찾기</a> |
                <a href="#" class="text-blue-500 hover:underline">회원가입</a>
            </div>
        </form>
    </div>
</template>

<script setup></script>
