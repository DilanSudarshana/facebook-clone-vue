import Index from "./home-page/index.vue"
import LoginMain from "./login-page/LoginMain.vue"

import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        name: 'Index',
        component: Index,
        path: '/'
    },
    {
        name: 'LoginMain',
        component: LoginMain,
        path: '/login'
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router