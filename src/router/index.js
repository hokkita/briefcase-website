import { createWebHistory, createRouter } from 'vue-router';

import Landing from '@/pages/Landing.vue';
import PageNotFound from '@/pages/PageNotFound.vue';

// import LamanUtama from '@/pages/LamanUtama.vue';


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL
    ),
    routes : [
        {
            path: '/',
            component: Landing,
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'PageNotFound', 
            component: PageNotFound
        },
    ],
    scrollBehaviour(to, from, savedPosition) {
        return { top: 0 } //always scroll to top
    },
});

export default router;