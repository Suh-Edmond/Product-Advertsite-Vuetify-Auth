import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/Home.vue'
import ProductList from '@/components/product/ProductList.vue'
import ProductDetails from '@/components/product/ProductDetails.vue'
import AddProduct from '@/components/product/AddProduct.vue'
import Register from '@/components/user/Register.vue'
import Login from '@/components/user/Login.vue'
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
            name:"ProductDetails"
        },
        {
            path:'/user/products/add',
            component:AddProduct,
            name:"AddProduct"
        },
         {
            path:'/user/register',
            component:Register,
            name:"Register"
        },
         {
            path:'/user/login',
            component:Login,
            name:"Login"
        },
        
    ]
})