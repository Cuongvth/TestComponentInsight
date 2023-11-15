<template>
  <div style="height: 100%; display: grid; grid-template-rows: 30px calc(100% - 70px); row-gap: 30px; width: 100%">
    <div>
      <a-select v-model:value="theme" @change="handleChangeTheme" size="large" name="basic-select" style="width: 200px">
        <a-select-option v-for="item in themes" :key="item" :value="item">{{ item }}</a-select-option>
      </a-select>
    </div>
    <div style="height: 100%; width: 100%">
      <div ref="editorContainer" style="height: 100%; width: calc(100% - 5px)"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:content']);

import { onMounted } from 'vue';
import * as editor from 'monaco-editor/esm/vs/editor/editor.api';
import './userWorker';
import { ref } from 'vue';
import * as monaco from 'monaco-editor';

const theme = ref('vs');
const editorContainer = ref();

const themes = ['VS', 'VS-Dark'];

let editorInstance = null as any;
onMounted(() => {
  editorInstance = editor.editor.create(editorContainer.value, {
    value: props.content,
    language: props.language,
    theme: theme.value,
    automaticLayout: true,
  });

  editorInstance.onDidChangeModelContent(() => {
    emit('update:content', editorInstance.getValue());
  });
});

const handleChangeTheme = () => {
  monaco.editor.setTheme(theme.value.toLowerCase());
};
</script>
