<template>
  <div ref="editorContainer" style="height: 100%"></div>
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

const theme = 'vs';
const editorContainer = ref();

let editorInstance = null as any;
onMounted(() => {
  editorInstance = editor.editor.create(editorContainer.value, {
    value: props.content,
    language: props.language,
    theme: theme,
    automaticLayout: true,
  });

  editorInstance.onDidChangeModelContent(() => {
    emit('update:content', editorInstance.getValue());
  });
});
</script>
