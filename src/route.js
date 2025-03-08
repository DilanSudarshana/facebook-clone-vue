import Index from "./home-page/index.vue"
import LoginMain from "./login-page/LoginMain.vue"
import ProfileMain from "./profile-page/ProfileMain.vue"
import SignUpMain from "./signup-page/SignUpMain.vue"
import TestAPI from "./test/TestAPI.vue"
import PostRequest from "./test/PostRequest.vue"
import PutRequest from "./test/PutRequest.vue"

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
        name:'ProfileMain',
        component: ProfileMain,
        path: '/profile/:id'
    },
    {
        name: 'SignUpMain',
        component: SignUpMain,
        path: '/sign-up'
    },
    {
        name: 'TestAPI',
        component: TestAPI,
        path: '/get-user'
    },
    {
        name: 'PostRequest',
        component: PostRequest,
        path: '/create-user'
    },
    {
        name: 'PutRequest',
        component: PutRequest,
        path: '/update-user/:id'
    }

];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router