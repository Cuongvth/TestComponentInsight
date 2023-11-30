<template>
  <a-row :gutter="[16, 10]">
    <a-col :span="1" :xxl="1" :xl="1" :lg="1" :md="0" :sm="0" :xs="0">
      <div class="flex-center">
        <sdButton size="default" shape="circle" type="primary" @click="scrollLeft">
          <unicon name="arrow-left" width="14"></unicon>
        </sdButton>
      </div>
    </a-col>
    <a-col :span="22" :xxl="22" :xl="22" :lg="22" :md="24" :sm="24" :xs="24">
      <h2 style="margin-top: 10px">Bài giảng</h2>
      <div
        class="scroll-container"
        ref="scrollContainer"
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="stopDrag"
        @selectstart="preventSelection"
        @mouseleave="stopDrag"
      >
        <div style="min-width: 200px; margin: 20px 10px" v-for="item in lstVideo" :key="item.id">
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <a-card class="video-item">
              <h4>{{ item.title }}</h4>
              <template #cover>
                <img :src="item.img" />
              </template>
            </a-card>
          </a>
        </div>
      </div>
    </a-col>
    <a-col :span="1" :xxl="1" :xl="1" :lg="1" :md="0" :sm="0" :xs="0">
      <div class="flex-center">
        <sdButton size="default" shape="circle" type="primary" @click="scrollRight">
          <unicon name="arrow-right" width="14"></unicon>
        </sdButton>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const scrollContainer = ref();

const lstVideo = [
  {
    id: 1,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
  {
    id: 2,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
  {
    id: 3,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
  {
    id: 4,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
  {
    id: 5,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
  {
    id: 6,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
  {
    id: 7,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
  {
    id: 8,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
  {
    id: 9,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
  {
    id: 10,
    title: 'Hook nemo',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    link: 'http://',
  },
];

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' });
  }
};

const startX = ref(0);
const scrollLeftValue = ref(0);
const dragging = ref(false);

const startDrag = (event: MouseEvent) => {
  startX.value = event.pageX - (event.target as HTMLElement).offsetLeft;
  scrollLeftValue.value = (event.target as HTMLElement).scrollLeft;
  dragging.value = true;
};

const drag = (event: MouseEvent) => {
  if (dragging.value) {
    const x = event.pageX - (event.target as HTMLElement).offsetLeft;
    const walk = (x - startX.value) * 3; // Adjust scroll speed
    (event.target as HTMLElement).scrollLeft = scrollLeftValue.value - walk;
  }
};

const stopDrag = () => {
  dragging.value = false;
};

const preventSelection = (event: Event) => {
  event.preventDefault();
};
</script>

<style scoped>
.flex-center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.scroll-container {
  display: flex;
  overflow-x: hidden;
  background-color: #a4c2ce;
  padding: 0 20px;
  border-radius: 20px;
}

.scroll-container:hover {
  cursor: pointer;
}

.video-item {
  border-radius: 10px;
  text-align: center;
  border-width: 2px;
  transition: transform 0.2s ease;
}

.video-item img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 5px;
}

.video-item:hover {
  transform: translateY(-5px);
}

.fiLpOL.fiLpOL {
  background: #297d9f !important;
}
</style>
