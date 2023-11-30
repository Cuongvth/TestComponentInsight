import studentRoutes from './studentRoutes';
import Features from './FeaturesRoutes';
import Pages from './PageRoutes';
import Components from './Components';
import App from './Applications';
import UserRoutes from './UserRoutes';

const routes = [
  {
    path: '',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'main',
        name: 'home',
        component: () => import('@/views/dashboard/demoBangTin/DemoBangTin.vue'),
      },
      {
        path: '',
        name: 'demoBangTin',
        component: () => import('@/views/dashboard/demoBangTin/DemoBangTin.vue'),
      },
    ],
  },
  {
    path: '/crud',
    name: 'axios',
    component: () => import('@/views/crud/axios/Index.vue'),
    children: [
      {
        path: 'axios-view',
        name: 'axios-view',
        component: () => import('@/views/crud/axios/View.vue'),
      },
      {
        path: 'axios-edit/:id',
        name: 'axios-edit',
        component: () => import('@/views/crud/axios/Edit.vue'),
      },
      {
        path: 'axios-add',
        name: 'axios-add',
        component: () => import('@/views/crud/axios/AddNew.vue'),
      },
    ],
  },
  ...studentRoutes,
  ...UserRoutes,
  ...App,
  ...Features,
  ...Pages,
  ...Components,
];

export default routes;
