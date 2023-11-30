<template>
  <div>
    <sdPageHeader :title="scourses" class="ninjadash-page-header-main"></sdPageHeader>
    <Main>
      <a-row :gutter="[16, 10]">
        <a-col
          :span="4"
          :xxl="4"
          :xl="5"
          :lg="6"
          :md="7"
          :sm="8"
          :xs="9"
          v-for="subject in subjects"
          :key="subject.title"
        >
          <div class="hover-div">
            <router-link :to="`/hocvien/khoahoc/${useRoute().params.id}/monhoc/${subject.id}`">
              <sdButton size="default" shape="circle" type="primary" class="hover-button">
                <span>Vào học</span><span> </span>
                <unicon name="arrow-right" width="14"></unicon>
              </sdButton>
            </router-link>
            <a-card class="subject-item">
              <h4>{{ subject.title }}</h4>
              <template #cover>
                <img alt="example" :src="subject.logo" />
              </template>
              <a-progress :percent="subject.progress" />
              <span>Goal {{ subject.goal }} / {{ subject.maxGoal }}%</span>
              <p>Limit: {{ subject.limit ? 'Limit' : 'No Limit' }}</p>
              <span>{{ subject.completed }}% Completed</span>
            </a-card>
          </div>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../../styled';
import { useRoute } from 'vue-router';
const scourses = 'React JS';

const subjects = [
  {
    id: 1,
    title: 'React Basic',
    goal: 86,
    maxGoal: 100,
    limit: false,
    progress: 80,
    completed: 20,
    logo: 'https://www.bkacad.edu.vn/upload_images/images/H%E1%BB%87%20ch%E1%BB%A9ng%20ch%E1%BB%89/1_XaGxIa_JuHc8YTR5Znv6tg.png',
  },
  {
    id: 2,
    title: 'React Router CSS',
    goal: 86,
    maxGoal: 100,
    limit: false,
    progress: 10,
    completed: 50,
    logo: 'https://www.bkacad.edu.vn/upload_images/images/H%E1%BB%87%20ch%E1%BB%A9ng%20ch%E1%BB%89/1_XaGxIa_JuHc8YTR5Znv6tg.png',
  },
  {
    id: 3,
    title: 'Ant Design',
    goal: 86,
    maxGoal: 100,
    limit: false,
    progress: 50,
    completed: 70,
    logo: 'https://www.bkacad.edu.vn/upload_images/images/H%E1%BB%87%20ch%E1%BB%A9ng%20ch%E1%BB%89/1_XaGxIa_JuHc8YTR5Znv6tg.png',
  },
];
</script>

<style scoped>
.hover-div {
  position: relative;
  border-radius: 20px;
}

.hover-button {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  transition: bottom 0.5s, opacity 0.5s;
}

.hover-div:hover .hover-button {
  opacity: 1;
  visibility: visible;
  bottom: 50%;
  transform: translate(-50, -50%);
}

.subject-item {
  border-radius: 20px;
  border-width: 2px;
}

.subject-item img {
  border-radius: 20px;
}
</style>
