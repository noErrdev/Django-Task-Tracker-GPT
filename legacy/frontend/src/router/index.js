import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Createitems from '../views/Createitems.vue'
import Individualitems from '../views/Individualitems.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/createItems',
      name: 'createItems',
      component: Createitems
    },
    {
      path: '/individualItems/:id',
      name: 'individualItems',
      component: Individualitems
    }
  ]
})

router.beforeEach((to, from) => {
  let isAuthenticated = localStorage.getItem('jwtTokens')
  if (!isAuthenticated && to.name !== 'login') {
    // redirect the user to the login page
    return { name: 'login' }
  }
})

export default router
