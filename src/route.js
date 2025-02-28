import Index from "./home-page/index.vue"

import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        name: 'Index',
        component: Index,
        path: '/'
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router