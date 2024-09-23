import { createRouter,createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Assetdeatil from "../pages/AssetDeatil.vue";
import Assetplan from "../pages/AssetPlan.vue";
import Products from "../pages/Products.vue";
import MyPage from "../pages/MyPage.vue";
import MainPage from "../pages/MainPage.vue";

const router=createRouter({
    history:createWebHistory(), //라우팅 모드 
    routes:[
        {path:'/',component:MainPage},
        {path:'/products',component:Products},
        {path:'/asset-detail',component:Assetdeatil},
        {path:'/asset-plan',component:Assetplan},
        {path:'/mypage',component:MyPage},
        {path:'/login',component:Login}
    ]
})
export default router;