<script setup lang="tsx">
import { computed, onMounted, ref, nextTick } from 'vue';
import { Main } from '../styled';
import DataCourse from './Data';
import DataTables from '@/components/table/QuanLyHocVienTables.vue';
import { BorderLessHeading } from '../styled';
import { useStore } from 'vuex';

const dataTableColumn = [
  {
    title: 'Học Viên',
    dataIndex: 'hoTen',
    key: 'hoTen',
  },
  {
    title: 'Trạng thái học tập',
    dataIndex: 'trangThaiHocVien',
    key: 'trangThaiHocVien',
  },
  {
    title: 'STD',
    dataIndex: 'sdt',
    key: 'sdt',
  },
  {
    title: 'Các khóa học',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'TG Đã Học',
    dataIndex: 'thoiGianDaHoc',
    key: 'thoiGianDaHoc',
  },
  {
    title: 'Tiến độ',
    dataIndex: 'tenMonHocHienTai',
    key: 'tenMonHocHienTai',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
  },
];

const { state, dispatch } = useStore();
const isActive = ref(-1);
const activeModule = (id: number) => {
  if (id === isActive.value) {
    return true;
  }
  return false;
};
onMounted(() => dispatch('tableReadData'));
const dataModual: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const ShowModule = (id: number) => {
  const idActive = isActive.value === id ? 0 : id;
  nextTick(() => {
    console.log(idActive);
    isActive.value = idActive;
  });
  return;
};
const tableDataScource = computed(() =>
  state.dataTable.tableData.map((item: any) => {
    const { id, name, country, company, position, status, date } = item;
    return {
      hocVien: <span class="ninjadash-username">{name}</span>,
      trangThaiHocTap: <span>{country}</span>,
      STD: <span>{company}</span>,
      course: position,
      date,
      progress: <span class={`ninjadash-status ninjadash-status-${status}`}>{status}</span>,
      action: (
        <div class="table-actions">
          <router-link class="view" to={`#`}>
            <unicon name="eye"></unicon>
          </router-link>
          <router-link class="edit" to="#">
            <unicon name="edit"></unicon>
          </router-link>
          <router-link class="delete" to="#">
            <unicon name="trash"></unicon>
          </router-link>
        </div>
      ),
    };
  }),
);
const tableDataUser = computed(() => {
  const data = DataCourse;
  return data.map((item: any) => {
    const {
      id,
      hoTen,
      sdt,
      account,
      bietQuaFaceBook,
      bietQuaWeb,
      bietQuaGioiThieu,
      email,
      daDienDu,
      locked,
      thongTinHocTap,
      dangKyHoc,
      lyDoHocVienThamGia,
      trangThaiHocVien,
    } = item;
    return {
      hoTen: hoTen,
      trangThaiHocVien: (
        <span class={`ninjadash-status ninjadash-status-google`}>{trangThaiHocVien[0].trangThai.tenTrangThai}</span>
      ),
      sdt: sdt,
      course: (
        <div class="row-course">
          {dangKyHoc.map((itemCourse: any) => {
            return <span class={`ninjadash-status ninjadash-status-active`}>{itemCourse.tenKhoa}</span>;
          })}
        </div>
      ),
      thoiGianDaHoc: `${thongTinHocTap.thoiGianDaHoc ? Math.round(thongTinHocTap.thoiGianDaHoc.totalDays / 7) : 0}T / ${
        thongTinHocTap.soBuoiDaHoc
      }B`,
      tenMonHocHienTai: thongTinHocTap.tenMonHocHienTai || 'Chưa học khóa nào',
      action: (
        <div class="center">
          {!locked ? (
            <div>
              <unicon onClick={() => ShowModule(id)} name="setting" size="2em" color="red"></unicon>
            </div>
          ) : (
            <unicon size="2em" color="red"></unicon>
          )}
          <a-list bordered size="large" class={{ active: activeModule(id) }}>
            <a-list-item>
              {' '}
              <unicon name="create-dashboard"></unicon> <p>Dashboard</p>
            </a-list-item>
          </a-list>
        </div>
      ),
    };
  });
});
</script>

<template>
  <div>
    <sdPageHeader title="Danh sách người dùng" class="ninjadash-page-header-main" />
    <Main>
      <a-row :gutter="15">
        <a-col :xs="24">
          <BorderLessHeading>
            <sdCards title="quản lý tài khoảng">
              <DataTables
                :filterOption="true"
                :filterOnchange="true"
                :tableData="tableDataUser"
                :columns="dataTableColumn"
                :rowSelection="false"
              />
            </sdCards>
          </BorderLessHeading>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>
