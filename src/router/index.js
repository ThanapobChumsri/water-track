import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Landing from '../views/Landing.vue'
import Reward from '../views/Reward.vue'
import History from '../views/History.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Addreward from '../views/Addreward.vue'
import editReward from '../views/editReward.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/editreward',
    name: 'Editreward',
    component: editReward
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router