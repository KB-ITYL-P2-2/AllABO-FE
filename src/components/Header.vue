<template>
  <header>
    <nav :class="['fixed top-0 left-0 w-full z-50 h-[70px]', isScrolled ? 'bg-white shadow-lg' : 'bg-transparent']" dark:bg-gray-900>

      <div class="flex items-center justify-between mx-auto pt-2 pb-2 px-[120px]">
        <!-- 로고 -->
        <router-link class="flex items-center justify-start" to="/">
          <span class="self-center text-[25px] font-bold dark:text-white">F:YL</span>
        </router-link>
        
        <!-- 로그인 버튼과 햄버거 버튼 -->
        <div class="flex md:order-2 space-x-3 justify-end rtl:space-x-reverse">
          <button
            type="button"
            class="text-white w-[90px] h-10 kb-dark-gray hover:bg-kb-color-6 focus:ring-4 focus:bg-kb-color-6 rounded-[15px] text-lg px-2 py-2 text-center dark:hover:bg-kb-color-6 bg-kb-dark-gray"
          >
            LOGIN
          </button>
          <button @click="toggleMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        <!-- 네비게이션 바 -->
        <div :class="{ hidden: !isMenuOpen }" class="justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul :class="['flex flex-col font-medium p-3 md:p-0 mt-4 border border-gray-100 rounded-[15px] md:space-x-32 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0', isScrolled ? 'bg-white dark:bg-gray-800' : 'bg-transparent']">
            <li>
              <router-link
              class="block py-2 px-6 text-lg md:p-2 hover:bg-gray-100 md:hover:bg-primary-color rounded-[15px] dark:text-white dark:hover:bg-gray-700"
              to="/products"
              >
                맞춤 상품
              </router-link>
            </li>
            <li>
              <router-link
              class="block py-2 px-6 text-lg md:p-2 hover:bg-gray-100 md:hover:bg-primary-color rounded-[15px] dark:text-white dark:hover:bg-gray-700"
              to="/asset-detail"
              >
                자산 분석
              </router-link>
            </li>
            <li>
              <router-link
              class="block py-2 px-6 text-lg md:p-2 hover:bg-gray-100 md:hover:bg-primary-color rounded-[15px] dark:text-white dark:hover:bg-gray-700"
              to="/asset-plan"
              >
                자산 설계
              </router-link>
            </li>
            <li>
              <router-link
                class="block py-2 px-6 text-lg md:p-2 hover:bg-gray-100 md:hover:bg-primary-color rounded-[15px] dark:text-white dark:hover:bg-gray-700"
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
