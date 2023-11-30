<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Main } from '../../styled';
import DialogRegisterToStudy from './DialogRegisterToStudy.vue';

const initialData = [
  {
    name: 'Fullstack Java Web',
    value: 1,
    button: 'button1',
    imgs: '../../../src/assets/img/top.png',
    number: 18,
    plan: [
      { name: 'ISTQB Foundation', price: 2700000, description: 'Mô tả' },
      { name: 'ISTQB Foundation + Test tự động Selenium Advanced', price: 3700000, description: 'Mô tả' },
      { name: 'Học thử miễn phí', price: 0, description: 'Mô tả' },
    ],
  },
  {
    name: 'Fontend Developer Reactjs',
    value: 2,
    button: 'button1',
    imgs: '../../../src/assets/img/support-img.png',
    number: 18,
    plan: [
      { name: 'ISTQB Foundation', price: 2700000, description: 'Mô tả' },
      { name: 'ISTQB Foundation + Test tự động Selenium Advanced', price: 3700000, description: 'Mô tả' },
      { name: 'Học thử miễn phí', price: 0, description: 'Mô tả' },
    ],
  },
  {
    name: 'Fresher Tester',
    value: 'A',
    button: 'button2',
    imgs: '../../../src/assets/img/top.png',
    number: 18,
    plan: [
      { name: 'ISTQB Foundation', price: 2700000, description: 'Mô tả' },
      { name: 'ISTQB Foundation + Test tự động Selenium Advanced', price: 3700000, description: 'Mô tả' },
      { name: 'Học thử miễn phí', price: 0, description: 'Mô tả' },
    ],
  },
  {
    name: 'Manual Test Fresher',
    value: 'B',
    button: 'button2',
    imgs: '../../../src/assets/img/top.png',
    number: 18,
    plan: [
      { name: 'ISTQB Foundation', price: 2700000, description: 'Mô tả' },
      { name: 'ISTQB Foundation + Test tự động Selenium Advanced', price: 3700000, description: 'Mô tả' },
      { name: 'Học thử miễn phí', price: 0, description: 'Mô tả' },
    ],
  },
  // ... more initial data
];

const selectedButton = ref('button1');
const data = ref([...initialData]);

const handleButtonClick = (buttonName: string) => {
  selectedButton.value = buttonName;
};

const filteredData = (buttonName: string) => {
  return data.value.filter((item) => item.button === buttonName);
};

const registerCourse = (course: any) => {
  console.log('Registering for course:', course);
};

onMounted(() => {
  handleButtonClick('button1');
});

const activeKey = ref('1');
</script>

<template>
  <div>
    <Main>
      <sdPageHeader title="Khóa học của tôi" class="ninjadash-page-header-main"></sdPageHeader>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Đã đăng ký">
          <a-col
            :xs="24"
            :span="24"
            class="infor-course mb-20"
            v-for="(item, index) in filteredData('button1')"
            :key="index"
          >
            <div class="courses-card">
              <img :src="item.imgs" alt="img-card" class="img-card" />
              <div class="d-block p-15 w-md-70-sd-100">
                <h3>{{ item.name }}</h3>
                <a class="text-link">Lotus Academy</a>
                <div class="text-number-of-subjects">
                  <label>Lộ Trình -</label>
                  {{ item.number }} Môn học<a> (Xem Thêm)</a>
                </div>
                <div class="d-flex w-100 justify-content-end">
                  <router-link :to="`/hocvien/khoahoc/${item.value}`">
                    <sdButton size="default" shape="circle" type="primary">
                      <span>Vào học</span><span> </span>
                      <unicon name="arrow-right" width="14"></unicon>
                    </sdButton>
                  </router-link>
                </div>
              </div>
            </div> </a-col
        ></a-tab-pane>
        <a-tab-pane key="2" tab="Chưa đăng kí" force-render>
          <a-col
            :xs="24"
            :span="24"
            class="infor-course mb-20"
            v-for="(item, index) in filteredData('button2')"
            :key="index"
          >
            <div class="courses-card">
              <img :src="item.imgs" alt="img-card" class="img-card" />
              <div class="d-block p-15 w-md-70-sd-100">
                <h3>{{ item.name }}</h3>
                <a class="text-link">Lotus Academy</a>
                <div class="text-number-of-subjects">
                  <label>Lộ Trình -</label>
                  {{ item.number }} Môn học<a> (Xem Thêm)</a>
                </div>
                <div class="d-flex w-100 justify-content-end">
                  <DialogRegisterToStudy
                    :courseOptions="item.plan"
                    @register="registerCourse"
                    :course-name="item.name"
                  />
                </div>
              </div>
            </div>
          </a-col>
        </a-tab-pane>
      </a-tabs>
    </Main>
  </div>
</template>

<style scoped>
.d-block {
  display: block;
}

.d-flex {
  display: flex;
}

.justify-content-end {
  justify-content: end;
}

.courses-card {
  display: flex;
  border: 0.5px solid rgb(212, 199, 199);
  border-radius: 20px;
  box-shadow: inset;
  background-color: #fff;
}

.courses-card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
}

.courses-card h3 {
  font-size: 22px;
  margin-bottom: 8px;
}

.courses-card .text-link {
  font-size: 18px;
  padding-left: 8px;
  color: #1976d2;
}

.courses-card .text-number-of-subjects {
  font-size: 16px;
  color: #686868;
}
.courses-card .text-number-of-subjects a {
  font-size: 16px;
  color: #686868;
}
.mb-20 {
  margin-bottom: 20px;
}

.p-15 {
  padding: 15px;
}

.w-md-70-sd-100 {
  width: 70%;
}

.default {
  background-color: #d9d9d9;
}

.img-card {
  height: 180px;
  width: 30%;
  border-radius: 20px;
}

.infor-course {
  height: 180px;
  max-width: 880px;
  display: block;
  margin: auto;
  border-radius: 20px;
}

.my-course .custom-link {
  height: 48px;
  border-bottom: 6px solid transparent;
}

.my-course .custom-link:hover {
  border-bottom: 6px solid #ffffffb3;
}

.my-course .default[data-v-8e4e3970] {
  background-color: transparent;
  color: #ffffff99;
}

.bWWCBR.bWWCBR:hover {
  color: #fff;
  background-color: #585f6a;
  border-bottom: 6px solid #ffffffb3;
}

.bWWCBR.bWWCBR:focus {
  color: #fff;
  background-color: #7a7f88;
  border-bottom: 6px solid #ffffffb3;
}

.bWWCBR.bWWCBR {
  color: #fff;
  background-color: #7a7f88;
  border-radius: 4px 4px 0 0;
}

@media screen and (max-width: 600px) {
  .courses-card {
    display: block;
  }

  .img-card {
    height: auto;
    width: 100%;
    border-radius: 20px;
  }

  .infor-course {
    height: auto;
  }

  .w-md-70-sd-100 {
    width: 100%;
  }
}
</style>
