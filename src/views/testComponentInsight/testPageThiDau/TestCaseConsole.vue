<template>
  <div style="overflow-y: scroll; height: 100%">
    <a-tabs v-model:activeKey="activeKey" tab-position="left" animated>
      <a-tab-pane v-for="(item, index) in lstTestCase" :key="index" :tab="'Case ' + (index + 1)">
        <h1 style="margin-top: 20px">
          {{ item.isPass ? 'Correct Answer' : 'Wrong Answer' }}
        </h1>
        <div v-for="(subitem, subindex) in item.parameter" :key="subindex">
          <sdAlerts
            :outlined="false"
            :closable="false"
            :showIcon="false"
            :message="subitem.name"
            :description="JSON.stringify(subitem.value)"
            type="info"
          />
        </div>
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

import { ref, onBeforeMount } from 'vue';
const activeKey = ref(0);

const lstTestCase = ref<any[]>([]);

onBeforeMount(() => {
  if (props.testCases) {
    for (const iterator of props.testCases) {
      var propertyNames = Object.keys(JSON.parse(iterator.testCase.input));
      var parameter = [];
      for (var i = 0; i < propertyNames.length; i++) {
        var propertyName = propertyNames[i];
        var propertyValue = JSON.parse(iterator.testCase.input)[propertyName];
        parameter.push({ name: propertyName, value: propertyValue });
      }

      lstTestCase.value.push({
        parameter,
        isPass: iterator.isPass,
      });
    }
  }
});
</script>
