const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'chat',  name: 'chat',  component: () => import('pages/RestricArea.vue') }

    ]
  },
  {
    path: '/another',
    component: () => import('layouts/MainLayout copy.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/RestricArea.vue'),

      },
      { path: 'chat', component: () => import('pages/RestricArea.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
