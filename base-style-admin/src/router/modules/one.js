var one = [{
        path: '/',
        redirect: 'admin/index',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login/login'),
    },
    {
        path: '/404',
        name: 'Page404',
        component: () => import('@/components/common/Page404'),
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export default one;