<template>
  <header>
    <nav :class="['fixed top-0 left-0 w-full h-[70px] z-50', isScrolled ? 'bg-white shadow-lg text-font-color' : 'bg-transparent text-white', 'transition duration-500 ease-in-out']">
      <div class="mx-[340px] h-full flex items-center justify-between">
        <!-- 로고 -->
        <router-link to="/" :class="[isScrolled ? 'text-font-color' : 'text-white']" class="text-2xl font-bold">
          F:YL
        </router-link>
        <!-- 네비게이션 메뉴와 프로필 아이콘을 포함하는 컨테이너 -->
        <div class="flex items-center space-x-1.5"> <!-- 네비게이션 간격 조정 -->
          <!-- 네비게이션 메뉴 -->
          <ul class="flex items-center space-x-6"> <!-- 아이템 간 간격 줄이기 -->
            <li class="relative group">
              <router-link to="/products" :class="[isScrolled ? 'text-font-color' : 'text-white']" class="block px-3 py-1.5 hover:bg-stone-500 group-hover:bg-stone-500 rounded-md transition duration-300">
                맞춤 상품
              </router-link>
            </li>
            <li class="relative group">
              <router-link to="/asset-detail" :class="[isScrolled ? 'text-font-color' : 'text-white']" class="block px-3 py-1.5 hover:bg-kb-yellow-2 group-hover:bg-kb-yellow-2 rounded-md transition duration-300">
                자산 분석
              </router-link>
            </li>
            <li class="relative group">
              <router-link to="/asset-plan" :class="[isScrolled ? 'text-font-color' : 'text-white']" class="block px-3 py-1.5 hover:bg-stone-500 group-hover:bg-stone-500 rounded-md transition duration-300">
                자산 설계
              </router-link>
            </li>
            <p :class="[isScrolled ? 'text-font-color' : 'text-white']">|</p>
            <li class="relative group">
              <router-link to="/login" :class="[isScrolled ? 'text-font-color' : 'text-white']" class="block px-3 py-1.5 hover:bg-stone-500 group-hover:bg-stone-500 rounded-md transition duration-300">
                로그인
              </router-link>
            </li>
          </ul>

          <!-- 프로필 아이콘_마이페이지 이동 -->
          <router-link to="/mypage" :class="[isScrolled ? 'text-font-color' : 'text-white']" class="hover:text-kb-brown-1">
            <img src="../assets/images/user.png" class="w-6 h-6"/>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

function handleScroll() {
console.log(window.screenY)
  if (window.scrollY > 1) {
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

<style scoped>
nav ul li:hover {
  background-color: var(--kb-brown-1); /* 네비게이션 메뉴에서 hover 시의 배경색을 설정합니다. */
}
</style>
