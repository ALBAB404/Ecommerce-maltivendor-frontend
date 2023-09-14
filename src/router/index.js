import { createRouter, createWebHistory } from 'vue-router'
import {Index, Shop, SingleProduct} from '@/views/pages'
import {UserLogin, UserRegister} from '@/views/auth'
import { SellerApply, SellerPage, SellerStore, checkoutPage } from "@/views/pages/seller";
import { MyProfile, MyOrderList, MyWishlist } from "@/views/user";

const routes = [
    { path: '/', name: 'index.page', component: Index, meta: {title: 'Home'}, },
    { path: '/shop', name: 'shop.page', component: Shop, meta: {title: 'Shop'}, },
    { path: '/product', name: 'product.details', component: SingleProduct, meta: {title: 'Product'}, },
    { path: '/seller-list', name: 'seller.page', component: SellerPage, meta: {title: 'Seller-Page'}, },
    { path: '/seller-store', name: 'seller.store', component: SellerStore, meta: {title: 'Seller-store'}, },
    { path: '/checkout-page', name: 'checkout.page', component: checkoutPage, meta: {title: 'Checkout-page'}, },
    {
      path: "/seller-apply",
      name: "seller.apply",
      component: SellerApply,
      meta: { title: "seller-apply" },
    },


    // user routes
    { path: '/auth/login', name: 'user.login',  component: UserLogin , meta: {title: 'Login'},},
    { path: '/auth/register', name: 'user.register',  component: UserRegister, meta: {title: 'Register'}, },
    {
      path: "/my/profile",
      name: "user.profile",
      component: MyProfile,
      meta: { title: "profile" },
    },
  
    {
      path: "/my/orders",
      name: "user.orders",
      component: MyOrderList,
      meta: { title: "orders" },
    },

    {
      path: "/my/wishlist",
      name: "user.wishlist",
      component: MyWishlist,
      meta: { title: "wishlist" },
    },
    
  ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router;