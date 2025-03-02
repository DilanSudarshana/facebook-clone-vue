import Index from "./home-page/index.vue"
import LoginMain from "./login-page/LoginMain.vue"
import ProfileMain from "./profile-page/ProfileMain.vue"

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
    {
        name: 'ProfileMain',
        component: ProfileMain,
        path: '/profile'
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router