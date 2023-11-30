<script setup lang="ts">
import { ref } from 'vue';
const pageRoutes = [
  {
    path: '/',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'demo-nine',
    breadcrumbName: 'Demo Nine',
  },
];

const current1 = ref<number>(1);
const current2 = ref<number>(2);
const onChange = (pageNumber: number) => {
  console.log('Page: ', pageNumber);
};
const kiemTra = [
  {
    id: 1,
    title: "Lập trình cơ bản",
    headerTitle: "C Programming Basic",
    target: "Đề kiểm tra này nhằm...",
    timeTest: 15,
    timeEnd: "Vô hạn"
  },
  {
    id: 2,
    title: "Lập trình cơ bản",
    headerTitle: "Java Special Training",
    target: "For Lotusian only.",
    timeTest: 20,
    timeEnd: "Vô hạn"
  },
  {
    id: 3,
    title: "Kiểm thử cơ bản",
    headerTitle: "Bạn đã sẵn sàng để làm Tester?",
    target: "Bạn hãy xem mình đã...",
    timeTest: 15,
    timeEnd: "Vô hạn"
  },
  {
    id: 4,
    title: "Lập trình cơ bản",
    headerTitle: "C Programming Basic",
    target: "Đề kiểm tra này nhằm...",
    timeTest: 15,
    timeEnd: "Vô hạn"
  },
  {
    id: 5,
    title: "Lập trình cơ bản",
    headerTitle: "Java Special Training",
    target: "For Lotusian only.",
    timeTest: 20,
    timeEnd: "Vô hạn"
  },
  {
    id: 6,
    title: "Kiểm thử cơ bản",
    headerTitle: "Bạn đã sẵn sàng để làm Tester?",
    target: "Bạn hãy xem mình đã...",
    timeTest: 15,
    timeEnd: "Vô hạn"
  },
  {
    id: 7,
    title: "Lập trình cơ bản",
    headerTitle: "C Programming Basic",
    target: "Đề kiểm tra này nhằm...",
    timeTest: 15,
    timeEnd: "Vô hạn"
  },
  {
    id: 8,
    title: "Lập trình cơ bản",
    headerTitle: "Java Special Training",
    target: "For Lotusian only.",
    timeTest: 20,
    timeEnd: "Vô hạn"
  },
  {
    id: 9,
    title: "Kiểm thử cơ bản",
    headerTitle: "Bạn đã sẵn sàng để làm Tester?",
    target: "Bạn hãy xem mình đã...",
    timeTest: 15,
    timeEnd: "Vô hạn"
  },
  {
    id: 10,
    title: "Lập trình cơ bản",
    headerTitle: "C Programming Basic",
    target: "Đề kiểm tra này nhằm...",
    timeTest: 15,
    timeEnd: "Vô hạn"
  },
  {
    id: 11,
    title: "Lập trình cơ bản",
    headerTitle: "Java Special Training",
    target: "For Lotusian only.",
    timeTest: 20,
    timeEnd: "Vô hạn"
  },
  {
    id: 12,
    title: "Kiểm thử cơ bản",
    headerTitle: "Bạn đã sẵn sàng để làm Tester?",
    target: "Bạn hãy xem mình đã...",
    timeTest: 15,
    timeEnd: "Vô hạn"
  }
]
</script>

<template>
  <div class="main">
    <sdPageHeader title="Đánh giá - Kiểm tra" class="ninjadash-page-header-main" :routes="pageRoutes"></sdPageHeader>
    <Main>
      <a-card :bordered="false" class="card-list">
        <DemoFourStyle>
          <a-row justify="center" :gutter="25">
            <a-col :xxl="8" :xl="8" :md="12" :xs="24" v-for="duLieu in kiemTra" :key="duLieu.id">
              <a-card class="card-item" :title="duLieu.title" :bordered="false" style=" padding: 20px 20px;">
                <h3 class="header-title">{{ duLieu.headerTitle }}</h3>
                <p>{{ duLieu.target }}</p>
                <p>Thời gian: {{ duLieu.timeTest }}</p>
                <p>Ngày kết thúc: {{ duLieu.timeEnd }}</p>
                <a-button class="handle-button" type="text">Bắt đầu ngay</a-button>
              </a-card>
            </a-col>
          </a-row>
          <div class="pagination-style">
            <a-pagination v-model:current="current1" show-quick-jumper :total="100" @change="onChange" />
          </div>
        </DemoFourStyle>

      </a-card>
    </Main>
  </div>
</template>
<style>
.main {
  padding: 20px 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.card-list {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
  overflow: auto;
}

.card-item {
  border: 0.5px solid rgb(212, 199, 199);
  border-radius: 10px;
  margin-top: 20px;
}

.card-item:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
}

.header-title {
  margin-top: 10px;
}

.handle-button {
  background-color: rgb(237, 237, 124);
  margin-top: 10px;
  border: 10px;
  display: flex;
  padding: 20px 20px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
}

.pagination-style {
  margin-top: 40px;
  text-align: right;
}

.card-item .ant-card-head-title {
  font-weight: bold;
  font-size: 20px;
}

.main .ant-row-center {
  max-height: 400px;
  overflow-y: auto;

}

@media screen and (max-width: 600px) {
  .main .ant-row-center {
    max-height: 460px;
  }
}</style>
