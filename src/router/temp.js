import { createRouter,createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import AssetDetail from "../pages/AssetDetail.vue";
import AssetPlan from "../pages/AssetPlan.vue";
import Products from "../pages/Products.vue";
import MyPage from "../pages/MyPage.vue";
import MainPage from "../pages/MainPage.vue";
import Signup from "../pages/Signup.vue";

const router=createRouter({
    history:createWebHistory(), //라우팅 모드 
    routes:[
        {path:'/',component:MainPage},
        {path:'/products',component:Products},
        {path:'/asset-detail',component:AssetDetail},
        {path:'/asset-plan',component:AssetPlan},
        {path:'/mypage',component:MyPage},
        {path:'/login',component:Login},
        {path:'/signup',component:Signup},

    ]
})
export default router;