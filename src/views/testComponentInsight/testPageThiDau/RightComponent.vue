<template>
  <div style="width: 100%; height: 100%">
    <a-tabs v-model:activeKey="activeKey" style="width: 100%; height: 100%">
      <a-tab-pane
        :tab="`Bài tập ${index + 1}`"
        style="width: 100%; height: 100%"
        v-for="(item, index) in runCodeResult"
        :key="item.id"
      >
        <div
          style="height: 100%; width: 100%; display: grid; grid-template-rows: calc(100% - 40px) 30px; row-gap: 10px"
        >
          <div class="wrapper-right" @mouseup="endDragging">
            <div
              :style="{
                height: `${dividerPosition[lstIdBaiThi.indexOf(activeKey)]}%`,
                width: '100%',
              }"
            >
              <MonacoEditor
                :content="contentMonaco[lstIdBaiThi.indexOf(activeKey)]"
                :language="'csharp'"
                @update:content="contentMonaco[lstIdBaiThi.indexOf(activeKey)] = $event"
              />
            </div>
            <div
              class="divider-right"
              ref="dividerRight"
              :style="{
                top: `${dividerPosition[lstIdBaiThi.indexOf(activeKey)]}%`,
              }"
              @mousedown="startDragging"
            ></div>
            <div
              class="right-container"
              :style="{
                height: `${100 - dividerPosition[lstIdBaiThi.indexOf(activeKey)]}%`,
                width: '100%',
              }"
            >
              <div
                v-if="testLoading"
                style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center"
              >
                <a-spin />
              </div>
              <div
                v-else-if="hasError"
                style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center"
              >
                {{ error }}
              </div>
              <ConsoleComponent v-else :testCases="item.result" />
            </div>
          </div>
          <div style="width: 100%">
            <sdButton @click="runCode" size="default" type="primary" style="margin-left: 20px; height: 30px">
              <unicon name="layer-group" width="14"></unicon>
              <span>Run</span>
            </sdButton>
            <sdButton size="default" type="primary" style="margin-left: 20px; height: 30px">
              <unicon name="layer-group" width="14"></unicon>
              <span>Submit</span>
            </sdButton>
          </div>
        </div>
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
  lstbaiThiDauId: {
    type: Array<any>,
    required: true,
  },
  lstBaiThi: {
    type: Array<any>,
    required: true,
  },
});

import { ref, watch } from 'vue';
import MonacoEditor from './MonacoEditor.vue';
import ConsoleComponent from './ConsoleComponent.vue';
import * as thiDauAPI from '@/apiResources/thiDauAPI';
const activeKey = ref(props.lstIdBaiThi[0]);

const dividerRight = ref();
const runCodeResult = ref<any[]>([]);
const testLoading = ref(false);
const error = ref();
const hasError = ref(false);

watch(props.lstBaiThi, () => {
  for (const iterator of props.lstBaiThi) {
    dividerPosition.value.push(60);
    contentMonaco.value.push(
      iterator.codeMau
        .find((c: any) => c.ngonNguLapTrinhID == 1)
        .codeDefault.split('//!!!!!!!!!!Start')[1]
        .split('//!!!!!!!!!!End')[0]
        .trim(),
    );
  }

  runCodeResult.value = props.lstBaiThi.map((c) => ({
    id: c.id,
    result: c.testCase.map((e: any) => ({
      testCase: e,
      isPass: false,
    })),
  }));
});

const dividerPosition = ref<number[]>([]);
const contentMonaco = ref<string[]>([]);

const runCode = async () => {
  if (testLoading.value) {
    return;
  }
  testLoading.value = true;
  var result = null;
  try {
    result = await thiDauAPI.runCode(
      contentMonaco.value[props.lstIdBaiThi.indexOf(activeKey.value)],
      1,
      props.lstbaiThiDauId[props.lstIdBaiThi.indexOf(activeKey.value)],
    );
    console.log(result);
  } catch (error) {
    alert('Quá trình biên dịch xảy ra lỗi');
    testLoading.value = false;
    return;
  }

  if (result.errors !== undefined) {
    hasError.value = true;
    error.value = result.errors;
    testLoading.value = false;
    return;
  }

  var lstOutput = result.result.split('-');

  const newResult = runCodeResult.value
    .find((c) => c.id === activeKey.value)
    .result.map((c: any, index: any) => ({
      testCase: c.testCase,
      isPass: lstOutput[index].replace('\n', '').trim() === '1',
    }));

  runCodeResult.value.find((c) => c.id === activeKey.value).result = newResult;

  testLoading.value = false;
};

const handleDragging = (e: any) => {
  var element = document.getElementsByClassName('wrapper-right') as HTMLCollectionOf<HTMLElement>;

  const percentage = element
    ? ((e.pageY - element[props.lstIdBaiThi.indexOf(activeKey.value)].offsetTop - 45) /
        element[props.lstIdBaiThi.indexOf(activeKey.value)].offsetHeight) *
      100
    : 0;
  if (percentage >= 30 && percentage <= 80) {
    dividerPosition.value[props.lstIdBaiThi.indexOf(activeKey.value)] = Number.parseFloat(percentage.toFixed(2));
  }
};
const startDragging = () => {
  document.addEventListener('mousemove', handleDragging);
};
const endDragging = () => {
  document.removeEventListener('mousemove', handleDragging);
};
</script>

<style>
.ant-tabs-content {
  height: 100%;
}
</style>

<style scoped>
.wrapper-right {
  width: 100%;
  height: 100%;
  position: relative;
}
.wrapper-right .divider-right {
  width: 100%;
  height: 6px;
  background: #fff;
  transform: translateY(-3px);
  position: absolute;
  left: 0;
  z-index: 1;
  cursor: ns-resize;
}
</style>
