<template>
  <a-row :gutter="[16, 10]">
    <a-col :span="1" :xxl="1" :xl="1" :lg="1" :md="0" :sm="0" :xs="0">
      <div class="flex-center" style="margin-top: 20px">
        <sdButton size="default" shape="circle" type="primary" @click="scrollLeft">
          <unicon name="arrow-left" width="14"></unicon>
        </sdButton>
      </div>
    </a-col>
    <a-col :span="22" :xxl="22" :xl="22" :lg="22" :md="24" :sm="24" :xs="24">
      <h2 style="margin-top: 10px">Tài liệu</h2>
      <div
        class="scroll-container"
        ref="scrollContainer"
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        @selectstart="preventSelection"
      >
        <div style="min-width: 200px; margin: 20px 10px" v-for="item in lstVideo" :key="item.id">
          <a-card class="document_item" @click="downloadDocument(item.link, item.type)">
            <div class="flex-center">
              <unicon name="file-alt"></unicon>
              <span>{{ item.fileName }}</span>
              <unicon name="arrow-to-bottom"></unicon>
            </div>
          </a-card>
        </div>
      </div>
    </a-col>
    <a-col :span="1" :xxl="1" :xl="1" :lg="1" :md="0" :sm="0" :xs="0">
      <div class="flex-center" style="margin-top: 20px">
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
    type: 'powerpoint',
    fileName: 'File name',
    link: 'http://',
  },
  {
    id: 2,
    type: 'powerpoint',
    fileName: 'File name',
    link: 'http://',
  },
  {
    id: 3,
    type: 'powerpoint',
    fileName: 'File name',
    link: 'http://',
  },
  {
    id: 4,
    type: 'powerpoint',
    fileName: 'File name',
    link: 'http://',
  },
  {
    id: 5,
    type: 'powerpoint',
    fileName: 'File name',
    link: 'http://',
  },
  {
    id: 6,
    type: 'powerpoint',
    fileName: 'File name',
    link: 'http://',
  },
  {
    id: 7,
    type: 'powerpoint',
    fileName: 'File name',
    link: 'http://',
  },
  {
    id: 8,
    type: 'powerpoint',
    fileName: 'File name',
    link: 'http://',
  },
  {
    id: 9,
    type: 'powerpoint',
    fileName: 'File name',
    link: 'http://',
  },
  {
    id: 10,
    type: 'powerpoint',
    fileName: 'File name',
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
const downloadDocument = (link: String, type: String) => {
  console.log(link, type);
};
</script>

<style scoped>
.flex-center {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

.document_item {
  border-radius: 20px;
  border-width: 2px;
  transition: transform 0.2s ease;
}

.document_item:hover {
  cursor: pointer;
  transform: translateY(-5px);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.fiLpOL.fiLpOL {
  background: #297d9f !important;
}
</style>
