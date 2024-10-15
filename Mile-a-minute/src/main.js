import './assets/css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import Index from './views/index.vue';

import "virtual:svg-icons-register";

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(Index)
app.use(router);
app.use(createPinia())

app.mount('#app')
