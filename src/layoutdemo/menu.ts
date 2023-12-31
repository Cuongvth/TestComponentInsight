const MENUS = [
  {
    key: 'tab1',
    icon: 'fa-newspaper',
    name: 'Bảng tin',
    link: '',
    show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
  },
  {
    key: 'tab2',
    icon: 'fa-user',
    name: 'Thông tin cá nhân',
    link: '',
    show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
  },
  {
    key: 'tab3',
    icon: 'user-graduate',
    name: 'Học viên',
    link: '',
    show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
    option: [
      {
        key: 'tab3sub1',
        icon: 'fa-book',
        name: 'Khóa học của tôi',
        link: '',
        show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
      },
      {
        key: 'tab3sub2',
        icon: 'fa-clipboard-list',
        name: 'Đánh giá của tôi',
        link: '',
        show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
      },
      {
        key: 'tab3sub3',
        icon: 'fa-calendar-check',
        name: 'Điểm danh',
        link: '',
        show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
      },
      {
        key: 'tab3sub4',
        icon: 'fa-user-astronaut',
        name: 'AI hỗ trợ',
        link: '',
        show: ['ADMIN', 'TROGIANG'],
      },
    ],
  },
  {
    key: 'tab4',
    icon: 'fa-user-tie',
    name: 'Trợ giảng',
    link: '',
    show: ['ADMIN', 'TROGIANG'],
    option: [
      {
        key: 'tab4sub1',
        icon: 'fa-users-rectangle',
        name: 'Học viên của tôi',
        link: '',
        show: ['ADMIN', 'TROGIANG'],
      },
      {
        key: 'tab4sub2',
        icon: 'fa-users-viewfinder',
        name: 'Giám sát học viên',
        link: '',
        show: ['ADMIN', 'TROGIANG'],
      },
      {
        key: 'tab4sub3',
        icon: 'fa-chalkboard-user',
        name: 'Điểm danh học viên',
        link: '',
        show: ['ADMIN', 'TROGIANG'],
      },
    ],
  },
  {
    key: 'tab5',
    icon: 'fa-box-archive',
    name: 'Học liệu',
    link: '',
    show: ['ADMIN'],
    option: [
      {
        key: 'tab5sub1',
        icon: 'fa-book',
        name: 'Môn học',
        link: '',
        show: ['ADMIN'],
      },
      {
        key: 'tab5sub2',
        icon: 'fa-building',
        name: 'Khóa học',
        link: '',
        show: ['ADMIN'],
      },
      {
        key: 'tab5sub3',
        icon: 'fa-video',
        name: 'Video bài giảng',
        link: '',
        show: ['ADMIN'],
      },
    ],
  },
  {
    key: 'tab6',
    icon: 'fa-user-secret',
    name: 'Admin',
    link: '',
    show: ['ADMIN'],
    option: [
      {
        key: 'tab6sub1',
        icon: 'fa-users-gear',
        name: 'Phân công trợ giảng',
        link: '',
        show: ['ADMIN'],
      },
      {
        key: 'tab6sub2',
        icon: 'fa-rectangle-list',
        name: 'Lịch sử truy cập',
        link: '',
        show: ['ADMIN'],
      },
      {
        key: 'tab6sub3',
        icon: 'fa-calendar-check',
        name: 'Giám sát điểm danh',
        link: '',
        show: ['ADMIN'],
      },
      {
        key: 'tab6sub4',
        icon: 'fa-id-card',
        name: 'Danh sách học viên',
        link: '',
        show: ['ADMIN'],
      },
      {
        key: 'tab6sub5',
        icon: 'fa-arrow-up-right-from-square',
        name: 'Thông tin bài viết',
        link: '',
        show: ['ADMIN'],
      },
      {
        key: 'tab6sub6',
        icon: 'fa-robot',
        name: 'AI hỗ trợ học viên',
        link: '',
        show: ['ADMIN'],
      },
      {
        key: 'tab6sub7',
        icon: 'fa-screwdriver-wrench',
        name: 'Đánh giá AI',
        link: '',
        show: ['ADMIN'],
      },
      {
        key: 'tab6sub8',
        icon: 'fa-sliders',
        name: 'Quản lý chung',
        link: '',
        show: ['ADMIN'],
      },
    ],
  },
  {
    key: 'tab7',
    icon: 'fa-school',
    name: 'Khảo thí',
    link: '',
    show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
    option: [
      {
        key: 'tab7sub1',
        icon: 'fa-vial',
        name: 'Kiểm tra',
        link: '',
        show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
      },
      {
        key: 'tab7sub2',
        icon: 'fa-book-open',
        name: 'Thư viện đề thi',
        link: '',
        show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
      },
      {
        key: 'tab7sub3',
        icon: 'fa-list-check',
        name: 'Thư viện câu hỏi',
        link: '',
        show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
      },
      {
        key: 'tab7sub4',
        icon: 'fa-chess',
        name: 'Thi đấu',
        link: '',
        show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
      },
      {
        key: 'tab7sub5',
        icon: 'fa-chess-board',
        name: 'Quản lý thi đấu',
        link: '',
        show: ['ADMIN', 'TROGIANG', 'HOCVIEN'],
      },
    ],
  },
  {
    key: 'tab8',
    icon: 'fa-person-circle-plus',
    name: 'Tuyển sinh',
    link: '',
    show: ['ADMIN', 'SALES'],
    option: [
      {
        key: 'tab8sub1',
        icon: 'fa-bars-progress',
        name: 'Chương trình/Chiến dịch',
        link: '',
        show: ['ADMIN', 'SALES'],
      },
      {
        key: 'tab8sub2',
        icon: 'fa-money-bill-wheat',
        name: 'Quản lý học phí',
        link: '',
        show: ['ADMIN', 'SALES'],
      },
      {
        key: 'tab8sub3',
        icon: 'fa-receipt',
        name: 'Danh sách tổng',
        link: '',
        show: ['ADMIN', 'SALES'],
      },
      {
        key: 'tab8sub4',
        icon: 'fa-users',
        name: 'Khách hàng của tôi',
        link: '',
        show: ['ADMIN', 'SALES'],
      },
      {
        key: 'tab8sub5',
        icon: 'fa-sliders',
        name: 'Quản lý chung',
        link: '',
        show: ['ADMIN', 'SALES'],
      },
      {
        key: 'tab8sub6',
        icon: 'fa-file-signature',
        name: 'Báo cáo',
        link: '',
        show: ['ADMIN', 'SALES'],
      },
    ],
  },
  {
    key: 'tab9',
    icon: 'fa-people-carry-box',
    name: 'CRM',
    link: '',
    show: ['ADMIN', 'MARKETING'],
    option: [
      {
        key: 'tab9sub1',
        icon: 'fa-person-harassing',
        name: 'Giám sát học viên',
        link: '',
        show: ['ADMIN', 'MARKETING'],
      },
      {
        key: 'tab9sub2',
        icon: 'fa-people-pulling',
        name: 'Chăm sóc học viên',
        link: '',
        show: ['ADMIN', 'MARKETING'],
      },
      {
        key: 'tab9sub3',
        icon: 'fa-folder-tree',
        name: 'Quản lý giấy tờ',
        link: '',
        show: ['ADMIN', 'MARKETING'],
      },
      {
        key: 'tab9sub4',
        icon: 'fa-file-signature',
        name: 'Báo cáo',
        link: '',
        show: ['ADMIN', 'MARKETING'],
      },
    ],
  },
];
export default MENUS;
