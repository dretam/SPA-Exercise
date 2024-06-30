import {createRouter, createWebHistory} from 'vue-router';

import UserPage from './components/user/UserPage.vue';
import ProductPage from './components/product/ProductPage.vue';
import CartPage from './components/user/CartPage.vue';
import ProductDetailPage from './components/product/ProductDetailPage.vue';
import UserContact from './components/user/UserContact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'user-page',
            path: '/users',
            alias: '/',
            component: UserPage,
            children: [
                {
                    name:'user-contact',
                    path:'contact/:userId',
                    props: true,
                    component: UserContact,
                }
            ]
        },
        {
            name: 'product-page',
            path: '/products',
            component: ProductPage
        },
        {
            name: 'user-cart-page',
            path: '/cart/:userId',
            props: true,
            component: CartPage
        },
        {
            name: 'product-detail-page',
            path: '/products/detail/:productId',
            props: true,
            component: ProductDetailPage
        },
    ]
});

export default router;