import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component (resolve) {
            require(['../component/home/Home.vue'], resolve)
        }
    },
    {
        path:'/rank',
        component (resolve) {
            require(['../component/rank/Rank.vue'], resolve)
        }
    },
    {
        path:'/music',
        component (resolve) {
            require(['../component/music/Music.vue'], resolve)
        }
    },
    {
        path:'/mv',
        component (resolve) {
            require(['../component/mv/Mv.vue'], resolve)
        }
    }
]

const router = new VueRouter({
    mode:"history",
	routes
})

export default router;