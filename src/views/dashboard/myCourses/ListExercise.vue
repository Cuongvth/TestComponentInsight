<template>
  <div>
    <sdPageHeader :title="subjects" class="ninjadash-page-header-main"></sdPageHeader>
    <Main>
      <h3>Bài giảng</h3>
      <SolutionVideo />
      <h3>Tài liệu</h3>
      <DocumentComponent />
      <h3>Bài tập</h3>
      <ExerciseComponent />
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../styled';
import SolutionVideo from './SolutionVideo.vue';
import DocumentComponent from './DocumentComponent.vue';
import ExerciseComponent from './ExerciseComponent.vue';
const subjects = 'React Basic';
</script>
