import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "Login" */ '../views//login/Login.vue'),
    beforeEnter(to,from,next){
      const isLogin = localStorage.isLogin;
      isLogin? next({name:'Home'}):next()
    }
  },
  {
    path: '/Register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "Login" */ '../views/register/Register.vue')
  },
  {
    path: '/Shop/:id',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "Login" */ '../views/shop/Shop.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin 
  if(isLogin||(to.name == 'Login' || to.name == 'Register')){
    next()
  }else{
    next({name:'Login'})
  }
})
export default router