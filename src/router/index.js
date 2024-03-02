import {createRouter, createWebHistory} from 'vue-router'
import Root from '../views/root.vue'
import Fuck from '../views/fuck.vue'

const routes = [
    {
        path: '/root',
        name: 'Root',
        component: Root
    },
    {
        path: '/fuck',
        name: 'Fuck',
        component: Fuck
    },
    {
        path: '/',
        redirect:'/root'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router