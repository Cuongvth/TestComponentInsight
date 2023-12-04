<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ThemeProvider } from 'vue3-styled-components';
import { themeColor } from './config/theme/themeVariables';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import 'v-calendar/dist/style.css';

const { state } = useStore();
const rtl = computed(() => state.themeLayout.rtlData);
const isLoading = computed(() => state.themeLayout.loading);
const darkMode = computed(() => state.themeLayout.data);
const topMenu = computed(() => state.themeLayout.topMenu);
const mainContent = computed(() => state.themeLayout.main);

onMounted(() => {
  window.addEventListener('load', () => {
    const domHtml = document.getElementsByTagName('html')[0];
    rtl.value ? domHtml.setAttribute('dir', 'rtl') : domHtml.setAttribute('dir', 'ltr');
    darkMode.value ? document.body.classList.add('dark-mode') : '';
  });
});
</script>
<template>
  <div v-if="isLoading" class="spin">
    <a-spin />
  </div>
  <ThemeProvider
    v-else
    :theme="{
      rtl,
      topMenu,
      darkMode,
      mainContent,
      ...themeColor,
    }"
  >
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <div class="spin">
          <a-spin />
        </div>
      </template>
    </Suspense>
  </ThemeProvider>
</template>

<style>
.fiLpOL.fiLpOL {
  background: #21498c !important;
}

.ant-pagination-item-active a {
  background-color: #297d9f !important;
}

.ant-radio-checked .ant-radio-inner {
  border-color: #297d9f !important;
}

.ant-tabs-tab {
  border-radius: 10px;
  padding: 10px 20px !important;
}

.ant-tabs-tab:hover .ant-tabs-tab-btn {
  color: #21498c;
}

.ant-tabs-tab-btn {
  font-weight: 600;
}

.ant-tabs-tab-active {
  background-color: #21498c !important;
  border-radius: 10px;
  color: white !important;
}

.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: white !important;
}

.ant-tabs-tab + .ant-tabs-tab {
  margin: 0 0 0 10px !important;
}

.ant-comment-content-detail p {
  color: black !important;
}

.ant-comment-content-author-name > * {
  color: black !important;
}

.table-data .ant-table-thead > tr > th {
  background: #eb763c !important;
}

.table-data .ant-table-thead > tr > th {
  border-right: #f0f0f0 solid 1px !important;
}

.ant-table-filter-column,
.ant-table-column-sorters {
  justify-content: center;
  gap: 2px;
}

.table-data .ant-table-column-title {
  flex: 0;
}

.table-data .ant-table-thead > tr:first-child > th:first-child {
  border-top-left-radius: 8px !important;
}

.table-data .ant-table-thead > tr:last-child > th:last-child {
  border-top-right-radius: 8px !important;
  border-right: none;
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
  padding: 5px 10px !important;
}

.table-data .ant-table-pagination {
  display: none !important;
}

.ant-modal-body {
  padding: 15px 20px !important;
}
</style>
