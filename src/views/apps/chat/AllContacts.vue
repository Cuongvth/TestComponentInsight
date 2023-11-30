<script setup lang="ts">
import dayjs from 'dayjs';
import { BlockSpan, ChatWrapper } from './style';
import { textRefactor } from '../../../components/utilities/utilities';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const { state, dispatch } = useStore();
const match = useRoute();

function sortByTime(a: any, b: any) {
  return b.time - a.time;
}

const chatData = computed(() => {
  const sortedData = [...state.chat.privateChat.data].sort(sortByTime);
  return sortedData;
});

const dataFiltering = (e: Event) => {
  e.preventDefault();
  dispatch('filterSinglePage', match.params.id);
};
</script>

<template>
  <ChatWrapper> </ChatWrapper>
</template>
