import type { RouteRecordRaw } from "vue-router";

const UserRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'auth.login',
        component: () => import('@/views/user/auth/LoginUserView.vue')
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