import { createRouter, createWebHistory } from 'vue-router';
import Blog from '../views/blog.vue';
import NotFound from '../views/404.vue';

const routes = [
    {
        path: '/',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/post/:id/:post',
        name: 'post',
        component: () => import(/* webpackChunkName: "post" */ '../views/post.vue'),
    },
    { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
