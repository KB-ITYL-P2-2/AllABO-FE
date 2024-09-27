<template>
  <header>
    <nav :class="['fixed top-0 left-0 w-full h-[70px] z-50', isScrolled ? 'bg-white shadow-lg' : 'bg-transparent','transition duration-500 ease-in-out']">
      <div class="mx-[340px] h-full flex items-center justify-between">
        <!-- 로고 -->
        <router-link to="/" class="text-2xl font-bold">
          F:YL
        </router-link>
        <!-- 네비게이션 메뉴와 프로필 아이콘을 포함하는 컨테이너 -->
        <div class="flex items-center space-x-2.5">
          <!-- 네비게이션 메뉴 -->
          <ul class="flex items-center space-x-[34px]">
            <li>
              <router-link to="/products" class="text-font-color hover:text-kb-brown-1 md:hover:bg-nav-color">
                맞춤 상품
              </router-link>
            </li>
            <li>
              <router-link to="/asset-detail" class="text-font-color hover:text-kb-brown-1 md:hover:bg-nav-color">
                자산 분석
              </router-link>
            </li>
            <li>
              <router-link to="/asset-plan" class="text-font-color hover:text-kb-brown-1 md:hover:bg-nav-color">
                자산 설계
              </router-link>
            </li>
            <p>|</p>
            <li>
              <router-link to="/login" class="text-font-color hover:text-kb-brown-1 md:hover:bg-nav-color">
                로그인
              </router-link>
            </li>
          </ul>

          <!-- 프로필 아이콘_마이페이지 이동 -->
          <router-link to="/mypage" class="text-font-color hover:text-kb-brown-1 md:hover:bg-nav-color">
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
