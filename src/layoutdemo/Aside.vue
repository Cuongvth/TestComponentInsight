<script setup lang="ts">
import { computed, h, reactive, ref, toRefs, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import type { MenuProps } from 'ant-design-vue';
import MENUS from './menu';
const openKeys = ref<string[]>(['tab1']);

const store = useStore();
const myRoles = ['HOCVIEN'];
const router = computed(() => useRoute());
const checkRoles = (roles: any) => {
  if (myRoles) {
    for (let i = 0; i < roles.length; i++) {
      if (myRoles.indexOf(roles[i]) !== -1) return true;
    }
  }
  return false;
};
const onOpenChange = (openKey: string[]) => {
  openKeys.value = [openKey[openKey.length - 1]]
};
</script>

<template>
  <div>
    <a-menu :openKeys="openKeys" mode="inline" @openChange="onOpenChange">
      <a-sub-menu :v-if="checkRoles(item.show)" :key="item.key" v-for="item in MENUS">
        <template #title>
          <div class="menu-parent">
            <div class="icon">
              <font-awesome-icon class="super-crazy-colors" :icon="item.icon" />
            </div>
            <div class="title">
              {{ item.name }}
            </div>
          </div>
        </template>
        <a-menu-item :v-if="checkRoles(opt.show)" :key="opt.key" v-for="opt in item.option">
          <div class="menu-sub">
            <div class="icon">
              <font-awesome-icon class="super-crazy-colors" :icon="opt.icon" />
            </div>
            <div class="title">
              {{ opt.name }}
            </div>
          </div>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<style scoped>
.large-text {
  font-size: 14px !important;
  /* Thay đổi giá trị này để điều chỉnh kích thước chữ */
}

.menu-sub,
.menu-parent {
  height: 50px;
  display: flex;
  align-items: center;
}

.menu-parent .icon {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
}

.menu-sub .title,
.menu-parent .title {
  margin-left: 8px;
}

.menu-sub {
  width: 231px !important;
}

:global(#sub_menu_9_\$\$_tab9-popup > li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child),
:global(#sub_menu_8_\$\$_tab8-popup > li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child),
:global(#sub_menu_7_\$\$_tab7-popup > li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child),
:global(#sub_menu_6_\$\$_tab6-popup > li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child),
:global(#sub_menu_5_\$\$_tab5-popup > li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child),
:global(#sub_menu_4_\$\$_tab4-popup > li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child),
:global(#sub_menu_3_\$\$_tab3-popup > li.ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child) {
  width: 231px !important;
  margin-left: 14px !important;
  border-radius: 10px !important;
}

.menu-sub .icon {
  margin-left: 21px !important;
}

.menu-sub:hover {
  background-color: #F5EEFC;
  border-radius: 10px;
}

/* khi click */
:global(#app > div > div > section > section > aside > div > div > div:nth-child(1) > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > div>span) {
  background-color: orange;
  border-radius: 10px;
}

/* menu cao 50 */
:global(#sub_menu_9_\$\$_tab9-popup > li),
:global(#sub_menu_8_\$\$_tab8-popup > li),
:global(#sub_menu_7_\$\$_tab7-popup > li),
:global(#sub_menu_6_\$\$_tab6-popup > li),
:global(#sub_menu_5_\$\$_tab5-popup > li),
:global(#sub_menu_4_\$\$_tab4-popup > li),
:global(#sub_menu_3_\$\$_tab3-popup > li),
:global(#app > div > div > section > section > aside > div > div > div:nth-child(1) > ul > li > div) {
  height: 50px;
}

/* màu chữ */
:global(.dSWqCR .ant-layout-sider .ant-layout-sider-children .ant-menu .ant-menu-submenu.ant-menu-submenu-selected .ant-menu-title-content) {
  color: black !important;
}

/* màu nền */
:global(.dSWqCR .ant-layout-sider .ant-layout-sider-children .ant-menu .ant-menu-submenu.ant-menu-submenu-open >.ant-menu-submenu-title svg) {
  color: orange;
}

/* màu chữ */
:global(.dSWqCR .ant-layout-sider .ant-layout-sider-children .ant-menu .ant-menu-submenu.ant-menu-submenu-open >.ant-menu-submenu-title .title) {
  color: rgb(255, 255, 255);
}

/* khi hover */

:global(#app > div > div > section > section > aside.ant-layout-sider-collapsed > div > div > div:nth-child(1) > ul > li > div > span > div.title) {
  display: none;
}

/* clear dấu sổ */

:global(#app > div > div > section > section > aside > div > div > div:nth-child(1) > ul > li:nth-child(1) > div > i),
:global(#app > div > div > section > section > aside > div > div > div:nth-child(1) > ul > li:nth-child(2) > div > i) {
  display: none;
}

:global(.dSWqCR .ant-layout-sider .ant-layout-sider-children .ant-menu.ant-menu-inline-collapsed .ant-menu-submenu span) {
  display: block;
}

:global(.dSWqCR .ant-layout-sider.ant-layout-sider-collapsed .ant-layout-sider-children .ant-menu-submenu-title .title) {
  display: none;
}
</style>


