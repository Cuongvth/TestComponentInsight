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
              <ConsoleComponent :testCases="item.result" />
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
import { onBeforeMount, ref } from 'vue';
import MonacoEditor from './MonacoEditor.vue';
import ConsoleComponent from './ConsoleComponent.vue';
import * as thiDauAPI from '@/apiResources/thiDauAPI';
const lstIdBaiThi = [1118];
const lstbaiThiDauId = [9];
const activeKey = ref(lstIdBaiThi[0]);

const lstBaiThi = ref<any[]>([]);
const dividerRight = ref();
const runCodeResult = ref<any[]>([]);

onBeforeMount(async () => {
  for (const iterator of lstIdBaiThi) {
    const result = await thiDauAPI.getBaiDauById(iterator);
    lstBaiThi.value.push(result);
    dividerPosition.value.push(60);
    //contentMonaco.value.push(result.codeMau.find((c: any) => c.ngonNguDauID == 1).codeTestUnitTest);
    contentMonaco.value.push(result.codeMau.find((c: any) => c.ngonNguDauID == 1).codeDefault);
  }
  runCodeResult.value = lstBaiThi.value.map((c) => ({
    id: c.id,
    result: c.testCase.map((e: any) => ({
      testCase: e,
      yourOutput: '',
    })),
  }));
});

const dividerPosition = ref<number[]>([]);
const contentMonaco = ref<string[]>([]);

const runCode = async () => {
  const result = await thiDauAPI.runCode(
    contentMonaco.value[lstIdBaiThi.indexOf(activeKey.value)],
    1,
    lstbaiThiDauId[lstIdBaiThi.indexOf(activeKey.value)],
  );
  console.log(result);
};

const handleDragging = (e: any) => {
  var element = document.getElementsByClassName('wrapper-right') as HTMLCollectionOf<HTMLElement>;

  const percentage = element
    ? ((e.pageY - element[lstIdBaiThi.indexOf(activeKey.value)].offsetTop - 45) /
        element[lstIdBaiThi.indexOf(activeKey.value)].offsetHeight) *
      100
    : 0;
  if (percentage >= 30 && percentage <= 80) {
    dividerPosition.value[lstIdBaiThi.indexOf(activeKey.value)] = Number.parseFloat(percentage.toFixed(2));
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
