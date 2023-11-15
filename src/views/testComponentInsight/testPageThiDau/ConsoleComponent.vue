<template>
  <div style="overflow-y: scroll; height: 100%; width: 100%">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Test Case">
        <TestCaseConsole :testCases="props.testCases" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Result">
        <ResultConsole :testCases="props.testCases" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  testCases: {
    type: Array as () => any[] | undefined,
    required: true,
  },
});

import { ref } from 'vue';
import ResultConsole from './ResultConsole.vue';
import TestCaseConsole from './TestCaseConsole.vue';
const activeKey = ref('1');
</script>
