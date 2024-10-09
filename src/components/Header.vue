<template>
  <header>
    <nav :class="[
      'fixed top-0 left-0 w-full h-[70px] z-50',
      isScrolledOrHovered ? 'bg-white shadow-lg' : 'bg-transparent',
      'transition duration-500 ease-in-out'
      ]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave">
      <div class="mx-[340px] h-full flex items-center justify-between">
        <!-- 로고 -->
        <router-link to="/" :class="{ 'text-font-color' : isScrolledOrHovered, 'text-font-color' : !isScrolledOrHovered }" class="text-2xl font-bold">
          F:YL
        </router-link>

        <!-- 네비게이션 메뉴와 프로필 아이콘을 포함하는 컨테이너 -->
        <div class="flex items-center space-x-1.5"> <!-- 네비게이션 간격 조정 -->
          <!-- 네비게이션 메뉴 -->
          <ul class="flex items-center space-x-6"> <!-- 아이템 간 간격 줄이기 -->
            <li v-for="item in navItems" :key="item.route" class="relative group">
              <router-link :to="item.route" :class="{ 'text-font-color' : isScrolledOrHovered, 'text-font-color' : !isScrolledOrHovered }" class="block px-3 py-1.5 hover:bg-stone-500 group-hover:bg-stone-500 rounded-md transition duration-300">
                {{ item.name }}
              </router-link>
            </li>
            
            <p :class="{ 'text-font-color' : isScrolledOrHovered, 'text-font-color' : !isScrolledOrHovered }">|</p>
            <li class="relative group">
              <router-link to="/login" :class="{ 'text-font-color' : isScrolledOrHovered, 'text-font-color' : !isScrolledOrHovered }" class="block px-3 py-1.5 hover:bg-stone-500 group-hover:bg-stone-500 rounded-md transition duration-300">
                로그인
              </router-link>
            </li>
          </ul>

          <!-- 프로필 아이콘_마이페이지 이동 -->
          <router-link to="/mypage" :class="[isScrolledOrHovered ? 'text-font-color' : 'text-font-color']" class="hover:text-kb-brown-1">
            <img src="/images/Mypage/user.png" class="w-6 h-6"/>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useHeaderStore } from '../stores/headerStore';

const headerStore = useHeaderStore();

const navItems = [
  { name: '맞춤 상품', route: '/products' },
  { name: '자산 분석', route: '/asset-detail' },
  { name: '자산 설계', route: '/asset-plan' },
];

const isScrolledOrHovered = computed(() => headerStore.isActive);

function handleScroll() {
  headerStore.setScrolled(window.scrollY > 1);
}

function handleMouseEnter() {
  headerStore.setHovered(true);
}

function handleMouseLeave() {
  headerStore.setHovered(false);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  headerStore.resetState();
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
