import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/Home.vue'
import ProductList from '@/components/product/ProductList.vue'
import ProductDetails from '@/components/product/ProductDetails.vue'
import AddProduct from '@/components/product/AddProduct.vue'
import Authentication from '@/components/user/Authentication.vue'
import AuthGuard from '@/router/auth-guard.js'
export default new VueRouter({
    mode: 'history',
    base: __dirname,
     routes: [
        {
            path:'/',
            component:Home,
            name:"Welcome"
        },
        {
            path:'/user/products',
            component:ProductList,
            name:"UserProduct"
        },
        {
            path:'/user/products/:id',
            component:ProductDetails,
            name:"ProductDetails",
            beforeEnter:AuthGuard
        },
        {
            path:'/products/add',
            component:AddProduct,
            name:"AddProduct",
            beforeEnter:AuthGuard
        },
         {
            path:'/register',
            component:Authentication,
            name:"Register"
        },
         {
            path:'/login',
            component:Authentication,
            name:"Login"
        },
        
    ]
})