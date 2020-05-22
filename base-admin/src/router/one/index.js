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
        path: '/logout',
        name: 'logout',
        component: () => import('@/components/logout/logout'),
    },
    {
        path: '*',
        redirect: '/admin/404',
        hidden: true
    }
]

export default one;