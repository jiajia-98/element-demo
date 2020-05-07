import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Form from '../views/Form'
import Table from '../views/Table'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        redirect: '/main/form'
    },
    {
        path: '/main',
        name: 'main',
        component: Main,
        children: [{
            path: 'form',
            name: 'form',
            component: Form
        }, {
            path: 'table',
            name: 'table',
            component: Table
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router