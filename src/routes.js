import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue' // Fix the path here
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup' // This path should be different from '/'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login' // This path should be different from '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
