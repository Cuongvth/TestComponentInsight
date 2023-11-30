<script setup lang="tsx">
import { computed, onMounted, ref, nextTick } from 'vue';
import { Main } from '../styled';
import DataCourse from './Data';
import FromEditTaiKhoang from '../forms/overview/FromEditTaiKhoang.vue';
import DataAccount from './DataTaiKhoang';
import DataTables from '@/components/table/QuanLyTaiKhoangTables.vue';
import { BorderLessHeading } from '../styled';
import { useStore } from 'vuex';

const dataTableColumn = [
  {
    title: 'Tài Khoảng',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'trangThaiHocVien',
  },
  {
    title: 'STD',
    dataIndex: 'phoneNumberConfirmed',
    key: 'phoneNumberConfirmed',
  },
  {
    title: 'Quyền',
    dataIndex: 'roles',
    key: 'roles',
  },
  {
    title: 'TG Học đến',
    dataIndex: 'lockoutEnd',
    key: 'lockoutEnd',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
  },
];

const { state, dispatch } = useStore();
const open = ref<boolean>(false);
const isEdit = ref<boolean>(true);
const dataCurent = ref<any>({
  lockoutEnd: '',
  twoFactorEnabled: false,
  phoneNumberConfirmed: false,
  emailConfirmed: false,
  normalizedEmail: '',
  email: '',
  normalizedUserName: '',
  userName: '',
  id: '',
  lockoutEnabled: true,
  accessFailedCount: 0,
  roles: [],
});
const showModal = (item: any, edit: boolean) => {
  if (edit) {
    isEdit.value = true;
    dataCurent.value = { ...item };
  } else {
    isEdit.value = false;
    dataCurent.value = {
      lockoutEnd: '',
      twoFactorEnabled: false,
      phoneNumberConfirmed: false,
      emailConfirmed: false,
      normalizedEmail: '',
      email: '',
      normalizedUserName: '',
      userName: '',
      id: '',
      lockoutEnabled: true,
      accessFailedCount: 0,
      roles: [],
    };
  }
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  open.value = false;
};
const isActive = ref(-1);
const activeModule = (id: number) => {
  if (id === isActive.value) {
    return true;
  }
  return false;
};
const formatDate = (dateString: string) => {
  var date = new Date(dateString);

  var day = date.getDate();
  var month = date.getMonth() + 1; // JavaScript months are 0-11
  var year = date.getFullYear();

  // pad with a zero if single digit
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return day + '/' + month + '/' + year;
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
  const data = DataAccount;
  console.log(DataAccount);
  return data.map((item: any) => {
    const {
      twoFactorEnabled,
      phoneNumberConfirmed,
      emailConfirmed,
      normalizedEmail,
      email,
      normalizedUserName,
      userName,
      id,
      lockoutEnabled,
      accessFailedCount,
      lockoutEnd,
      roles,
    } = item;
    return {
      userName,
      email,
      phoneNumberConfirmed,
      roles: (
        <div class="row-course">
          {roles.map((itemCourse: any) => {
            return <span class={`ninjadash-status ninjadash-status-${itemCourse}`}>{itemCourse}</span>;
          })}
        </div>
      ),
      lockoutEnd: lockoutEnd ? formatDate(lockoutEnd) : '',
      action: (
        <div class="table-actions">
          <a-popconfirm
            title="Cho Mày cơ hội cuối cùng xóa hay không?"
            ok-text="Xóa."
            cancel-text="Thôi"
            confirm="confirm"
            cancel="cancel"
          >
            <a>
              <unicon name="trash"></unicon>
            </a>
          </a-popconfirm>
          <a>
            <unicon onClick={() => showModal(item, true)} name="edit"></unicon>
          </a>
        </div>
      ),
    };
  });
});
</script>

<template>
  <div>
    <sdPageHeader title="Quản lý người dùng" class="ninjadash-page-header-main" />
    <Main>
      <a-row :gutter="15">
        <a-modal
          v-model:visible="open"
          :title="isEdit ? 'Cập nhật' : 'Tạo tài khoảng'"
          @ok="handleOk"
          :cancel-button-props="{ style: { display: 'none' } }"
          :ok-button-props="{ style: { display: 'none' } }"
          width="40rem"
        >
          <FromEditTaiKhoang :isEdit="isEdit" :dataCurent="dataCurent" />
        </a-modal>
        <a-col :xs="24">
          <BorderLessHeading>
            <sdCards title="Danh sách tài khoảng">
              <DataTables
                :onEvent="showModal"
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
