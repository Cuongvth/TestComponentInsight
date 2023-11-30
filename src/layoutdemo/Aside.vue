<script setup lang="ts">
import { computed, reactive, ref, toRefs, watch, watchEffect, defineComponent } from 'vue';
//import type { PropType } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import versions from '../demoData/changelog.json';
import { NavTitle } from './style';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {} from '@fortawesome/free-brands-svg-icons';
const props = defineProps({
  toggleCollapsed: {
    type: Function,
    required: true,
  },
  events: {
    type: Object,
    required: true,
  },
});

const store = useStore();
const darkMode = computed(() => store.state.themeLayout.data);
const mode = ref('inline');
const { events } = toRefs(props);
const { onRtlChange, onLtrChange, modeChangeDark, modeChangeLight, modeChangeTopNav, modeChangeSideNav } = events.value;
const myRoles = ['Admin', 'TroGiang', 'HocVien'];
const router = computed(() => useRoute());
const state = reactive({
  rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
  selectedKeys: ['home'],
  openKeys: ['dashboard'],
  preOpenKeys: ['dashboard'],
});
const language = {
  header: {
    myAccount: 'Tài khoản của tôi',
    signOut: 'Đăng xuất',
    language: [
      {
        src: 'https://cdn-icons-png.flaticon.com/512/323/323319.png',
        type: 'vi',
        name: 'Tiếng Việt',
      },
      {
        src: 'https://cdn-icons-png.flaticon.com/512/197/197374.png',
        type: 'en',
        name: 'Tiếng Anh',
      },
      {
        src: 'https://cdn-icons-png.flaticon.com/512/552/552051.png',
        type: 'kr',
        name: 'Tiếng Hàn',
      },
      {
        src: 'https://cdn-icons-png.flaticon.com/512/4852/4852821.png',
        type: 'jp',
        name: 'Tiếng Nhật',
      },
    ],
  },
  navBar: {
    newFeed: 'Bảng tin',
    userInfomation: 'Thông tin cá nhân',
    student: {
      title: 'Học viên',
      sub: {
        attandance: 'Điểm danh',
        myCourse: 'Khóa học của tôi',
        chatBot: 'AI hỗ trợ',
        danhGia: 'Đánh giá của tôi',
      },
    },
    mentor: {
      title: 'Trợ giảng',
      sub: {
        myStudent: 'Học viên của tôi',
        takeCare: 'Giám sát học tập',
        studentAttendance: 'Điểm danh học viên',
        assignStudent: 'Phân công học viên',
      },
    },
    user: {
      title: 'Người dùng',
      sub: {
        listStudent: 'Danh sách học viên',
        listAccount: 'Danh sách tài khoản',
      },
    },
    content: {
      title: 'Nội dung',
      sub: {
        information: 'Thông tin',
        subjects: 'Môn học',
        courses: 'Khóa học',
        video: 'Video bài giảng',
      },
    },
    manage: {
      title: 'Quản lý',
      sub: {
        assign: 'Phân công trợ giảng',
        history: 'Lịch sử truy cập',
        takeCareAttandance: 'Giám sát điểm danh',
        studentAttandance: 'Điểm danh học viên',
        center: 'Trung tâm',
        commonManage: 'Quản lý chung',
        chatBot: 'AI hỗ trợ',
        chatBotFeedBack: 'Đánh giá AI hỗ trợ',
      },
    },
    testOnline: {
      title: 'Đánh giá',
      sub: {
        testLibrary: 'Thư viện đề thi',
        check: 'Kiểm tra',
        quizLibrary: 'Thư viện câu hỏi',
        settingManage: 'Quản lý cài đặt',
      },
    },
    job: {
      title: 'Công việc',
      sub: {
        jobGroupManage: 'Quản lý nhóm việc',
        setting: 'Cấu hình',
        myJobGroup: 'Nhóm việc của tôi',
      },
    },
    marketingTools: {
      title: 'Công cụ Marketing',
      sub: {
        templateMessage: 'Mẫu tin nhắn',
        studentInterested: 'Học viên quan tâm',
      },
    },
  },
  home: {
    catalog: {
      title: 'Danh mục',
    },
  },
  caNhan: {
    danhSachKhoaHocDaDangKy: {
      myCourse: 'Khóa học của tôi',
      registered: 'Đã đăng ký',
      unregistered: 'Chưa đăng ký',
      timeLine: 'Lộ trình ·',
      subject: 'Môn học',
      more: '(Xem thêm)',
      getIn: 'Vào học',
      notRegistered: 'Chưa đăng ký khóa học nào',
      register: 'Đăng ký',
      emptCourse: 'Không có khóa học nào',
    },
    diemDanh: {
      attendanceHistory: 'Lịch sử điểm danh',
      type: ['Đến đúng/Sớm', 'Đến trễ', 'Nghỉ'],
      from: 'Từ ngày',
      to: 'Đến ngày',
      typeWatch: ['Sáng', 'Chiều', 'Tối'],
      xinNghi: 'Xin nghỉ',
      typeAttandance: ['Sớm ', 'Muộn '],
      headerTitle: ['Ngày', 'Ca-Giờ', 'Trạng thái'],
    },
    modalDangKyKhoaHoc: {
      title: 'Khóa học:',
      goiHocPhi: 'Gói học phí',
      description: 'Xem mô tả',
      dangKy: 'Đăng ký',
    },
    modalShowAnhMinhHoa: {
      title: 'Cho có anh minh họa',
      chuaCo: 'Chưa có',
    },
    modalXemVideo: {
      title: 'Xem video',
    },
    thongTinCaNhan: {
      title: 'Thông tin cá nhân1',
      thayAnhDaiDien: 'Click để thay ảnh đại diện',
      label: 'Họ tên (*)',
      label2: 'Họ tên',
      ngaySinh: 'Ngày sinh',
      ngaySinh2: 'Ngày sinh (*)',
      sdt: 'Số điện thoại',
      sdt2: 'Số điện thoại (*)',
      dhcd: 'Trường CĐ/ĐH (*)',
      truongDaiHoc: 'Trường đại học',
      tenKhoa: 'Tên khoa',
      namThu: 'Năm thứ',
      email: 'Email',
      diaChiEmail: 'Địa chỉ email',
      linkFB: 'Link Facebook cá nhân',
      tinhThanh: 'Tỉnh thành',
      quanHuyen: 'Quận huyện',
      phuongXa: 'Phường xã',
      soNha: 'Số nhà',
      where: 'Biết LTS Edu qua',
      intro: 'Người giới thiệu',
      introer: 'Tên người giới thiệu',
      thoiGianDiHoc: 'Thời gian đi học (*)',
      damBao: '(đảm bảo tối thiểu 4 ca/tuần):',
      slot: 'Buổi',
      sang: 'Sáng',
      chieu: 'Chiều',
      toi: 'Tối',
      update: 'Cập nhật',
      slot2: {
        hai: 'Thứ 2',
        ba: 'Thứ 3',
        tu: 'Thứ 4',
        nam: 'Thứ 5',
        sau: 'Thứ 6',
        bay: 'Thứ 7',
        cn: 'Chủ nhật',
      },
      layThatBai: 'Lấy thông tin học viên thật bại!',
      layThatBai2: 'Lấy thông tin lịch học thật bại!',
      layThatBai3: 'Lấy dữ liệu thật bại!',
      layThatBai4: 'Vui lòng điền thông tin người giới thiệu!',
      layThatBai5: 'Cập nhật thông tin cá nhân thành công!',
      layThatBai6: 'Cập nhật thông tin cá nhân thất bại!',
      layThatBai7: 'Cần chọn ít nhất 3 ca học/tuần!',
      layThatBai8: 'Vui lòng điền đủ thông tin!',
      layThatBai9: 'Upload ảnh thất bại!',
      layThatBai10: 'Upload ảnh thành công!',
    },
    tienTrinhHoc: {
      intro: 'Giới thiệu',
      koBiet: 'Không xác định',
      batDau: 'Bắt đầu',
      tiepTuc: 'Tiếp tục',
      kxd: 'KXĐ',
      timeOut: 'Đã hết thời gian giới hạn môn',
      mucTieu: 'Mục tiêu',
      conLai: 'Còn lại',
      ngay: 'ngày',
      daHetThoiGianGioiHan: 'Đã hết thời gian giới hạn',
      gioiHanKo: 'Giới hạn không',
      gioiHan: 'Giới hạn:',
      ngay2: ' Ngày',
      ko: 'Không',
      phanTramHoanThanh: '% Hoàn thành',
      chuaCoMonHoc: 'Chưa có môn học',
      khoaHocCuaToi: 'Khóa học của tôi',
      daCoLoi: 'Đã có lỗi xảy ra!',
      hoanThanh: 'Hoàn thành',
      koXacDinh: 'Không xác định',
      layThongTinKhoaHocThatBai: 'Lấy thông tin khóa học thất bại!',
    },
    vaoHoc: {
      clickDeXem: 'Click để xem',
      taiXuong: 'Tải xuống',
      batBuocLam: 'Bắt buộc làm',
      koBatBuocLam: 'Không bắt buộc làm',
      koTimThayBaiTap: 'Không tìm thấy bài tập',
      uuTien: 'Ưu tiên',
      tatCa: 'Tất cả',
      tinhTrangLamBaiTap: 'Tình trạng làm bài tập',
      dung: 'Đúng',
      sai: 'Sai',
      doi: 'Đợi',
      chuaHoanThanh: 'Chưa hoàn thành',
      phanHoc: 'Phần học',
      khoaHocCuaToi: 'Khóa học của tôi',
      layThatBai: 'Lấy thông tin đăng ký học thất bại!',
      layThatBai2: 'Lấy thông tin khóa học thất bại!',
      layThatBai3: 'Lấy thông tin môn học thất bại!',
      layThatBai4: 'Lấy thông tin chi tiết môn học thất bại!',
      layThatBai6: 'Không thể mở video!',
      layThatBai7: 'Hiện tại chưa có video!',
      tinhTrangLamBaiTap2: {
        hoanThanh: 'Hoàn thành',
        sai: 'Sai ',
        doiReview: 'Đợi review',
        lamBai: 'Làm bài',
      },
      doKho: {
        de: 'Dễ',
        trungBinh: 'Trung bình',
        kho: 'Khó',
        tongHop: 'Tổng hợp',
        koXacDinh: 'Không xác định',
      },
    },
  },
  newsFeed: {
    createPost: {
      thoiGianDaHoc: 'Thời gian đã học',
      soBuoiDaThamGia: 'Số buổi đã tham gia',
      soBuoiNghi: 'Số buổi nghỉ',
      baiTapDaLam: 'Số bài tập đã làm',
      monHocHienTai: 'Môn học hiện tại',
      holder: 'Bạn đang nghĩ gì thế?',
      img: 'Hình ảnh',
      react: 'Cảm xúc',
    },
    chatBotFeedBack: {
      title: 'Quản lí đánh giá AI hỗ trợ',
      searchPlaceholder: 'Tìm kiếm',
      searchTitle: 'Nhấn enter để tìm kiếm',
      filterItemAll: 'Tất cả',
      headerItemStudent: 'Học viên',
      headerItemQuestion: 'Câu hỏi',
      headerItemAnswer: 'Câu trả lời',
      headerItemRate: 'Đánh giá',
      headerItemRateDate: 'Ngày đánh giá',
      headerItemDescription: 'Mô tả',
      btnTitleShowContent: 'Hiển thị',
      titleShowLength: 'Hiển thị',
    },
    thongTinCaNhan: {
      title: 'Thông tin',
      subTitle1: 'Thông tin tài khoản',
      subTitle2: 'Thông tin cá nhân',
      subTitle3: 'Địa chỉ',
      subTitle4: 'Mạng xã hội',
      userName: 'Tên đăng nhập',
      fullName: 'Họ tên',
      updateAvatarBtn: 'Thay đổi ảnh',
      addAvatarBtn: 'Thêm Avatar',
      email: 'Email',
      phoneNumber: 'Số điện thoại',
      dateOfBirth: 'Ngày sinh',
      city: 'Tỉnh thành',
      school: 'Trường cao đẳng/Đại học',
      district: 'Quận/Huyện',
      specialized: 'Chuyên ngành',
      commune: 'Xã',
      studentsInSome: 'Năm thứ',
      apartmentNumber: 'Số nhà',
      knowAboutLotusThrough: 'Biết về Lotus qua',
      referencePerson: 'Người giới thiệu',
      referencePersonName: 'Tên người giới thiệu',
      studyTime: 'Thời gian học (Tối thiểu 4 ca/tuần)',
      session: 'Buổi',
      morning: 'Sáng',
      afternoon: 'Chiều',
      evening: 'Tối',
      monday: 'Thứ 2',
      tuesday: 'Thứ 3',
      wednesday: 'Thứ 4',
      thursday: 'Thứ 5',
      friday: 'Thứ 6',
      saturday: 'Thứ 7',
      sunday: 'Chủ nhật',
      save: 'Lưu thay đổi',
      breadcrumbsTextHome: 'Trang chủ',
      breadcrumbsTextInformation: 'Thông tin',
      retrievingStudentInformationFailed: 'Lấy thông tin học viên thất bại',
      retrievingClassScheduleInformationFailed: 'Lấy thông tin lịch học thất bại',
      retrieveDataFailed: 'Lấy dữ liệu thất bại',
      pleaseFillInTheReferrerIsName: 'Vui lòng điền tên người giới thiệu',
      updatedPersonalInformationSuccessfully: 'Cập nhật thông tin thành công',
      updatingPersonalInformationFailed: 'Cập nhật thông tin thất bại',
      needToChooseAtLeastThreeClassesPerWeek: 'Cần chọn ít nhất 3 ca học/tuần',
      pleaseFillInAllInformation: 'Vui lòng điền đủ thông tin',
      pleaseChooseAFileSmallerThanOneMB: 'Vui lòng chọn file nhỏ hơn 1MB',
      imageUploadFailed: 'Tải ảnh lên thất bại',
      theUploadedFileIsInvalid: 'File tải lên không hợp lệ',
    },
  },
  quanLy: {
    chatBotFeedBack: {
      title: 'Quản lí đánh giá AI hỗ trợ',
      searchPlaceholder: 'Tìm kiếm',
      searchTitle: 'Nhấn enter để tìm kiếm',
      filterItemAll: 'Tất cả',
      headerItemStudent: 'Học viên',
      headerItemQuestion: 'Câu hỏi',
      headerItemAnswer: 'Câu trả lời',
      headerItemRate: 'Đánh giá',
      headerItemRateDate: 'Ngày đánh giá',
      headerItemDescription: 'Mô tả',
      btnTitleShowContent: 'Hiển thị',
      titleShowLength: 'Hiển thị',
    },
    chatBotMa: {
      title: 'Quản lí AI hỗ trợ',
      searchPlaceholder: 'Tìm kiếm',
      searchTitle: 'Nhấn enter để tìm kiếm',
      filterItemAll: 'Tất cả',
      column1: 'Thao tác',
      column2: 'Mã chatBot',
      column3: 'Học viên',
      column4: 'Ngày tạo',
      column5: 'Số lượt đã dùng',
      column6: 'Trạng thái',
      btnTitleShowContent: 'Hiển thị',
      titleShowLength: 'Hiển thị',
    },
    danhGiaCuaToi: {
      diemTrungbinhTitle: 'Điểm trung bình tất cả các khóa học',
      anCacMonChuaHoc: 'Ẩn các môn chưa học',
      logic: 'Logic',
      algorithmicThinking: 'Tư duy',
      userInteraction: 'Tương tác người dùng',
      errorHandlingandExceptions: 'Xử lí lỗi',
      relativePerformance: 'Hiệu năng',
      clarityandSimplicity: 'Sự rõ ràng',
      danhGiaTatCa: 'Đánh giá tất cả',
    },
    chatBot: {
      xemVideoHuongDanTitle: 'Xem video hướng dẫn',
    },
    feedBack: {
      moTa: 'Mô tả',
      danhGia: 'Đánh giá',
      huy: 'Hủy',
      thongBaoThanhCong: 'Đánh giá thành công',
      thongBaoThatBai: 'Đánh giá thất bại',
    },
  },
};
const checkRoles = (roles: any) => {
  if (myRoles) {
    for (let i = 0; i < roles.length; i++) {
      if (myRoles.indexOf(roles[i]) !== -1) return true;
    }
  }
  return false;
};
const menus = [
  {
    icon: 'newspaper',
    title: language?.navBar?.newFeed,
    show: true,
    link: '/',
    items: [],
  },
  {
    icon: 'user',
    title: language.navBar.userInfomation,
    show: true,
    link: '/hocvien/thongtincanhan',
    items: [],
  },
  {
    icon: 'user-graduate',
    title: language.navBar.student.title,
    show: checkRoles(['HocVien']),
    link: '/',
    items: [
      {
        icon: 'marker',
        title: language.navBar.student.sub.attandance,
        link: '/hocvien/diemdanh',
        show: checkRoles(['HocVien']),
      },
      {
        icon: 'marker',
        title: language.navBar.student.sub.myCourse,
        show: checkRoles(['HocVien']),
        link: '/hocvien/khoahoc',
      },
      {
        icon: 'comment-dots',
        title: language.navBar.student.sub.chatBot,
        link: '/hocvien/chatbot',
        show: checkRoles(['HocVien']),
      },
      {
        icon: 'chart-pie',
        title: language.navBar.student.sub.danhGia,
        show: checkRoles(['HocVien']),
        link: '/hocvien/danhgiacuatoi',
      },
    ],
  },
  {
    icon: 'user-tie',
    title: language.navBar.mentor.title,
    show: checkRoles(['TroGiang']),
    link: '/',
    items: [
      {
        icon: 'user-graduate',
        title: language.navBar.mentor.sub.myStudent,
        show: checkRoles(['TroGiang']),
        link: '/my-students',
      },
      {
        icon: 'users-rectangle',
        title: language.navBar.mentor.sub.takeCare,
        show: checkRoles(['TroGiang']),
        link: '/giamsat/hocvien',
      },
      {
        icon: 'circle-check',
        title: language.navBar.mentor.sub.studentAttendance,
        link: '/giamsat/diemdanhhocvien',
        show: checkRoles(['TroGiang']),
      },
      {
        icon: 'rectangle-list',
        title: language.navBar.mentor.sub.assignStudent,
        show: checkRoles(['TroGiang']),
        link: '/giamsat/phanconghocvien',
      },
    ],
  },
  {
    icon: 'users',
    title: language.navBar.user.title,
    show: checkRoles(['Admin']),
    link: '/',
    items: [
      {
        icon: 'rectangle-list',
        title: language.navBar.user.sub.listStudent,
        show: checkRoles(['Admin']),
        link: '/nguoidung/quanlyhocvien',
      },
      {
        icon: 'clipboard-list',
        title: language.navBar.user.sub.listAccount,
        show: checkRoles(['Admin']),
        link: '/nguoidung/quanlytaikhoan',
      },
    ],
  },
  {
    icon: 'file-word',
    title: language.navBar.content.title,
    show: checkRoles(['Admin']),
    link: '/noidung',
    items: [
      {
        icon: 'window-maximize',
        title: language.navBar.content.sub.information,
        show: checkRoles(['Admin']),
        link: '/noidung/thongtin',
      },
      {
        icon: 'train-subway',
        title: language.navBar.content.sub.subjects,
        show: checkRoles(['Admin']),
        link: '/noidung/monhoc',
      },
      {
        icon: 'clipboard-list',
        title: language.navBar.content.sub.courses,
        show: checkRoles(['Admin']),
        link: '/noidung/khoahoc',
      },
      {
        icon: 'video',
        title: language.navBar.content.sub.video,
        show: checkRoles(['Admin']),
        link: '/noidung/videobaigiang',
      },
    ],
  },
  {
    icon: 'screwdriver-wrench',
    title: language.navBar.manage.title,
    show: checkRoles(['Admin']),
    link: '/quanly',
    items: [
      {
        icon: 'clipboard-list',
        title: language.navBar.manage.sub.assign,
        link: '/assignments',
        show: checkRoles(['Admin']),
      },
      {
        icon: 'clock-rotate-left',
        title: language.navBar.manage.sub.history,
        link: '/lich-su-truy-cap',
        show: checkRoles(['Admin']),
      },
      {
        icon: 'list-check',
        title: language.navBar.manage.sub.takeCareAttandance,
        link: '/giamsat/diemdanh',
        show: checkRoles(['Admin']),
      },
      {
        icon: 'check',
        title: language.navBar.manage.sub.studentAttandance,
        link: '/giamsat/diemdanhhocvien',
        show: checkRoles(['Admin']),
      },
      {
        icon: 'building',
        title: language.navBar.manage.sub.center,
        show: checkRoles(['Admin']),
        link: '/quanly/trungtam',
      },
      {
        icon: 'table-list',
        title: language.navBar.manage.sub.commonManage,
        show: checkRoles(['Admin']),
        link: '/quanly/quanlychung',
      },
      {
        icon: 'face-smile',
        title: language.navBar.manage.sub.chatBot,
        link: '/quanly/chatbot',
        show: checkRoles(['Admin']),
      },
      {
        icon: 'comments',
        title: language.navBar.manage.sub.chatBotFeedBack,
        link: '/quanly/chatbotfeedback',
        show: checkRoles(['Admin']),
      },
    ],
  },
  {
    icon: 'list-ol',
    title: language.navBar.testOnline.title,
    show: true,
    link: '/',
    items: [
      {
        icon: 'marker',
        title: language.navBar.testOnline.sub.check,
        show: checkRoles(['HocVien']),
        link: '/thu-vien-de-thi',
      },
      {
        icon: 'marker',
        title: language.navBar.testOnline.sub.testLibrary,
        show: checkRoles(['Admin']),
        link: '/quanly/dethi',
      },
      {
        icon: 'circle-question',
        title: language.navBar.testOnline.sub.quizLibrary,
        show: checkRoles(['Admin']),
        link: '/quanly/khocauhoi',
      },
      {
        icon: 'cog',
        title: language.navBar.testOnline.sub.settingManage,
        show: checkRoles(['Admin']),
        link: '/quanly/test-online/cai-dat',
      },
    ],
  },
  {
    icon: 'calendar-check',
    title: language.navBar.job.title,
    show: true,
    link: '/congviec',
    items: [
      {
        icon: 'briefcase',
        title: language.navBar.job.sub.jobGroupManage,
        show: checkRoles(['Admin']),
        link: '/congviec/quanlynhomviec',
      },
      {
        icon: 'cogs',
        title: language.navBar.job.sub.setting,
        show: checkRoles(['Admin']),
        link: '/congviec/cauhinh',
      },
      {
        icon: 'users',
        title: language.navBar.job.sub.myJobGroup,
        show: checkRoles(['HocVien']),
        link: '/congviec/nhomvieccuatoi',
      },
    ],
  },
  {
    icon: 'toolbox',
    title: language.navBar.marketingTools.title,
    show: checkRoles(['Admin', 'Marketing']),
    link: '/',
    items: [
      {
        icon: 'message',
        title: language.navBar.marketingTools.sub.templateMessage,
        show: checkRoles(['Admin', 'Marketing']),
        link: '/marketing-tools/mau-tin-nhan',
      },
      {
        icon: 'user-graduate',
        title: language.navBar.marketingTools.sub.studentInterested,
        show: checkRoles(['Admin', 'Marketing']),
        link: '/marketing-tools/hoc-vien-quan-tam',
      },
    ],
  },
];

