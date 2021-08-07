import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Landing from '../views/Landing.vue'
import Admin from '../views/Admin.vue'
import Reward from '../views/Reward.vue'
import History from '../views/History.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Addreward from '../views/Addreward.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/reward',
    name: 'Reward',
    component: Reward
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
  },
  {
    path: '/addreward',
    name: 'Addreward',
    component: Addreward
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router