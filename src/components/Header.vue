<template>
  <header>
    <!-- 네비게이션 바 -->
    <nav :class="['fixed top-0 left-0 w-full h-[70px] z-50', isScrolled ? 'bg-white shadow-lg' : 'bg-transparent','transition duration-500 ease-in-out']">

      <div class="flex items-center justify-between mx-auto pt-2 pb-2 px-[120px]">
        <!-- 로고 -->
        <router-link class="flex items-center justify-start" to="/"> 
          <span class="self-center text-[25px] font-bold ">F:YL</span>
        </router-link>
        
        <!-- 로그인 버튼과 화면 축소 시 햄버거 버튼 -->
        <div class="flex justify-end space-x-3 md:order-2 rtl:space-x-reverse">
          <button
            @click="$router.push('/login')"
            type="button"
            class="text-white w-[90px] h-[50px] hover:bg-kb-color-6 focus:ring-4 focus:bg-kb-color-6 rounded-[15px] text-lg px-2 py-2 text-center bg-kb-brown-1"
          >
            LOGIN
          </button>
          <button @click="toggleMenu" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-font-color md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-500 ">
            <span class="sr-only">메인 메뉴 열기</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        <!-- 네비게이션 바 -->
        <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen, 'md:flex': true}" class="justify-between w-full transition-all duration-500 ease-in-out md:w-auto md:order-1" id="navbar-cta">
          <ul :class="['flex flex-col font-medium md:p-1 md:space-x-32 md:flex-row', isScrolled ? 'bg-inherit' : 'bg-transparent','transition duration-500 ease-in-out']">
            <li>
              <router-link
              class="block px-6 py-2 text-lg transition duration-500 ease-in-out md:p-2 md:hover:bg-nav-color"
              to="/products"
              >
                맞춤 상품
              </router-link>
            </li>
            <li>
              <router-link
              class="block px-6 py-2 text-lg transition duration-500 ease-in-out md:p-2 md:hover:bg-nav-color "
              to="/asset-detail"
              >
                자산 분석
              </router-link>
            </li>
            <li>
              <router-link
              class="block px-6 py-2 text-lg transition duration-500 ease-in-out md:p-2 hover:bg-gray-100 md:hover:bg-nav-color"
              to="/asset-plan"
              >
                자산 설계
              </router-link>
            </li>
            <li>
              <router-link
                class="block px-6 py-2 text-lg transition duration-500 ease-in-out md:p-2 md:hover:bg-nav-color"
                to="/mypage"
              >
                마이 페이지
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false); // 스크롤 상태를 추적하는 변수

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleScroll() {
  if (window.scrollY > 200) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
