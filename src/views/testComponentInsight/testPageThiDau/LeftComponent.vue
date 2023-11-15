<template>
  <div style="width: 100%; height: 100%">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Description">Description</a-tab-pane>
      <a-tab-pane key="2" tab="Editorial" force-render>Editorial</a-tab-pane>
      <a-tab-pane key="3" tab="Sulutions(318)">Sulutions(318)</a-tab-pane>
      <a-tab-pane key="4" tab="Submissions">Submissions</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const activeKey = ref('1');
</script>
