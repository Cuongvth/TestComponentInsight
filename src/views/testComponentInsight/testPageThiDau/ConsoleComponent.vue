<template>
  <div style="overflow-y: scroll; height: 100%; width: 100%">
    <TestCaseConsole :testCases="props.testCases" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  testCases: {
    type: Array as () => any[] | undefined,
    required: true,
  },
});

import TestCaseConsole from './TestCaseConsole.vue';
</script>
