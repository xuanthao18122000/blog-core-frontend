import type { RouteRecordRaw } from "vue-router";

const AuthAdminRoutes: Array<RouteRecordRaw> = [
    {
        path: '/admin/login',
        name: 'auth.admin.login',
        component: () => import('@/views/admin/auth/LoginAdminView.vue')
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

export default AuthAdminRoutes;