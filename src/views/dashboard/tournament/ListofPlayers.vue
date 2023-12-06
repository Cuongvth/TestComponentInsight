<template>
  <div>
    <sdButton @click="showModal(true)" size="default" shape="circle" type="primary" style="border-radius: 50px"
      >Danh sách người chơi</sdButton
    >
    <sdModal :visible="open" width="1500px" :onCancel="handleCancel">
      <div style="max-height: calc(100vh - 200px); overflow-y: scroll; padding: 0 20px">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <h3>Danh sách người tham gia</h3>
          <sdButton style="margin-bottom: 10px" @click="showAll = !showAll">
            <span>{{ showAll ? 'Ẩn bớt' : 'Hiển thị tất cả' }}</span
            ><span> </span>
            <unicon name="align-center-alt"></unicon>
          </sdButton>
        </div>
        <a-table
          class="table-responsive table-data table-data-list-player"
          :pagination="false"
          :columns="columns"
          :data-source="showAll ? data : data.slice(0, lengthShow)"
        >
          <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'key'">
              <img v-if="getRankingStyle(text).icon" :src="getRankingStyle(text).icon" style="width: 30px" />
              <span v-else>{{ text }}</span>
            </template>
            <template v-else-if="column.dataIndex === 'hocVien'">
              <a-row :gutter="[16, 10]">
                <a-col :span="4" :xxl="4" :xl="4" :lg="24" :md="24" :sm="24" :xs="24">
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%">
                    <img style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover" :src="text.avatar" />
                  </div>
                </a-col>
                <a-col :span="20" :xxl="20" :xl="20" :lg="24" :md="24" :sm="24" :xs="24">
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
                  size="default"
                  shape="circle"
                  type="primary"
                  @click="showItem(text)"
                  class="show-item"
                  style="border-radius: 50px"
                >
                  <span>Xem lại</span><span> </span>
                  <unicon name="align-center-alt"></unicon>
                </sdButton>
                <sdButton
                  size="default"
                  shape="circle"
                  type="primary"
                  @click="deleteItem(text)"
                  class="delete-item"
                  style="border-radius: 50px"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import * as useAPI from './useAPI';
import Mock from 'mockjs';

const open = ref(false);
const showAll = ref(false);
const lengthShow = ref(7);
const giaiDauId = 2;

const resizeWindow = () => {
  var newHeight = window.innerHeight;
  if (newHeight > 420 && newHeight <= 525) {
    lengthShow.value = 1;
  } else if (newHeight > 525 && newHeight <= 630) {
    lengthShow.value = 2;
  } else if (newHeight > 630 && newHeight <= 735) {
    lengthShow.value = 3;
  } else if (newHeight > 735 && newHeight <= 840) {
    lengthShow.value = 4;
  } else if (newHeight > 840 && newHeight <= 945) {
    lengthShow.value = 5;
  } else if (newHeight > 945) {
    lengthShow.value = 10;
  }
};

resizeWindow();

window.addEventListener('resize', resizeWindow);

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

const deleteItem = async (event: any) => {
  await loadData(await useAPI.deleteUserInGiaiDau(event, giaiDauId));
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

const convertToSeconds = (timeString: any) => {
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

const convertToDateValue = (dateString: any) => {
  const dateObject = new Date(dateString);
  return dateObject.getTime(); // Chuyển đổi thành giá trị timestamp
};

const columns = ref([
  {
    title: 'Số thứ tự',
    dataIndex: 'key',
    key: 'key',
    sorter: (a: any, b: any) => a.key - b.key,
  },
  {
    title: 'Học viên',
    dataIndex: 'hocVien',
    key: 'hocVien',
    sorter: (a: any, b: any) => a.hocVien.name.localeCompare(b.hocVien.name),
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    filters: [
      { text: 'Chiến thần', value: 'Chiến thần' },
      { text: 'Kỳ phùng địch thủ', value: 'Kỳ phùng địch thủ' },
      { text: 'Độc cô cầu bại', value: 'Độc cô cầu bại' },
      { text: 'Thách đấu', value: 'Thách đấu' },
    ],
    onFilter: (value: any, record: any) => record.title === value,
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
    sorter: (a: any, b: any) => convertToSeconds(a.thoiGian) - convertToSeconds(b.thoiGian),
  },
  {
    title: 'Ngày đăng kí',
    dataIndex: 'ngayDangKi',
    key: 'thoiGian',
    sorter: (a: any, b: any) => convertToDateValue(a.ngayDangKi) - convertToDateValue(b.ngayDangKi),
  },
]);

const loadData = async (lstData: any) => {
  data.value = lstData.data.user
    .sort((a: any, b: any) => a.elo - b.elo)
    .map((c: any, index: any) => ({
      key: index + 1,
      thaoTac: c.id,
      hocVien: {
        name: c.name,
        email: c.email,
        avatar: c.avatar,
      },
      title: c.danhHieu,
      elo: c.elo,
      ngayDangKi: Mock.mock('@date("yyyy-MM-dd", "30 days ago")'),
      thoiGian: Mock.mock('@time("HH:mm:ss")'),
    }));
};

const data = ref([]);

await loadData(await useAPI.loadUserOfTournament(giaiDauId));
</script>

<style scoped>
.show-item {
  background: #3895ff !important;
}

.delete-item {
  background: #ff4d4f !important;
}
</style>

<style>
.ant-modal-close {
  display: none !important;
}

.table-data-list-player .ant-table-cell {
  padding: 5px 10px !important;
}
</style>
