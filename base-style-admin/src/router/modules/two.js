var two = [{
    path: '/admin',
    component: resolve => require(['@/components/common/home'], resolve),
    children: [
        {
            path: 'index',
            name: 'userAccount',
            component: () => import('@/view/accout/userAccount.vue'),
            meta: {
                requireAuth: true,
            }
        },
        {
            path: 'order',
            name: 'order',
            component: () => import('@/view/order/order.vue'),
            meta: {
                requireAuth: true,
            }
        },
        {
            path: 'payWay',
            name: 'payWay',
            component: () => import('@/view/config/payWay.vue'),
            meta: {
                requireAuth: true
            }
        },
        {
            path: 'consumeConfig',
            name: 'consumeConfig',
            component: () => import('@/view/config/consumeConfig.vue'),
            meta: {
                requireAuth: true
            }
        },
        {
            path: 'trade',
            name: 'trade',
            component: () => import('@/view/trade/trade.vue'),
            meta: {
                requireAuth: true
            }
        }
    ]
}, ]

export default two;