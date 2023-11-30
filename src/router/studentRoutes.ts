export default [
  {
    path: '/hocvien',
    name: 'chat',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        name: 'chatBot',
        path: 'chatbot',
        component: () => import('../views/apps/chat/ChatApp.vue'),
      },
      {
        name: 'chatBotBaiTap',
        path: 'chatbot/:id',
        component: () => import('../views/apps/chat/ChatApp.vue'),
      },
      {
        name: 'thongtincanhan',
        path: 'thongtincanhan',
        component: () => import('../views/dashboard/DemoThongTinCaNhan.vue'),
      },
      {
        name: 'demoHocVienDiemDanh',
        path: 'diemdanh',
        component: () => import('@/views/dashboard/DemoHocVienDiemDanh.vue'),
      },
      {
        path: 'khoahoc',
        name: 'myCourses',
        component: () => import('@/views/dashboard/myCourses/MyCourses.vue'),
      },
      {
        path: 'khoahoc/:id',
        name: 'listSubject',
        component: () => import('@/views/dashboard/myCourses/ListSubject.vue'),
      },
      {
        path: 'khoahoc/:idKhoaHoc/monhoc/:idMonHoc',
        name: 'listExercise',
        component: () => import('@/views/dashboard/myCourses/ListExercise.vue'),
      },
      {
        path: 'khoahoc/:idKhoaHoc/monhoc/:idMonHoc/baitap/:idBaiTap/lambaitap',
        name: 'doHomework',
        component: () => import('@/views/dashboard/myCourses/DoHomework.vue'),
      },
    ],
  },
];
