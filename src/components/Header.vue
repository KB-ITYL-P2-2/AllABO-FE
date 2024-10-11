<template>
  <header>
    <nav
      :class="['fixed top-0 left-0 w-full h-[70px] z-50', isScrolledOrHovered ? 'bg-white shadow-lg' : 'bg-transparent', 'transition duration-500 ease-in-out']"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="mx-[340px] h-full flex items-center justify-between">
        <!-- 로고 -->
        <router-link to="/" class="text-2xl font-bold"> F:YL </router-link>

        <!-- 네비게이션 메뉴와 프로필 아이콘을 포함하는 컨테이너 -->
        <div class="flex items-center gap-8">
          <!-- 네비게이션 간격 조정 -->
          <!-- 네비게이션 메뉴 -->
          <ul class="flex h-[70px] items-center">
            <!-- 아이템 간 간격 줄이기 -->
            <li v-for="item in navItems" :key="item.route" class="flex flex-col h-[70px]">
              <router-link
                :to="item.route"
                class="h-[70px] transition-colors duration-500 ease-in-out flex items-center px-4 bg-gradient-to-b from-transparent to-transparent hover:bg-gradient-to-b hover:from-kb-yellow-4 hover:via-[#ffef63] hover:to-kb-yellow-4"
              >
                {{ item.name }}
              </router-link>
            </li>

            <p class="mx-1">|</p>
            <li class="flex flex-col h-[70px]">
              <router-link
                to="/login"
                class="h-[70px] hover:transition-colors transition-colors duration-300 bg-gradient-to-b hover:from-kb-yellow-4 hover:via-[#ffef63] hover:to-kb-yellow-4 flex items-center px-4"
              >
                로그인
              </router-link>
            </li>
          </ul>

          <!-- 프로필 아이콘_마이페이지 이동 -->
          <router-link to="/mypage" :class="[isScrolledOrHovered ? 'text-font-color' : 'text-font-color']" class="hover:text-kb-brown-1">
            <img src="/images/Mypage/user.png" class="w-6 h-6" />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useHeaderStore } from "../stores/headerStore";

const headerStore = useHeaderStore();

const navItems = [
  { name: "맞춤 상품", route: "/products" },
  { name: "자산 분석", route: "/asset-detail" },
  { name: "자산 설계", route: "/asset-plan" },
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
  window.addEventListener("scroll", handleScroll);
  headerStore.resetState();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
