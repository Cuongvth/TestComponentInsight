<template>
  <div style="height: calc(100vh - 130px)">
    <div style="height: 100%; overflow-y: scroll">
      <sdPageHeader :title="'Bảng xếp hạng'" class="ninjadash-page-header-main"></sdPageHeader>
      <Main>
        <a-table class="table-responsive table-data" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'key'">
              <img v-if="getRankingStyle(text).icon" :src="getRankingStyle(text).icon" style="width: 30px" />
              <span v-else>{{ text }}</span>
            </template>
          </template>
        </a-table>
      </Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../styled';
import Mock from 'mockjs';

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
      name: Mock.mock('@name'),
      elloCoding: '@integer(10000, 99999)',
      appellation: '@pick(["Chiến thần", "Kỳ phùng địch thủ", "Độc cô cầu bại", "Thách đấu"])',
      contestEntered: '@integer(100, 1000)',
    });

    dataSource.push(fakeData);
  }

  return dataSource;
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
    dataIndex: 'elloCoding',
    key: 'elloCoding',
  },
  {
    title: 'Họ tên',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    title: 'Danh hiệu',
    dataIndex: 'appellation',
    key: 'appellation',
    filters: [
      { text: 'Chiến thần', value: 'Chiến thần' },
      { text: 'Kỳ phùng địch thủ', value: 'Kỳ phùng địch thủ' },
      { text: 'Độc cô cầu bại', value: 'Độc cô cầu bại' },
      { text: 'Thách đấu', value: 'Thách đấu' },
    ],
    onFilter: (value: any, record: any) => record.appellation === value,
  },
  {
    title: 'Cuộc thi đã tham gia',
    dataIndex: 'contestEntered',
    key: 'contestEntered',
    sorter: (a: any, b: any) => a.contestEntered - b.contestEntered,
  },
];
const data = generateFakeData(1000);
</script>

<style>
.table-data .ant-table-thead > tr > th {
  background: #eb763c !important;
}

.table-data .ant-table-thead > tr:first-child > th:first-child {
  border-top-left-radius: 8px !important;
}

.table-data .ant-table-thead > tr:last-child > th:last-child {
  border-top-right-radius: 8px !important;
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
</style>
