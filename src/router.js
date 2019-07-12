import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Movies from './views/Movies.vue'
import Team from './views/Team.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        }
    ]
})
