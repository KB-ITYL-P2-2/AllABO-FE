import { createRouter,createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import AssetDetail from "../pages/AssetDetail.vue";
import AssetPlan from "../pages/AssetPlan.vue";
import Products from "../pages/Products.vue";
import MyPage from "../pages/MyPage.vue";
import MainPage from "../pages/MainPage.vue";
import SignCondition from "../components/Login/SignCondition.vue";
import Signup from "../pages/Signup.vue";
import SignSuccess from "../components/Login/SignSuccess.vue";


const router=createRouter({
    history:createWebHistory(), //라우팅 모드 
    routes:[
        {path:'/',component:MainPage},
        {path:'/products',component:Products},
        {path:'/asset-detail',component:AssetDetail},
        {path:'/asset-plan',component:AssetPlan},
        {path:'/mypage',name: 'MyPage',component:MyPage,props:true},
        {path:'/login',name: 'Login',component:Login},
        {path:'/signup-condition',component:SignCondition},
        {path:'/signup',component:Signup},
        {path:'/signup-success',name:'SingSucess',component:SignSuccess}


    ]
})
export default router;