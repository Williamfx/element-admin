import { createRouter, createWebHashHistory } from 'vue-router'
import Welcom from './../components/Welcome.vue'
const router = [{
    name: 'home',
    path: '/',
    component: Home,
    redirect: Welcome,
    children: [

    ]
}]