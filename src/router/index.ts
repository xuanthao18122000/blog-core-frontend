// import { createWebHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from "@/stores/auth";

import AuthAdminRoutes from './routes/admin/AuthRoutes';
import UsersRoutes from './routes/admin/UsersRoutes';
import ErrorRoutes from './routes/admin/ErrorRoutes';
import TransactionRoutes from './routes/admin/TransactionRoutes';
import ExchangeRateRoutes from './routes/admin/ExchangeRate';

import AuthUserRoutes from './routes/user/AuthRoutes';
import UserRoutes from './routes/user/UserRoutes';

const routes: Array<RouteRecordRaw> = [
    // Admin
    ...AuthAdminRoutes,
    ...UsersRoutes,
    ...TransactionRoutes,
    ...ExchangeRateRoutes,
    // User
    ...AuthUserRoutes,
    ...UserRoutes,

    ...ErrorRoutes
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: routes
})

// Check authentication status before enter routes
// router.beforeEach(async (to, from, next) => {
//     const store = useAuthStore()
//     // loginStatus: false -> can't go to any screen back all to Login
//     if (to.meta.requiresAuth && !store.loginStatus ){
//         next({ name: "auth.login" });
//     }
//     // loginStatus: true -> can't go to Login
//     else if(store.loginStatus && to.name === 'auth.login') {
//         next({ name: "exchange-rate.index" })
//     } else {
//         next()
//     }
// })

export default router