const onOpenChange = (keys: any) => {
  state.openKeys = keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys;
};
const onClick = (item: { keyPath: any }) => {
  if (item.keyPath.length === 1) state.openKeys = [];
};

watchEffect(() => {
  if (router.value.matched.length) {
    if (router.value.matched.length > 2) {
      state.selectedKeys = [router.value.matched[2]?.name].filter((x) => x !== undefined) as string[];
      state.openKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
      state.preOpenKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
    } else if (router.value.matched.length > 3) {
      state.selectedKeys = [router.value.matched[3]?.name].filter((x) => x !== undefined) as string[];
      state.openKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
      state.preOpenKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
    } else {
      state.selectedKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
      state.openKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
      state.preOpenKeys = [router.value.matched[1]?.name].filter((x) => x !== undefined) as string[];
    }
  }
});

watch(
  () => state.openKeys,
  (val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);
</script>

<template>
  <a-menu
    :open-keys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    :mode="mode"
    :theme="darkMode ? 'dark' : 'light'"
    class="scroll-menu"
    @openChange="onOpenChange"
    @click="onClick"
  >
    <!-- {{ menus }} -->
    <template v-for="menu in menus">
      <a-menu-item :key="menu.title" @click="toggleCollapsed" v-if="menu?.items?.length === 0">
        <template #icon>
          <font-awesome-icon
            class="super-crazy-colors"
            :icon="menu.icon"
            size="1x"
            :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
          />
        </template>
        <router-link class="large-text" :to="menu.link">{{ menu.title }}</router-link>
      </a-menu-item>
      <a-sub-menu :key="menu?.title" v-else-if="menu.show">
        <template #icon>
          <font-awesome-icon
            class="super-crazy-colors"
            :icon="menu.icon"
            size="2x"
            :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
          />
        </template>
        <template style="font-size: 1rem !important" #title>
          <span class="large-text">{{ menu.title }}</span></template
        >
        <a-menu-item @click="toggleCollapsed" :key="submenu.title" v-for="submenu in menu?.items">
          <router-link :to="submenu.link" class="large-text">
            <font-awesome-icon
              class="super-crazy-colors"
              :icon="submenu.icon"
              size="2x"
              :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
            />&ensp;{{ submenu.title }}
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>
<style>
.large-text {
  font-size: 14px !important; /* Thay đổi giá trị này để điều chỉnh kích thước chữ */
}
</style>
