<template>
  <div style="height: calc(100vh - 125px); display: grid; grid-template-rows: auto 1fr auto">
    <div>
      <sdPageHeader :title="'Bảng xếp hạng'" class="ninjadash-page-header-main"></sdPageHeader>
      <div style="display: flex; justify-content: end; padding: 0 50px">
        <sdButton style="margin-bottom: 10px">
          <span>Bộ lọc</span><span> </span>
          <unicon name="align-center-alt"></unicon>
        </sdButton>
      </div>
    </div>
    <div style="overflow-y: scroll; margin-bottom: 20px">
      <Main>
        <a-table class="table-responsive table-data" :pagination="pagination" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'key'">
              <img v-if="getRankingStyle(text).icon" :src="getRankingStyle(text).icon" style="width: 30px" />
              <span v-else>{{ text }}</span>
            </template>
          </template>
        </a-table>
      </Main>
    </div>
    <div style="display: flex; justify-content: end; padding: 0 45px; margin-bottom: 10px">
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
import * as useAPI from './useAPI';

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

const columns = [
  {
    title: 'Xếp hạng',
    dataIndex: 'key',
    key: 'key',
    sorter: (a: any, b: any) => a.key - b.key,
  },
  {
    title: 'Ello Coding',
    dataIndex: 'elo',
    key: 'elo',
  },
  {
    title: 'Họ tên',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    title: 'Danh hiệu',
    dataIndex: 'danhHieu',
    key: 'danhHieu',
    filters: [
      { text: 'Chiến thần', value: 'Chiến thần' },
      { text: 'Kỳ phùng địch thủ', value: 'Kỳ phùng địch thủ' },
      { text: 'Độc cô cầu bại', value: 'Độc cô cầu bại' },
      { text: 'Thách đấu', value: 'Thách đấu' },
    ],
    onFilter: (value: any, record: any) => record.danhHieu === value,
  },
  {
    title: 'Cuộc thi đã tham gia',
    dataIndex: 'cuocThiDaThamGia',
    key: 'cuocThiDaThamGia',
    sorter: (a: any, b: any) => a.cuocThiDaThamGia - b.cuocThiDaThamGia,
  },
];
const data = (await useAPI.loadUser()).data.map((c: any, index: any) => ({ key: index + 1, ...c }));

const pagination = ref({
  total: data.length,
  current: 1,
  pageSize: 25,
});
</script>
