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
import Survey from "../pages/Survey.vue";
import EditProfile from "../components/MyPage/EditProfile.vue";
import EditPassword from "../components/MyPage/EditPassword.vue";
import WithdrawMember from "../components/MyPage/WithdrawMember.vue";

import KakaoRedirectPage from "../pages/RedirectPages/KakaoRedirectPage.vue";
import AssetAnalyze from "../pages/AssetAnalyze.vue";
import AllProducts from "../pages/AllProducts.vue";
import AssetPlanStrategy from "../pages/AssetPlanStrategy.vue";
import AssetPlanInsurance from "../pages/AssetPlanInsurance.vue";
import AssetPlanSimulation from "../pages/AssetPlanSimulation.vue";

const router=createRouter({
    history:createWebHistory(), //라우팅 모드 
    routes:[
        {path:'/',component:MainPage},

        {path:'/products',component:Products},
        {path:'/products/survey',component:Survey},
        {path:'/all-products', component: AllProducts},

        {path:'/asset-detail',component:AssetDetail},
        {path:'/asset-analyze',component:AssetAnalyze},

        {path:'/asset-plan',component:AssetPlan},
        {path:'/asset-plan/strategy',component:AssetPlanStrategy},
        {path:'/asset-plan/insurance',component:AssetPlanInsurance},
        {path:'/asset-plan/simulation',component:AssetPlanSimulation},
        {path:'/mypage',name: 'MyPage',component:MyPage,props:true},
        {path:'/login',name: 'Login',component:Login},
        {path:'/signup-condition',component:SignCondition},
        {path:'/signup',component:Signup},
        {path: '/signup-success', name: 'SignSuccess',component: SignSuccess},
        {path:'/mypage-profile',component:EditProfile},
        {path:'/mypage-password',component:EditPassword},
        {path:'/mypage-withdraw',component:WithdrawMember},
        
        {path:'/kakao-redirect',component:KakaoRedirectPage},
    ]
})
export default router;