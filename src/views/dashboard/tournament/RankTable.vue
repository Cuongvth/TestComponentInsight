<template>
  <div>
    <sdPageHeader :title="'Bảng xếp hạng'" class="ninjadash-page-header-main"></sdPageHeader>
    <Main style="position: relative">
      <a-row>
        <a-col :span="20" :xxl="20" :xl="19" :lg="18" :md="17" :sm="16" :xs="12"></a-col>
        <a-col :span="4" :xxl="4" :xl="5" :lg="6" :md="7" :sm="8" :xs="12">
          <div class="collapse-ranktable">
            <div class="collapse-ranktable-icon"><unicon name="align-center-alt"></unicon></div>
            <a-collapse v-model:activeKey="activeKey">
              <a-collapse-panel key="1" header="Bộ lọc">
                <a-row :gutter="[16, 10]">
                  <a-col :span="24">
                    <a-select
                      style="width: 100%"
                      v-model:value="searchDanhHieu"
                      :options="uniqueDanhHieu.map((c) => ({ value: c, label: c }))"
                      @change="handleSearch"
                    ></a-select>
                  </a-col>
                  <a-col :span="24">
                    <a-select
                      style="width: 100%"
                      v-model:value="searchKhoaHoc"
                      :options="uniqueKhoaHoc.map((c) => ({ value: c, label: c }))"
                      @change="handleSearch"
                    ></a-select>
                  </a-col>
                  <a-col :span="24">
                    <a-select
                      style="width: 100%"
                      v-model:value="sortSelect"
                      :options="sortOption"
                      @change="handleSearch"
                    ></a-select>
                  </a-col>
                </a-row>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </a-col>
      </a-row>
      <a-table :dataSource="dataShow" :pagination="pagination" :columns="columns" class="table-data">
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

const activeKey = ref([]);

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

const dataShow = ref(dataSource);
const uniqueKhoaHoc = ['all', ...Array.from(new Set(Object.values(dataSource).map((c) => c.courses)))];
const uniqueDanhHieu = ['all', ...Array.from(new Set(Object.values(dataSource).map((c) => c.appellation)))];
const searchKhoaHoc = ref(uniqueKhoaHoc[0]);
const searchDanhHieu = ref(uniqueDanhHieu[0]);
const sortSelect = ref('elloCoding-asc');

const pagination = ref({
  total: dataSource.length,
  current: 1,
  pageSize: 25,
});

const generateArrayOfStrings = () => {
  var result = [];
  const pagination_total =
    dataShow.value.length % pagination.value.pageSize === 0
      ? dataShow.value.length / pagination.value.pageSize
      : Math.floor(dataShow.value.length / pagination.value.pageSize) + 1;
  for (let index = 1; index <= pagination_total; index++) {
    result.push({
      value: index,
      label: `Hiển thị ${(index - 1) * pagination.value.pageSize + 1} - ${Math.min(
        index * pagination.value.pageSize,
        dataShow.value.length,
      )} of ${dataShow.value.length}`,
    });
  }
  return result;
};

const pageOption = ref(generateArrayOfStrings());

interface MyObject {
  key: number;
  name: any;
  elloCoding: any;
  courses: any;
  appellation: any;
  contestEntered: any;
}

const handleSearch = () => {
  dataShow.value = dataSource.filter((c) => c.name.includes(searchKeyword.value));
  if (searchKhoaHoc.value !== 'all') {
    dataShow.value = dataShow.value.filter((c) => searchKhoaHoc.value === c.courses);
  }
  if (searchDanhHieu.value !== 'all') {
    dataShow.value = dataShow.value.filter((c) => searchDanhHieu.value === c.appellation);
  }

  const property = sortSelect.value.split('-')[0].trim() as keyof MyObject;
  const direction = sortSelect.value.split('-')[1].trim();

  dataShow.value = dataShow.value.sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (valueA instanceof Date && valueB instanceof Date) {
      if (direction === 'desc') {
        return valueB.getTime() - valueA.getTime();
      } else if (direction === 'asc') {
        return valueA.getTime() - valueB.getTime();
      }
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return direction === 'desc' ? valueB - valueA : valueA - valueB;
    }

    const stringValueA = String(valueA);
    const stringValueB = String(valueB);

    if (direction === 'desc') {
      return stringValueB.localeCompare(stringValueA);
    } else if (direction === 'asc') {
      return stringValueA.localeCompare(stringValueB);
    }

    return 0;
  });

  pagination.value.total = dataShow.value.length;
  pagination.value.current = 1;
  pageOption.value = generateArrayOfStrings();
  pageIndex.value = 1;
};

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

const dataIndexSkip = ['key', 'courses', 'appellation'];
const sortOption = columns.flatMap((c) => {
  if (!dataIndexSkip.includes(c.dataIndex)) {
    return [
      { value: `${c.dataIndex}-desc`, label: `${c.title} giảm dần` },
      { value: `${c.dataIndex}-asc`, label: `${c.title} tăng dần` },
    ];
  } else {
    return [];
  }
});
</script>
<style scoped>
.ant-input:focus {
  border: none !important;
}

.input-filter .ant-input {
  height: 50px;
  border-radius: 25px;
  background-color: #ecf0f3;
}

.input-filter .ant-select {
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
  margin-top: 60px;
  border-radius: 20px;
}

.input-filter {
  position: relative;
  background-color: #ecf0f3;
  border-radius: 25px;
  min-width: 20%;
}
.collapse-ranktable {
  width: 100%;
  position: absolute;
  z-index: 10;
}

.collapse-ranktable-icon {
  position: absolute;
  right: 10px;
  z-index: 9999;
  top: 25px;
  transform: translate(0, -50%);
}

.collapse-ranktable-icon .unicon {
  display: block;
}
</style>

<style>
.collapse-ranktable .ant-collapse {
  border-width: 2px;
}

.collapse-ranktable .ant-collapse {
  border-width: 2px;
}

.collapse-ranktable .ant-collapse-header {
  background-color: white !important;
  color: black !important;
  font-weight: 600;
  border-radius: 5px !important;
}

.collapse-ranktable .ant-collapse-header .ant-collapse-arrow {
  display: none !important;
}

.collapse-ranktable .ant-collapse-content-active {
  background-color: white !important;
}
</style>
