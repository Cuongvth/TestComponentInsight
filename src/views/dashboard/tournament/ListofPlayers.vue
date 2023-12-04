<template>
  <div>
    <Main>
      <sdButton @click="showModal(true)" size="sm" type="primary">Admin</sdButton>
      <sdButton @click="showModal(false)" size="sm" type="primary">User</sdButton>
      <sdModal :visible="open" title="Basic Modal" width="1500px" :onCancel="handleCancel">
        <div style="max-height: calc(100vh - 250px); overflow-y: scroll; padding: 0 20px">
          <sdButton style="float: right; margin-bottom: 10px" @click="showAll = !showAll">
            <span>{{ showAll ? 'Hiển thị tất cả' : 'Hiển thị top 10' }}</span
            ><span> </span>
            <unicon name="align-center-alt"></unicon>
          </sdButton>
          <a-table
            class="table-responsive table-data"
            :pagination="false"
            :columns="columns"
            :data-source="showAll ? data : data.slice(0, 10)"
          >
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'key'">
                <img v-if="getRankingStyle(text).icon" :src="getRankingStyle(text).icon" style="width: 30px" />
                <span v-else>{{ text }}</span>
              </template>
              <template v-else-if="column.dataIndex === 'hocVien'">
                <a-row :gutter="[16, 10]">
                  <a-col :span="5" :xxl="5" :xl="5" :lg="24" :md="24" :sm="24" :xs="24">
                    <div style="display: flex; justify-content: center; align-items: center; height: 100%">
                      <img
                        style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover"
                        :src="text.avatar"
                      />
                    </div>
                  </a-col>
                  <a-col :span="5" :xxl="5" :xl="5" :lg="24" :md="24" :sm="24" :xs="24">
                    <div>
                      <p style="margin: 0">
                        {{ text.name }}
                      </p>
                      <span>{{ text.email }}</span>
                    </div>
                  </a-col>
                </a-row>
              </template>
              <template v-else-if="column.dataIndex === 'thaoTac'">
                <div style="display: flex; justify-content: space-around; align-items: center; width: 100%">
                  <sdButton
                    style="float: right; margin-bottom: 10px"
                    size="default"
                    shape="circle"
                    type="primary"
                    @click="showItem(text)"
                  >
                    <span>Xem lại</span><span> </span>
                    <unicon name="align-center-alt"></unicon>
                  </sdButton>
                  <sdButton
                    style="float: right; margin-bottom: 10px"
                    size="default"
                    shape="circle"
                    type="primary"
                    @click="deleteItem(text)"
                  >
                    <span>Xóa</span><span> </span>
                    <unicon name="align-center-alt"></unicon>
                  </sdButton>
                </div>
              </template>
              <template v-else-if="column.dataIndex === 'ngayDangKi'">
                {{ dayjs(text).locale('en').format('MMMM DD, YYYY') }}
              </template>
            </template>
          </a-table>
        </div>
      </sdModal>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../styled';
import Mock from 'mockjs';
import { ref } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

const open = ref(false);
const showAll = ref(false);

const showModal = (event: any) => {
  open.value = true;
  columns.value = columns.value.filter((c) => c.key !== 'thaoTac');
  if (event) {
    columns.value.push({
      title: 'Thao tác',
      dataIndex: 'thaoTac',
      key: 'thaoTac',
    });
  }
};

const handleCancel = () => {
  open.value = false;
};

const showItem = (event: any) => {
  console.log(event);
};

const deleteItem = (event: any) => {
  data.value = data.value.filter((c) => c.thaoTac !== event);
};

const getRankingStyle = (order: any) => {
  let color, icon;
  switch (order) {
    case 1:
      color = '#feaa2b';
      icon = 'https://cdn-icons-png.flaticon.com/512/5406/5406792.png';
      break;
    case 2:
      color = '#9e9e9e';
      icon = 'https://cdn-icons-png.flaticon.com/512/2583/2583319.png';
      break;
    case 3:
      color = '#ce7430';
      icon = 'https://cdn-icons-png.flaticon.com/512/2583/2583434.png';
      break;
    default:
      color = '#000000';
  }
  return { color, icon };
};

const generateFakeData = (count: number) => {
  const dataSource = [];

  for (let i = 1; i <= count; i++) {
    const fakeData = Mock.mock({
      key: i,
      thaoTac: i,
      hocVien: {
        name: Mock.mock('@name'),
        email: '@string("lower", 5, 10)@mock.com',
        avatar: 'https://nemthuanviet.com/wp-content/uploads/2023/10/cho-long-xu-2.jpg',
      },
      title: '@pick(["Chiến thần", "Kỳ phùng địch thủ", "Độc cô cầu bại", "Thách đấu"])',
      elo: '@integer(10000, 99999)',
      ngayDangKi: '@date("yyyy-MM-dd", "30 days ago")',
      thoiGian: '@time("HH:mm:ss")',
    });

    dataSource.push(fakeData);
  }

  return dataSource;
};

const columns = ref([
  {
    title: 'Hạng',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Học viên',
    dataIndex: 'hocVien',
    key: 'hocVien',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Elo',
    dataIndex: 'elo',
    key: 'elo',
  },
  {
    title: 'Thời gian tham gia',
    dataIndex: 'thoiGian',
    key: 'thoiGian',
  },
  {
    title: 'Ngày đăng kí',
    dataIndex: 'ngayDangKi',
    key: 'ngayDangKi',
  },
]);

const data = ref(generateFakeData(50));
</script>

<style scoped>
.fiLpOL.fiLpOL {
  background: #eb763c !important;
}
</style>

<style>
.table-data .ant-table-thead > tr > th {
  background: #eb763c !important;
}

.table-data .ant-table-thead > tr > th {
  border-right: #f0f0f0 solid 1px !important;
}

.ant-table-filter-column,
.ant-table-column-sorters {
  justify-content: center;
  gap: 2px;
}

.table-data .ant-table-column-title {
  flex: 0;
}

.table-data .ant-table-thead > tr:first-child > th:first-child {
  border-top-left-radius: 8px !important;
}

.table-data .ant-table-thead > tr:last-child > th:last-child {
  border-top-right-radius: 8px !important;
  border-right: none;
}

.table-data .ant-table-tbody > tr:last-child > td:first-child {
  border-bottom-left-radius: 8px !important;
}

.table-data .ant-table-tbody > tr:last-child > td:last-child {
  border-bottom-right-radius: 8px !important;
}

.table-data .ant-table-cell {
  font-weight: 500 !important;
  text-align: center;
}

.table-data .ant-table-pagination {
  display: none !important;
}
</style>
