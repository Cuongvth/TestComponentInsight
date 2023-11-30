<template>
    <a-row style="padding-top: 40px;">
      <a-col :xs="24" :md="16" :lg="18" :xl="18">
        <a-tabs v-model:activeKey="activeKey" centered>
          <a-tab-pane key="1" tab="Bảng tin">
            <tab-bang-tin></tab-bang-tin>
          </a-tab-pane>
          <a-tab-pane key="2" tab="Tin báo mới" force-render>
            <tab-tin-bao-moi></tab-tin-bao-moi>
          </a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :lg="6" :xs="0" :md="8" :xl="6" class="sticky">
        <a-row>
          <a-col :xs="4" :md="4" :lg="2" :xl="22">
  
          </a-col>
          <a-col :xs="20" :md="20" :lg="22" :xl="22" class="menu-right">
            <div>
              <h1>Thông tin học tập của bạn</h1>
              <a-row :gutter="8">
                <a-col :lg="16"><b>Thời gian đã học:</b></a-col>
                <a-col :lg="8"> 0 Tuần </a-col>
              </a-row>
              <a-row :gutter="8">
                <a-col :lg="16"><b>Số buổi đã tham gia:</b></a-col>
                <a-col :lg="8"> 0 Buổi </a-col>
              </a-row>
              <a-row :gutter="8">
                <a-col :lg="16"><b>Số buổi nghỉ:</b></a-col>
                <a-col :lg="8"> 0 Buổi </a-col>
              </a-row>
              <a-row :gutter="8">
                <a-col :lg="16"><b>Số bài tập đã làm:</b></a-col>
                <a-col :lg="8"> 0 Bài </a-col>
              </a-row>
              <a-row :gutter="8">
                <a-col :lg="16"><b>Môn học hiện tại:</b></a-col>
                <a-col :lg="8"> undefined </a-col>
              </a-row>
            </div>
            <br />
            <div>
              <h1>Danh mục</h1>
              <a-list bordered :data-source="data">
                <template #renderItem="{ item }">
                  <a-list-item style="padding: 0">
                    <a-button type="text" style="text-align: start" :icon="h(InstagramOutlined)" block>{{
                      item
                    }}</a-button>
                  </a-list-item>
                </template>
              </a-list>
            </div>
          </a-col>
        </a-row>
  
      </a-col>
    </a-row>
  </template>
  <script lang="ts" setup>
  import { ref, h } from 'vue';
  import TabTinBaoMoi from './TabTinBaoMoi.vue'
  import TabBangTin from './TabBangTin.vue'
  import { CameraOutlined, FrownOutlined, InstagramOutlined } from '@ant-design/icons-vue';
    import { Main } from '../../styled';
  const activeKey = ref('1');
  const data: string[] = [
      'Viết bài',
      'Giải đáp',
      'Dữ liệu & giải thuật',
      'Ngôn ngữ lập trình',
      'Bài tập hay',
      'Trí tuệ nhân tạo',
      'Python',
      'ReactJs',
    ];
  </script>
<style scoped>
::v-deep .ant-btn {
  height: 100%;
  font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header-input {
  padding: 10px;
  background-color: rgb(244, 242, 240);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;
}

.input-baiviet:focus {
  outline: none;
  border: none;
}

.header-item-bottom {
  margin-top: 20px;
  background-color: rgb(244, 242, 240);
  border-radius: 10px;
}

* {
  font-family: Arial, Helvetica, sans-serif;
}

.baiviet-item {
  margin-top: 40px;
  background-color: rgb(244, 242, 240);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;
}

.noi-dung-chinh {
  width: 100%;
}

.header-bottom {
  background-color: rgb(244, 242, 240);
  padding: 8px 16px;
}

.header-bottom:hover {
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.anhbaiviet img {
  width: 100%;
}

.sticky {
  font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.set-index {
  display: flex;
}

h1 {
  font-size: 20px;
}

.baiViet-right:hover {
  cursor: pointer;
}

.baiViet-right {
  border: none;
  background-color: rgb(244, 242, 240);
  font-size: 20px;
}

.set-icon {
  border: 1px solid black;
}

.menu-right {
  background-color: rgb(244, 242, 240);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 10px 20px;
  position: fixed;
  border-radius: 10px;
  top: 100px;
  border: 0.5px solid rgb(215, 211, 211);
}

@media only screen and (max-width: 46.1875em) {
 
  .ant-col-offset-4{
    padding: 0;
  }
}

@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
  
}</style>