<template>
  <div style="height: 900px; width: 100%">
    <div id="wrapper" @mouseup="endDragging">
      <div
        :style="{
          width: `${dividerPosition}%`,
          padding: '30px',
        }"
      >
        <LeftComponent :lst-bai-thi="lstBaiThi" :lst-id-bai-thi="lstIdBaiThi" />
      </div>
      <div
        id="divider"
        :style="{
          left: `${dividerPosition}%`,
        }"
        @mousedown="startDragging"
      ></div>
      <div
        :style="{
          width: `${100 - dividerPosition}%`,
          padding: '30px',
        }"
      >
        <RightComponent :lst-bai-thi="lstBaiThi" :lst-id-bai-thi="lstIdBaiThi" :lstbai-thi-dau-id="lstbaiThiDauId" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import LeftComponent from './LeftComponent.vue';
import RightComponent from './RightComponent.vue';
import * as thiDauAPI from '@/apiResources/thiDauAPI';

const dividerPosition = ref(30);

const handleDragging = (e: any) => {
  var element = document.getElementById('wrapper');

  const percentage = element ? ((e.pageX - element.offsetLeft) / element.offsetWidth) * 100 : 0;

  if (percentage >= 10 && percentage <= 60) {
    dividerPosition.value = Number.parseFloat(percentage.toFixed(2));
  } else {
    document.removeEventListener('mousemove', handleDragging);
  }
};
const startDragging = () => {
  document.addEventListener('mousemove', handleDragging);
};
const endDragging = () => {
  document.removeEventListener('mousemove', handleDragging);
};

const lstIdBaiThi = [3178];
const lstbaiThiDauId = [1014];
const lstBaiThi = ref<any[]>([]);

onBeforeMount(async () => {
  for (const iterator of lstIdBaiThi) {
    const result = await thiDauAPI.getBaiDauById(iterator);
    lstBaiThi.value.push(result);
  }
});
</script>

<style scoped>
#wrapper {
  height: 100%;
  display: flex;
  position: relative;
}
#wrapper #divider {
  height: 100%;
  width: 6px;
  background: #fff;
  transform: translateX(-3px);
  position: absolute;
  top: 0;
  z-index: 1;
  cursor: ew-resize;
}
</style>
