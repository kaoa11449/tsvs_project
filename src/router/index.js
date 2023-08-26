import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  
  // 前端
  {
    path: '/',
    name: 'index',
    component: () => import('../views/main/index.vue'),
  },
  {
    path: '/About',
    name: 'about',
    component: () => import('../views/about/about.vue'),
  },
  {
    path: '/News',
    name: 'news',
    component: () => import('../views/news/news.vue'),
  },
  {
    path: '/Events',
    name: 'events',
    component: () => import('../views/events/events.vue'),
  },
  {
    path: '/Search',
    name: 'search',
    component: () => import('../views/search/search.vue'),
  },
  {
    path: '/Member',
    name: 'member',
    component: () => import('../views/member/member.vue'),
  },
  {
    path: '/Teach',
    name: 'teach',
    component: () => import('../views/teach/teach.vue'),
  },
  {
    path: '/Related',
    name: 'related',
    component: () => import('../views/related/related.vue'),
  },
  {
    path: '/Meeting',
    name: 'meeting',
    component: () => import('../views/meeting/meeting.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
