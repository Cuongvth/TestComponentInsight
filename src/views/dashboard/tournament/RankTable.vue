<template>
  <div>
    <sdPageHeader :title="'Bảng xếp hạng'" class="ninjadash-page-header-main"></sdPageHeader>
    <Main>
      <div style="display: flex; justify-content: space-between; align-items: center">
        <div style="position: relative; background-color: #ecf0f3; border-radius: 25px; min-width: 20%">
          <a-input v-model:value="searchKeyword" placeholder="Tìm kiếm" />
          <div class="icon-search">
            <unicon name="search"></unicon>
          </div>
        </div>
        <div style="position: relative; background-color: #ecf0f3; border-radius: 25px; min-width: 8%">
          <sdButton
            size="default"
            shape="circle"
            type="primary"
            style="width: 100%; display: flex; justify-content: space-between; align-items: center"
          >
            <span>Bộ lọc</span>
            <unicon name="align-justify"></unicon>
          </sdButton>
        </div>
      </div>
      <a-table :dataSource="dataSource" :pagination="pagination" :columns="columns" class="table-data">
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'key'">
            <img v-if="getRankingStyle(text).icon" :src="getRankingStyle(text).icon" style="width: 30px" />
            <span v-else>{{ text }}</span>
          </template>
        </template>
      </a-table>
      <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 10px">
        <a-select
          ref="select"
          v-model:value="pageIndex"
          @change="handleChange"
          :options="pageOption"
          style="min-width: 250px"
        >
        </a-select>
      </div>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../styled';
import { ref } from 'vue';
import Mock from 'mockjs';

const searchKeyword = ref('');

const pageIndex = ref(1);

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

const handleChange = () => {
  pagination.value.current = pageIndex.value;
};

const generateFakeData = (count: number) => {
  const dataSource = [];

  for (let i = 1; i <= count; i++) {
    const fakeData = Mock.mock({
      key: i,
      name: Mock.mock('@name'),
      elloCoding: '@integer(10000, 99999)',
      courses: '@pick(["Java", "JavaScript", "Python", "CSharp"])',
      appellation: '@pick(["Chiến thần", "Kỳ phùng địch thủ", "Độc cô cầu bại", "Thách đấu"])',
      contestEntered: '@integer(100, 1000)',
    });

    dataSource.push(fakeData);
  }

  return dataSource;
};

const dataSource = generateFakeData(999)
  .sort((a, b) => b.elloCoding - a.elloCoding)
  .map((c, index) => ({
    key: index + 1,
    name: c.name,
    elloCoding: c.elloCoding,
    courses: c.courses,
    appellation: c.appellation,
    contestEntered: c.contestEntered,
  }));

const pagination = ref({
  total: dataSource.length,
  current: 1,
  pageSize: 25,
});

const generateArrayOfStrings = () => {
  var result = [];
  const pagination_total =
    dataSource.length % pagination.value.pageSize === 0
      ? dataSource.length / pagination.value.pageSize
      : Math.floor(dataSource.length / pagination.value.pageSize) + 1;
  for (let index = 1; index <= pagination_total; index++) {
    result.push({
      value: index,
      label: `Hiển thị ${(index - 1) * pagination.value.pageSize + 1} - ${Math.min(
        index * pagination.value.pageSize,
        dataSource.length,
      )} of ${dataSource.length}`,
    });
  }
  return result;
};

const pageOption = generateArrayOfStrings();

const columns = [
  {
    title: 'Xếp hạng',
    dataIndex: 'key',
    key: 'key',
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
  },
  {
    title: 'Khóa học',
    dataIndex: 'courses',
    key: 'courses',
  },
  {
    title: 'Danh hiệu',
    dataIndex: 'appellation',
    key: 'appellation',
  },
  {
    title: 'Cuộc thi đã tham gia',
    dataIndex: 'contestEntered',
    key: 'contestEntered',
  },
];
</script>
<style scoped>
.ant-input:focus {
  border: none !important;
}

.ant-input {
  height: 50px;
  border-radius: 25px;
  background-color: #ecf0f3;
}

.icon-search {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 25px;
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.table-data {
  margin-top: 20px;
  border-radius: 20px;
}
</style>
