<template>
<div class="h-[70px]"></div>
<div class="flex justify-center mt-[187px]">
    <div class="text-3xl font-bold text-font-color">회원가입</div>
</div>
<!--회원가입 입력 폼-->
<div>
    <div class="mt-[200px] flex justify-center">
        <form @submit.prevent="submitForm">
            <div>
				<label for="name" name="username" class="block mb-2 text-font-color text-[16px]">이름</label>
               <input type="text" id="name" placeholder=" 이름을 입력해주세요" 
                class="h-[50px] w-[343px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
			</div>
            <div>
				<label for="birthday" name="userbd" class="block mb-2 text-font-color text-[16px]"> 생년월일</label>
               <input type="text" id="birthday" placeholder=" 생년월일을 입력해주세요(YYYYMMdd)" 
                class="h-[50px] w-[343px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
			</div>
            <div>
				<label for="email" name="useremail" class="block mb-2 text-font-color text-[16px]">email</label>
				<input type="text" id="email" placeholder="이메일을 입력해주세요" v-model="email"                 
                class="h-[50px] w-[343px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2 mr-[50px]"/>
                <button class="text-lg text-white bg-kb-brown-2 h-[50px]  w-[120px] rounded-[15px]">이메일 인증</button>
            </div>
			<div>
				<label for="password" name="password" class="block mb-2 text-font-color text-[16px]">비밀번호</label>
				<input type="password" id="password" v-model="password" placeholder="비밀번호를 입력해주세요"
                class="h-[50px] w-[343px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
			</div>
			<div>
				<label for="passwordConfirm" name="passwordconfirm" class="block mb-2 text-font-color text-[16px]">비밀번호 확인</label>
				<input type="password" id="passwordConfirm" v-model="passwordConfirm" placeholder="비밀번호를 다시 한번 입력해주세요"
                class="h-[50px] w-[343px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
			</div>
			<div>
				<label for="tel" name="tel" class="block mb-2 text-font-color text-[16px]">전화번호</label>
				<input type="number" id="tel" v-model="tel" placeholder="- 없이 전화번호를 입력해주세요(01012341234)"
                class="h-[50px] w-[343px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2 mr-[50px]"/>
                <button class="text-lg text-white bg-kb-brown-2 h-[50px] w-[120px] rounded-[15px]">인증번호 발송</button>
            </div>
            <div>
				<label for="asset" name="asset" class="block mb-2 text-font-color text-[16px]">현재 자산</label>
				<input type="text" id="asset" v-model="asset" placeholder="현재 자산을 입력해주세요 (ex: 1000000원)"
                class="h-[50px] w-[343px] text-kb-gray-2 rounded-[15px] border border-kb-brown-1  focus:outline-none focus:ring-2 focus:ring-kb-brown-2"/>
			</div>


            <div class="flex justify-center mt-[60px]">
                <button class="w-[213px] h-[50px] text-lg rounded-[15px] mr-10 bg-white text-font-color border border-kb-brown-2">취소</button>
                <button @click="$router.push('/signup')" type="button"
                        class="w-[213px] h-[50px] text-lg rounded-[15px] bg-kb-gray-2 text-font-color">가입하기</button>
            </div>
		</form>
    </div>
</div>
</template>
<script>
</script>