<template>
  <div>
    <sdPageHeader :title="subjects" class="ninjadash-page-header-main"></sdPageHeader>
    <Main>
      <SolutionVideo />
      <DocumentComponent />
      <ExerciseComponent />
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../../styled';
import SolutionVideo from './SolutionVideo.vue';
import DocumentComponent from './DocumentComponent.vue';
import ExerciseComponent from './ExerciseComponent.vue';
const subjects = 'React Basic';
</script>
