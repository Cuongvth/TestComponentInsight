<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import { NinjadashTopDropdown } from '@/components/utilities/auth-info/auth-info-style';
import { defineComponent, ref } from 'vue';
import UserShortCut from './UserShortCut.vue';
const visible = ref<boolean>(false);

const afterVisibleChange = (bool: boolean) => {
  console.log('visible', bool);
};

const showDrawer = () => {
  visible.value = true;
};
</script>

<template>
  <div class="ninjadash-nav-actions__item ninjadash-nav-actions__message">
    <a-drawer
      v-model:visible="visible"
      class="custom-class"
      title="Messenger"
      placement="right"
      @after-visible-change="afterVisibleChange"
    >
      <a-row style="margin-bottom: 8px">
        <h3 style="font-family: Open Sans, sans-serif !important; font-size: 14px">Admin Team</h3>
        <UserShortCut />
        <UserShortCut />
      </a-row>
      <a-row style="margin-bottom: 8px">
        <h3 style="font-family: Open Sans, sans-serif !important; font-size: 14px">Trợ giảng</h3>
        <UserShortCut />
        <UserShortCut />
      </a-row>
      <a-row style="margin-bottom: 8px">
        <h3 style="font-family: Open Sans, sans-serif !important; font-size: 14px">Người dùng</h3>
        <UserShortCut />
        <UserShortCut />
      </a-row>
    </a-drawer>
    <a-badge dot :offset="[-8, -5]" status="success">
      <a to="#" @click="showDrawer" class="ninjadash-nav-action-link">
        <img :src="'/src/assets/img/icon/message2.svg'" />
      </a>
    </a-badge>
  </div>
</template>

<style scoped>
.ps {
  height: 200px;
}

:global(.ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper) {
  max-width: 260px;
}
</style>
