<template>
  <div style="width: 100%; height: 100%">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane v-for="(item, index) in props.lstBaiThi" :key="item.id" :tab="`Bài tập ${index + 1}`">
        <p style="white-space: pre-line">{{ item.tieuDe }}</p>
        <p style="white-space: pre-line">{{ item.noiDung }}</p>
        <p style="white-space: pre-line">{{ item.lyThuyet }}</p>
        <p style="white-space: pre-line">{{ item.goiY }}</p>
        <p style="white-space: pre-line">{{ item.huongDan }}</p>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  lstIdBaiThi: {
    type: Array<any>,
    required: true,
  },
  lstBaiThi: {
    type: Array<any>,
    required: true,
  },
});

onBeforeMount(() => {
  console.log(props.lstBaiThi);
});

import { onBeforeMount, ref } from 'vue';
const activeKey = ref(props.lstIdBaiThi[0]);
</script>
