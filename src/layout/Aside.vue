<script setup lang="ts">
import { computed, h, reactive, ref, toRefs, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import type { MenuProps } from 'ant-design-vue';
import { color } from './color';
const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
const handleClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};
const titleClick = (e: Event) => {
  console.log('titleClick', e);
};
watch(openKeys, val => {
  console.log('openKeys', val);
});



const props = defineProps({
  toggleCollapsed: {
    type: Function,
    required: true,
  },
  events: {
    type: Object,
    required: true,
  },
});

const store = useStore();
const darkMode = computed(() => store.state.themeLayout.data);
const mode = ref('inline');
const { events } = toRefs(props);
const { onRtlChange, onLtrChange, modeChangeDark, modeChangeLight, modeChangeTopNav, modeChangeSideNav } = events.value;
const myRoles = ['Admin', 'TroGiang', 'HocVien'];
const router = computed(() => useRoute());
const checkRoles = (roles: any) => {
  if (myRoles) {
    for (let i = 0; i < roles.length; i++) {
      if (myRoles.indexOf(roles[i]) !== -1) return true;
    }
  }
  return false;
};
const state = reactive({
  rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
  openKeys: ['sub1'],
  selectedKeys: [],
});
const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};
const MENU = [
  {
    key: 'tab1',
    icon: "user-graduate",
    name: "Học viên",
    option: [
      {
        key: 'tab1sub1',
        icon: "fa-bars",
        name: "Điểm danh",
      },
      {
        key: 'tab1sub2',
        icon: "fa-bars",
        name: "Điểm danh",
      },
      {
        key: 'tab1sub3',
        icon: "fa-bars",
        name: "Điểm danh",
      }
    ]
  },
  {
    key: 'tab2',
    icon: "user-graduate",
    name: "Học viên",
  },
  {
    key: 'tab3',
    icon: "fa-user",
    name: "Học viên",
    option: [
      {
        key: 'tab3sub1',
        icon: "fa-bars",
        name: "Điểm danh",
      }
    ]
  }
]
const primaryOrange = color.primaryColorOrange;
</script>

<template>
  <div>

    <a-menu v-model:selectedKeys="selectedKeys" mode="inline" :open-keys="openKeys" @openChange="onOpenChange">
      <a-sub-menu :key="item.key" v-for="item in MENU">
        <template #title>
          <div
            style="background-color: #ffffff; display: flex; justify-content: center; align-items: center; margin-right: 4px; border-radius: 50%;height: 30px; width: 30px;">
            <font-awesome-icon class="super-crazy-colors" :icon="item.icon" />
          </div>
          {{ item.name }}
        </template>
        <a-menu-item :key="opt.key" v-for="opt in item.option">
          <font-awesome-icon class="super-crazy-colors" :icon="opt.icon" />
          {{ opt.name }}
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


:global(#sub_menu_1_\$\$_tab1-popup > li),
:global(#sub_menu_1_\$\$_tab1-popup > li.ant-menu-item.ant-menu-item-selected),
:global(#app > div > div > section > section > aside > div > div > div > ul > li > div > span),
:global(#sub_menu_1_\$\$_tab1-popup > li > span),
:global(.dSWqCR .ant-layout-sider .ant-layout-sider-children .ant-menu .ant-menu-submenu.ant-menu-submenu-open >.ant-menu-submenu-title span) {
  display: flex;
  align-items: center;
  height: 50px;
  width: 231px;
  border-radius: 10px;
}

:global(#sub_menu_1_\$\$_tab1-popup > li) {
  margin-top: 2px !important;
  margin-bottom: 2px !important;
}

:global(#sub_menu_1_\$\$_tab1-popup > li > span > svg),
:global(#app > div > div > section > section > aside > div > div > div > ul > li > div > span > svg) {
  margin-right: 12px !important;
  color: black !important;
}

:global(#app > div > div > section > section > aside > div > div > div > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > div > span > svg),
:global(#app > div > div > section > section > aside > div > div > div> ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > div > span) {
  background-color: orange;
  color: white !important;
}

:global(#app > div > div > section > section > aside > div > div > div > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open.ant-menu-submenu-selected) {
  padding-left: 0;
  margin-top: 16px;
}

:global(#sub_menu_1_\$\$_tab1-popup) {
  margin-left: 16px;
}

:global(.dSWqCR .ant-layout-sider .ant-layout-sider-children .ant-menu .ant-menu-submenu-inline > .ant-menu-submenu-title) {

  height: 50px;
}

:global(.dSWqCR .ant-layout-sider .ant-layout-sider-children .ant-menu .ant-menu-submenu.ant-menu-submenu-selected .ant-menu-title-content) {
  color: black !important;
}

:global(.dSWqCR .ant-layout-sider .ant-layout-sider-children .ant-menu .ant-menu-submenu.ant-menu-submenu-open >.ant-menu-submenu-title svg) {
  color: orange;
}
</style>


