import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import Login from '@/views/login'
import LoginName from '@/components/login/loginName'
import LoginTel from '@/components/login/loginTel'
import Register from '@/views/register'
import OldChangeNew from '@/views/oldChangeNew'
import Recommended from '@/views/recommended'
import Detail from '@/views/detail'
import Accessories from '@/views/accessories'
import ShopCar from '@/views/shopCar'
import BuyNow from '@/views/buyNow'

Vue.use(Router)

let router = new Router({
  mode: "history",
  scrollBehavior(to, from, savePosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        showHeader: true,
        showBanner: true,
        // showHeadernav: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        showHeader: false,
        showBanner: false,
        // showHeadernav: false
      },
      children: [
        {
          path: '',
          component: LoginName,
          meta: {
            showHeader: false,
            showBanner: false,
            // showHeadernav: false
          },
        },
        {
          path: 'tel',
          component: LoginTel,
          meta: {
            showHeader: false,
            showBanner: false,
            // showHeadernav: false
          },
        },
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        showHeader: false,
        showBanner: false,
        // showHeadernav: false
      }
    },

    {
      path: '/oldChangeNew',
      name: 'OldChangeNew',
      component: OldChangeNew,
      meta: {
        showHeader: true,
        showBanner: false,
        // showHeadernav: false
      }
    },
    {
      path: '/recommended',
      name: 'recommended',
      component: Recommended,
      meta: {
        showHeader: true,
        showBanner: false,
        // showHeadernav: false
      }
    },
    {
      // path:'/detail/:gid?'
      path: '/detail/:gid',
      name: 'Detail',
      component: Detail,
      meta: {
        showHeader: true,
        showBanner: false,
        // showHeadernav: false
      }
    },
    {
      path: '/accessories',
      name: 'Accessories',
      component: Accessories,
      meta: {
        showHeader: true,
        showBanner: false,
        // showHeadernav: false
      },
    },
    {
      path: '/shopCar',
      name: 'ShopCar',
      component: ShopCar,
      meta: {
        showHeader: true,
        showBanner: false,
        // showHeadernav: false,
        login: true
      }
    },
     {
      path: '/buyNow',
      name: 'BuyNow',
      component: BuyNow,
      meta: {
        showHeader: true,
        showBanner: false,
        // showHeadernav: false,
        // login: true
      }
    },
    {
      path: '*',
      redirect: { path: "/" }
    }
  ]
})
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    let info = router.app.$local.fetch("user").userName;
    if (info) {
      next();
    } else {
      alert("请先登录！");
      router.push("/login")
    }
  } else {
    next();
  }
})

export default router