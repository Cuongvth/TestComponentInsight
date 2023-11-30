export default [
  {
    path: '/nguoidung',
    name: 'users',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'quanlyhocvien',
        name: 'quanlyhocvien',
        component: () => import('../views/table/QuanLyNguoiDungTable.vue'),
      },
      {
        path: 'quanlytaikhoan',
        name: 'quanlytaikhoang',
        component: () => import('../views/table/QuanLyTaiKhoangTable.vue'),
      },
    ],
  },
];
