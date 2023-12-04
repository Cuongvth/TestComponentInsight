<script setup lang="ts">
import { ref } from 'vue';

const openSearch = ref(false);
const openSearchBar = (e: Event) => {
  e.preventDefault();
  openSearch.value = true;
};
const closeSearchBar = (e: Event) => {
  e.preventDefault();
  openSearch.value = false;
};
</script>

<template>
  <div :class="openSearch
    ? 'ninjadash-nav-actions__item ninjadash-nav-actions__searchbar show'
    : 'ninjadash-nav-actions__item ninjadash-nav-actions__searchbar'
    ">
    <div class="ninjadash-searchbar">
      <a-form name="ninjadash-search">
        <a-form-item>
          <a-input placeholder="Search Here" />
        </a-form-item>
      </a-form>
    </div>
    <router-link to="#" @click="(e: Event) => openSearchBar(e)" class="ninjadash-search-icon">
      <unicon name="search"></unicon>
    </router-link>
    <router-link to="#" @click="(e: Event) => closeSearchBar(e)" class="ninjadash-close-icon">
      <unicon name="times"></unicon>
    </router-link>
  </div>
</template>

<style scoped>
:global(#app > div > div > section > header > div > div.ninjadash-header-content__right.d-flex > div.ninjadash-nav-actions > div > div.ninjadash-nav-actions__item.ninjadash-nav-actions__searchbar.show > div > form > div > div > div > div > input) {
  width: 320px;
  overflow: hidden;
  height: 40px;
}

/* :global(#app > div > div > section > header > div > div.ninjadash-header-content__right.d-flex > div.ninjadash-nav-actions__item.ninjadash-nav-actions__searchbar.show) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 260px);

}

:global(#app > div > div > section > header > div > div.ninjadash-header-content__right.d-flex > div.ninjadash-nav-actions__item.ninjadash-nav-actions__searchbar.show > div) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

:global(#app > div > div > section > header > div > div.ninjadash-header-content__right.d-flex > div.ninjadash-nav-actions__item.ninjadash-nav-actions__searchbar.show > div > form) {

  width: 320px;
}

:global(#app > div > div > section > header > div > div.ninjadash-header-content__right.d-flex > div.ninjadash-nav-actions__item.ninjadash-nav-actions__searchbar.show > div > form > div > div > div > div > span) {
  height: 40px;
  border-radius: 15px;
  overflow: hidden;
}

:global(#app > div > div > section > header > div > div.ninjadash-header-content__right.d-flex > div.ninjadash-nav-actions__item.ninjadash-nav-actions__searchbar.show > div > form > div) {
  margin-bottom: unset;
} */
</style>