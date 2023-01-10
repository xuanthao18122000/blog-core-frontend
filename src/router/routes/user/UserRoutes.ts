import type { RouteRecordRaw } from "vue-router";

const UserRoutes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/user/HomeView.vue')
    },
    {
        path: '/change-password',
        name: 'auth.change_password',
        component: () => import('@/views/admin/auth/ChangePassword.vue'),
        meta: {
            requiresAuth: true
        }
    },
];

export default UserRoutes;