const routes = [
    {
        path: '/',
        name: 'login',
        meta: {
            title: t('login')
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
export default routes