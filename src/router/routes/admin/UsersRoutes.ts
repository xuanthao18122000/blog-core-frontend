import type { RouteRecordRaw } from "vue-router";

const UsersRoutes: Array<RouteRecordRaw> = [
    {
        path: '/users',
        alias: '/',
        name: 'users.index',
        component: () => import('@/views/admin/user/ListUserView.vue'),
        meta: {
            requiresAuth: true
        }
    },
];

export default UsersRoutes;
