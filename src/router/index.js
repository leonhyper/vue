import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Issues from '@/components/Issues'
import AddIssue from '@/components/AddIssue'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Register from '@/components/Register'
import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import cookies from 'js-cookie'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/issues',
      name: 'Issues',
      meta: {
        requireAuth: true
      },
      component: Issues
    },
    {
      path: '/add',
      name: 'AddIssue',
      meta: {
        requireAuth: true
      },
      component: AddIssue
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
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

router.beforeEach((to, from, next) => {
  var user = typeof (cookies.get('user'))
  if (to.meta.requireAuth) {
    if (user !== 'undefined') {
      next()
    } else {
      Vue.prototype.$message.warning('Please login first.')
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
