import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      title: 'login'
    },
    component: () => import("../views/index.vue")
  },
  {
    path: '/history-map',
    name: 'historyMap',
    component: () => import("../views/historyMap.vue"),
  },
  {
    path: '/information-map',
    name: 'informationMap',
    component: () => import("../views/informationMap.vue"),
  },
]
const router = createRouter({
  history: createWebHistory(),  // 使用 HTML5 history 模式
  routes,
});

export default router;