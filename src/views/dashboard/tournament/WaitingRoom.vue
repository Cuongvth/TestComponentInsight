<template>
  <div style="height: calc(100vh - 125px); display: grid; grid-template-rows: auto 1fr auto">
    <div>
      <div style="padding: 20px 50px 0 30px">
        <a-row :gutter="[16, 30]">
          <a-col :span="12" :xxl="12" :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <div style="display: flex; justify-content: start; align-items: center; gap: 20px; height: 100%">
              <a-image
                :width="100"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style="border-radius: 10px"
              />
              <div>
                <p style="font-size: xx-large; font-weight: 600; margin: 0">Ngày thứ 3 đen tối</p>
                <p style="font-size: larger; font-weight: 600; margin: 0">Số người: 8/10</p>
              </div>
            </div>
          </a-col>
          <a-col :span="12" :xxl="12" :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <div style="display: flex; justify-content: start; align-items: center; gap: 50px; height: 100%">
              <div>
                <p style="font-size: larger; font-weight: 600; margin: 0">Mã giải đấu:</p>
                <p style="font-size: larger; font-weight: 600; margin: 0; margin-top: 10px">Mời bạn bè tham gia:</p>
              </div>
              <div>
                <p style="font-size: larger; font-weight: 600; margin: 0">#48166</p>
                <p style="font-size: larger; font-weight: 600; margin: 0; margin-top: 10px">
                  <sdButton style="border: 2px solid #f0f0f0; border-radius: 10px; height: 30px">
                    <span>Mời bạn bè</span><span> </span>
                    <unicon name="link"></unicon>
                  </sdButton>
                </p>
              </div>
            </div>
          </a-col>
          <a-col :span="12" :xxl="12" :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <div style="display: flex; justify-content: start; align-items: center; gap: 50px; height: 100%">
              <div>
                <p style="font-size: larger; font-weight: 600; margin: 0">Bắt đầu:</p>
                <p style="font-size: larger; font-weight: 600; margin: 0; margin-top: 10px">Ngôn ngữ:</p>
              </div>
              <div>
                <p style="font-size: larger; font-weight: 600; margin: 0">
                  {{ dayjs(new Date()).locale('en').format('MMMM DD, YYYY HH:mm') }}
                </p>
                <p style="font-size: larger; font-weight: 600; margin: 0; margin-top: 10px">JAVA</p>
              </div>
            </div>
          </a-col>
          <a-col :span="12" :xxl="12" :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <div style="display: flex; justify-content: start; align-items: center; gap: 50px; height: 100%">
              <div>
                <p style="font-size: larger; font-weight: 600; margin: 0">Thời gian đấu:</p>
                <p style="font-size: larger; font-weight: 600; margin: 0; margin-top: 10px">Elo tối thiểu:</p>
              </div>
              <div>
                <p style="font-size: larger; font-weight: 600; margin: 0">120 phút</p>
                <p style="font-size: larger; font-weight: 600; margin: 0; margin-top: 10px">Không</p>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div style="display: flex; justify-content: end; padding: 0 50px">
        <ListofPlayers style="margin-bottom: 10px" />
      </div>
    </div>
    <div style="overflow-y: scroll; margin-bottom: 20px">
      <Main>
        <a-table class="table-responsive table-data" :pagination="pagination" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'hocVien'">
              <a-row :gutter="[16, 10]">
                <a-col :span="5" :xxl="5" :xl="5" :lg="24" :md="24" :sm="24" :xs="24">
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%">
                    <img style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover" :src="text.avatar" />
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
            <template v-else-if="column.dataIndex === 'trangThai'">
              <sdButton
                v-if="text === 1"
                size="default"
                shape="circle"
                type="primary"
                style="border-radius: 50px"
                class="btn-cho"
              >
                Đã tham gia
              </sdButton>
              <sdButton
                v-else
                size="default"
                shape="circle"
                type="primary"
                style="border-radius: 50px"
                class="btn-dathamgia"
              >
                Đang chờ
              </sdButton>
            </template>
          </template>
        </a-table>
      </Main>
    </div>
    <div style="display: flex; justify-content: center; margin-bottom: 10px">
      <a-pagination
        v-model:current="pagination.current"
        v-model:pageSize="pagination.pageSize"
        :total="pagination.total"
        show-less-items
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../styled';
import Mock from 'mockjs';
import { ref } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import ListofPlayers from './listofplayers.vue';

const generateFakeData = (count: number) => {
  const dataSource = [];

  for (let i = 1; i <= count; i++) {
    const fakeData = Mock.mock({
      xepHang: i,
      hocVien: {
        name: Mock.mock('@name'),
        email: '@string("lower", 5, 10)@mock.com',
        avatar: 'https://nemthuanviet.com/wp-content/uploads/2023/10/cho-long-xu-2.jpg',
      },
      title: '@pick(["Chiến thần", "Kỳ phùng địch thủ", "Độc cô cầu bại", "Thách đấu"])',
      elo: '@integer(10000, 99999)',
      trangThai: '@integer(0, 1)',
    });

    dataSource.push(fakeData);
  }

  return dataSource;
};

const columns = [
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
    title: 'Xếp hạng LTS',
    dataIndex: 'xepHang',
    key: 'xepHang',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'trangThai',
    key: 'trangThai',
  },
];

const data = generateFakeData(1000);

const pagination = ref({
  total: data.length,
  current: 1,
  pageSize: 25,
});
</script>

<style scoped>
.btn-cho {
  background: #3895ff !important;
}

.btn-dathamgia {
  background: #ff4d4f !important;
}
</style>
