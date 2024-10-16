import './assets/css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue';
import router from '@/router';
import "virtual:svg-icons-register";
import 'animate.css'
import WOW from 'wow.js'

new WOW({
    boxClass: 'wow', // 类名，在用户滚动时显示隐藏的框。
    animateClass: 'animate__animated', // 触发CSS动画的类名称
    offset: 300, // 定义浏览器视口底部与隐藏框顶部之间的距离。当用户滚动并到达此距离时，隐藏的框会显示出来。
    mobile: true, // 在移动设备上打开/关闭WOW.js。
    live: true, // 在页面上同时检查新的WOW元素。
}).init()



const app = createApp(App)
app.use(router);
app.use(createPinia())

app.mount('#app')
