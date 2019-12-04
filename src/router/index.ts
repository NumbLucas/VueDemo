import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/layout/index.vue'

import musicRoute from './musicIndex'

Vue.use(VueRouter)

var Travel = () => import('../views/travel/index.vue')
var Movie = () => import('../views/movie/index.vue')
var Book = () => import('../views/book/index.vue')
var Test = () => import('../views/test/index.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Layout,
    meta: { title: '主页', icon: 'home' },
    children: [
      {
        path: 'index',
        component: () => import('../views/Home.vue')
      }
    ]
  },
  {
    path: '/profile',
    name: 'profile',
    redirect: '/profile/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('../views/profile/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    redirect: '/about/index',
    meta: { title: '关于', icon: 'about' },
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  // {
  //   path: '/book',
  //   name: 'book',
  //   component: Layout,
  //   meta: { title: '图书', icon: 'book'},
  //   children: [
  //     {
  //       path: 'comingsoon',
  //       name: 'comingsoon',
  //       meta: { title: '即将上架', icon: 'comingsoon'},
  //       component: () => import('@/views/book/comingsoon/index.vue')
  //     },
  //     {
  //       path: 'rank',
  //       name: 'rank',
  //       meta: { title: '排行榜', icon: 'rank'},
  //       component: () => import('@/views/book/rank/index.vue')
  //     }
  //   ]
  // },
  {
    path: '/movie',
    name: 'movie',
    component: Layout,
    meta: { title: '电影', icon: 'movie' },
    children: [
      {
        path: 'comingsoon',
        name: '上新',
        meta: { title: '即将上架', icon: 'comingsoon' },
        component: () => import('@/views/movie/comingsoon/index.vue')
      },
      {
        path: 'rank',
        name: '排行榜',
        meta: { title: '排行榜', icon: 'rank' },
        component: () => import('@/views/movie/rank/index.vue')
      }
    ]
  },
  {
    path: '/travel',
    name: 'travel',
    component: Layout,
    meta: { title: '旅行', icon: 'travel' },
    redirect: '/travel/index',
    children: [
      {
        path: 'index',
        component: Travel
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    redirect: '/test/index',
    component: Layout,
    meta: { title: '测试', icon: 'test' },
    children: [
      {
        path: 'index',
        component: Test
      }
    ]
  },
  {
    path: '/tcas',
    name: 'tcas',
    component: Layout,
    meta: { title: 'tcas', icon: 'instrument' },
    children: [
      {
        path: 'measure',
        meta: { title: 'measure', icon: 'measure' },
        component: () => import('@/views/tcas/measure/index.vue')
      },
      {
        path: 'receive',
        meta: { title: 'receive', icon: 'receive' },
        component: () => import('@/views/tcas/receive/index.vue')
      },
      {
        path: 'send',
        meta: { title: 'send', icon: 'send' },
        component: () => import('@/views/tcas/send/index.vue')
      }
    ]
  },
  {
    path: '/chart',
    name: 'chart',
    component: Layout,
    meta: { title: 'chart', icon: 'chart' },
    children: [
      {
        path: 'linechart',
        name: 'linechart',
        meta: { title: 'linechart', icon: 'linechart' },
        component: () => import('@/views/chart/LineChart.vue')
      }
    ]
  },
  {
    path: '/picture',
    name: 'picture',
    component: Layout,
    meta: { title: 'picture', icon: 'picure' },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/picture/show/index.vue')
      },
      {
        path: 'show',
        name: 'show',
        meta: { title: 'show', icon: 'show' },
        component: () => import('@/views/picture/show/index.vue')
      },
      {
        path: 'upload',
        name: 'upload',
        meta: { title: 'upload', icon: 'upload' },
        component: () => import('@/views/picture/upload/index.vue')
      }
    ]
  },
  musicRoute
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('from:', from)
  console.log('to:', to)
  next()
})
export default router
