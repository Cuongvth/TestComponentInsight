<template>
  <div>
    <sdPageHeader :title="exercise" class="ninjadash-page-header-main"></sdPageHeader>
    <Main>
      <a-row :gutter="[16, 10]">
        <a-col :span="18" :xxl="18" :xl="18" :lg="18" :md="24" :sm="24" :xs="24">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="Đề bài">
              <div class="collapse-do-homework">
                <a-collapse v-model:activeKey="activeKeyCollapse">
                  <a-collapse-panel key="1" header="Đề bài">
                    <p>{{ homework.content }}</p>
                  </a-collapse-panel>
                  <a-collapse-panel key="2" header="Mô tả">
                    <a-card
                      v-for="item in homework.file"
                      :key="item.id"
                      class="card-item"
                      style="margin-top: 10px; background-color: rgba(225, 225, 225, 0.2)"
                    >
                      <h4>{{ item.fileName }}</h4>
                      <p>{{ item.hint }}</p>
                    </a-card>
                  </a-collapse-panel>
                </a-collapse>
              </div>
              <div style="margin-top: 20px">
                <a-tabs v-model:activeKey="activeKeyCollapseEditor">
                  <a-tab-pane v-for="item in homework.file" :key="item.id" :tab="item.fileName">
                    <MonacoEditor
                      :language="item.language"
                      :content="item.content"
                      style="min-height: 400px"
                    ></MonacoEditor>
                  </a-tab-pane>
                </a-tabs>
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Đánh giá">
              <a-row :gutter="[16, 10]">
                <a-col
                  :span="8"
                  :xxl="8"
                  :xl="8"
                  :lg="12"
                  :md="12"
                  :sm="24"
                  :xs="24"
                  v-for="item in homework.rates"
                  :key="item.id"
                >
                  <div>
                    <a-card class="card-item">
                      <a-comment>
                        <template #author>
                          <h4>{{ item.userName }}</h4>
                        </template>
                        <template #avatar>
                          <a-avatar :src="item.userAvatar" />
                        </template>
                        <template #content>
                          <p>
                            {{ item.rateTitle }}
                          </p>
                          <a-rate v-model:value="item.rate" disabled="" />
                          <p>
                            {{ item.rateDescribe }}
                          </p>
                        </template>
                        <template #datetime>
                          <a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
                            <span>{{ dayjs().fromNow() }}</span>
                          </a-tooltip>
                        </template>
                      </a-comment>
                    </a-card>
                  </div>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane key="3" tab="Hướng dẫn">{{ homework.hint }}</a-tab-pane>
          </a-tabs>
        </a-col>
        <a-col :span="6" :xxl="6" :xl="6" :lg="6" :md="24" :sm="24" :xs="24">
          <a-card class="card-item">
            <h4>Tác giả</h4>
            <p>{{ homework.author }}</p>
            <h4>Mức độ</h4>
            <p>{{ homework.level }}</p>
            <a-row :gutter="[16, 10]" style="margin-top: 10px">
              <a-col :span="8" :xxl="8" :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <router-link
                  :to="`/hocvien/khoahoc/${useRoute().params.idKhoaHoc}/monhoc/${
                    useRoute().params.idMonHoc
                  }/baitap/${before}/lambaitap`"
                >
                  <sdButton html-type="submit" size="default" shape="circle" type="primary" style="width: 100%">
                    <unicon name="arrow-left"></unicon>
                    <span>Trước</span>
                  </sdButton>
                </router-link>
              </a-col>
              <a-col :span="8" :xxl="8" :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <router-link
                  :to="`/hocvien/khoahoc/${useRoute().params.idKhoaHoc}/monhoc/${
                    useRoute().params.idMonHoc
                  }/baitap/${next}/lambaitap`"
                  replace
                >
                  <sdButton html-type="submit" size="default" shape="circle" type="primary" style="width: 100%">
                    <span>Sau</span>
                    <unicon name="arrow-right"></unicon>
                  </sdButton>
                </router-link>
              </a-col>
              <a-col :span="8" :xxl="8" :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <router-link :to="'/'">
                  <sdButton html-type="submit" size="default" shape="circle" type="primary" style="width: 100%">
                    <unicon name="chat"></unicon>
                  </sdButton>
                </router-link>
              </a-col>
            </a-row>
          </a-card>
          <div style="margin-top: 10px">
            <a-card class="card-item">
              <div>
                <a-form
                  :model="formState"
                  name="basic"
                  autocomplete="off"
                  @finish="onFinish"
                  @finishFailed="onFinishFailed"
                >
                  <a-input v-model:value="formState.title" placeholder="Title" />
                  <a-input v-model:value="formState.content" placeholder="Content" style="margin-top: 10px" />
                  <a-rate v-model:value="formState.rate" style="margin-top: 10px" />
                  <div style="margin-top: 10px">
                    <sdButton html-type="submit" size="default" shape="circle" type="primary">
                      <span>Đánh giá</span>
                      <unicon name="arrow-right"></unicon>
                    </sdButton>
                  </div>
                </a-form>
              </div>
            </a-card>
          </div>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../../styled';
import MonacoEditor from './MonacoEditor.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const exercise = 'React Basic';
const next = 5;
const before = 4;
const activeKey = ref('1');
const activeKeyCollapse = ref(['1']);
const homework = ref({
  author: 'LTS Education',
  level: 'Dễ',
  content:
    'Tạo một function component chứa thẻ h1 có nội dung sau: “I love VietNam”. Hiển thị nội dung đó trên trình duyệt.',
  hint: 'Hướng dẫn làm bài',
  file: [
    {
      id: 1,
      fileName: 'main.js',
      hint: 'Viết vào đây nội dùng của main.js',
      language: 'javascript',
      content: 'Hello',
    },
    {
      id: 2,
      fileName: 'function.js',
      hint: 'Viết vào đây nội dùng của function.js',
      language: 'javascript',
      content: 'Hi',
    },
  ],
  rates: [
    {
      id: 1,
      date: new Date(),
      userName: 'Vũ Lạnh Cường',
      rate: 4,
      rateDescribe:
        'Tạo một function component chứa thẻ h1 có nội dung sau: “I love VietNam”. Hiển thị nội dung đó trên trình duyệt.',
      rateTitle: 'Good',
      userAvatar:
        'https://c4.wallpaperflare.com/wallpaper/68/12/28/anime-mobile-suit-gundam-wing-wallpaper-preview.jpg',
    },
    {
      id: 2,
      date: new Date(),
      userName: 'Vũ Lạnh Cường',
      rate: 4,
      rateDescribe:
        'Tạo một function component chứa thẻ h1 có nội dung sau: “I love VietNam”. Hiển thị nội dung đó trên trình duyệt.',
      rateTitle: 'Good',
      userAvatar:
        'https://c4.wallpaperflare.com/wallpaper/68/12/28/anime-mobile-suit-gundam-wing-wallpaper-preview.jpg',
    },
    {
      id: 3,
      date: new Date(),
      userName: 'Vũ Lạnh Cường',
      rate: 4,
      rateDescribe:
        'Tạo một function component chứa thẻ h1 có nội dung sau: “I love VietNam”. Hiển thị nội dung đó trên trình duyệt.',
      rateTitle: 'Good',
      userAvatar:
        'https://c4.wallpaperflare.com/wallpaper/68/12/28/anime-mobile-suit-gundam-wing-wallpaper-preview.jpg',
    },
  ],
});
const activeKeyCollapseEditor = ref(homework.value.file[0].id);

const formState = ref({
  title: 'Good',
  content: 'Good',
  rate: 4,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped>
.card-item {
  border-radius: 10px;
  border-width: 2px;
}
</style>

<style>
.collapse-do-homework .ant-collapse-header {
  background-color: #21498c !important;
  color: white !important;
  font-weight: 600;
  border-radius: 5px !important;
}

.collapse-do-homework .ant-collapse-content-active {
  background-color: white !important;
}
</style>
