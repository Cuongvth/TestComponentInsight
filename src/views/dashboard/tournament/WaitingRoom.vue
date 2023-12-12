<template>
  <div style="height: calc(100vh - 125px); display: grid; grid-template-rows: auto 1fr auto">
    <div>
      <div style="padding: 20px 50px 0 30px">
        <a-row :gutter="[16, 30]">
          <a-col :span="12" :xxl="12" :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
            <div style="display: flex; justify-content: start; align-items: center; gap: 20px; height: 100%">
              <a-image :width="100" :src="giaiDau.hinhAnh" style="border-radius: 10px" />
              <div>
                <p style="font-size: xx-large; font-weight: 600; margin: 0">{{ giaiDau.tenGiaiDau }}</p>
                <p style="font-size: larger; font-weight: 600; margin: 0">
                  Số người: {{ giaiDau.user.length }}/ {{ giaiDau.gioiHanSoDoiThu }}
                </p>
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
                <p style="font-size: larger; font-weight: 600; margin: 0">#{{ giaiDau.key }}</p>
                <p style="font-size: larger; font-weight: 600; margin: 0; margin-top: 10px">
                  <sdButton
                    style="border: 2px solid #f0f0f0; border-radius: 10px; height: 30px"
                    @click="copyLink(giaiDau.link)"
                  >
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
                  {{ dayjs(giaiDau.thoiGianBatDau).locale('en').format('MMMM DD, YYYY HH:mm') }}
                </p>
                <p style="font-size: larger; font-weight: 600; margin: 0; margin-top: 10px">
                  {{ giaiDau.ngonNguLapTrinh.tenNgonNgu }}
                </p>
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
                <p style="font-size: larger; font-weight: 600; margin: 0">{{ giaiDau.thoiGianDau }} phút</p>
                <p style="font-size: larger; font-weight: 600; margin: 0; margin-top: 10px">{{ giaiDau.gioiHanElo }}</p>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div style="display: flex; justify-content: end; padding: 0 50px">
        <ListofPlayers style="margin-bottom: 10px" :giai-dau-id="giaiDauId" />
      </div>
    </div>
    <div style="overflow-y: scroll; margin-bottom: 20px">
      <Main>
        <a-table class="table-responsive table-data" :pagination="pagination" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'hocVien'">
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
            <template v-else-if="column.dataIndex === 'trangThai'">
              <sdButton v-if="text === 1" size="default" shape="circle" type="primary" class="btn-cho">
                Đã tham gia
              </sdButton>
              <sdButton v-else size="default" shape="circle" type="primary" class="btn-dathamgia"> Đang chờ </sdButton>
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
    <div style="display: flex; justify-content: end; margin-bottom: 10px; margin-right: 45px">
      <sdButton shape="circle" style="border-width: 2px; margin-right: 10px">Rút khỏi giải đấu</sdButton>
      <sdButton shape="circle" style="border-width: 2px" disabled> Bắt đầu sau: {{ '10 phút 35 giây' }} </sdButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../styled';
import Mock from 'mockjs';
import { ref } from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import ListofPlayers from './ListofPlayers.vue';
import * as useAPI from './useAPI';

const giaiDauId = 2;

const copyLink = (link: any) => {
  navigator.clipboard.writeText(link);
  alert('Copied the text: ' + link);
};

const columns = [
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
    sorter: (a: any, b: any) => a.elo - b.elo,
  },
  {
    title: 'Xếp hạng LTS',
    dataIndex: 'xepHang',
    key: 'xepHang',
    sorter: (a: any, b: any) => a.xepHang - b.xepHang,
  },
  {
    title: 'Trạng thái',
    dataIndex: 'trangThai',
    key: 'trangThai',
    filters: [
      { text: 'Đang chờ', value: 0 },
      { text: 'Đã tham gia', value: 1 },
    ],
    onFilter: (value: any, record: any) => record.trangThai === value,
  },
];
const giaiDau = (await useAPI.loadUserOfTournament(giaiDauId)).data;
const data = giaiDau.user
  .sort((a: any, b: any) => a.elo - b.elo)
  .map((c: any, index: any) => ({
    xepHang: index + 1,
    hocVien: {
      name: c.name,
      email: c.email,
      avatar: c.avatar,
    },
    title: c.danhHieu,
    elo: c.elo,
    trangThai: Mock.mock('@integer(0, 1)'),
  }));

const pagination = ref({
  total: data.length,
  current: 1,
  pageSize: 25,
});
</script>

<style scoped>
.btn-cho {
  background: #3895ff !important;
  width: 100%;
  max-width: 200px;
}

.btn-dathamgia {
  background: #ffc000 !important;
  width: 100%;
  max-width: 200px;
}
</style>
