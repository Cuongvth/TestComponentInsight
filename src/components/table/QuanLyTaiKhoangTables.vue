<script setup lang="ts">
import { computed, ref, unref } from 'vue';
import { DataTableStyleWrap } from './Style';
import { TableWrapper } from '../../views/styled';
import { useStore } from 'vuex';
import CreateHocVien from '@/views/dashboard/CreateHocVien.vue';
const props = defineProps({
  onEvent: Function,
  filterOption: Boolean,
  filterOnchange: Boolean,
  rowSelection: Boolean,
  tableData: Array,
  columns: Array,
});
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  open.value = false;
};
const { dispatch } = useStore();

const handleIdSearch = (e: any) => {
  const id = e.currentTarget.value;
  dispatch('dataLiveFilter', { value: id, key: 'id' });
};
const handleStatusSearch = (value: any) => {
  dispatch('dataLiveFilter', { value, key: 'status' });
};

const handleDataUser = (e: any) => {
  const { value } = e.currentTarget;
  dispatch('dataLiveFilter', { value, key: 'name' });
};

const handleSearch = () => {
  const idInput = document.querySelector('.ninjadash-data-id') as HTMLInputElement;
  const statusSelect = document.querySelector('.ninjadash-data-status .ant-select-selection-item') as HTMLDivElement;
  if (idInput && statusSelect) {
    const id = idInput.value;
    const status = statusSelect.title;
    dispatch('filterWithSubmit', { id, status });
  }
};

const selectedRowKeys = ref([]); // Check here to configure the default column

const onSelectChange = (changableRowKeys: any) => {
  console.log('selectedRowKeys changed: ', changableRowKeys);
  selectedRowKeys.value = changableRowKeys;
};

const rowSelections = computed(() => {
  return {
    selectedRowKeys: unref(selectedRowKeys),
    onChange: onSelectChange,
    hideDefaultSelections: true,
  };
});
</script>

<template>
  <DataTableStyleWrap>
    <div v-if="filterOption" class="ninjadash-datatable-filter">
      <div v-if="!filterOnchange" class="ninjadash-datatable-filter__left">
        <div class="ninjadash-datatable-filter__input">
          <span class="label">Id:</span>
          <a-input class="ninjadash-data-id" placeholder="Search with Id" />
        </div>
        <div class="ninjadash-datatable-filter__input">
          <span class="label">Status:</span>
          <a-select :style="{ width: 200 }" class="ninjadash-data-status" defaultValue="active">
            <a-select-option value="active">Active</a-select-option>
            <a-select-option value="deactiveted">Deactivated</a-select-option>
            <a-select-option value="blocked">Blocked</a-select-option>
          </a-select>
        </div>
        <div class="ninjadash-datatable-filter__action">
          <sdButton type="primary" size="sm" @click="handleSearch" transparented>Submit</sdButton>
        </div>
      </div>

      <div v-else class="ninjadash-datatable-filter__left"></div>

      <button class="button-18" role="button" @click="onEvent(null, false)">
        <font-awesome-icon
          class="super-crazy-colors"
          icon="fa-user-plus"
          :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
        />
      </button>
      <div class="ninjadash-datatable-filter__right" style="padding: 0 10px">
        <a-select style="min-width: 100%" mode="multiple" :default-value="['HocVien']" placeholder="Vui lòng chọn">
          <a-select-option value="HocVien">Học Viên</a-select-option>
          <a-select-option value="Admin">Admin</a-select-option>
          <a-select-option value="Marketing">Marketing</a-select-option>
          <a-select-option value="TroGiang">Trợ Giảng</a-select-option>
        </a-select>
      </div>
      <div class="ninjadash-datatable-filter__right">
        <a-input @change="handleDataUser" size="default" placeholder="Tìm kiếm">
          <template #prefix>
            <unicon name="search"></unicon>
          </template>
        </a-input>
      </div>
    </div>
    <a-modal
      v-model:visible="open"
      title="Thêm Mới Học Viên"
      @ok="handleOk"
      :cancel-button-props="{ style: { display: 'none' } }"
      :ok-button-props="{ style: { display: 'none' } }"
      width="63rem"
    >
      <CreateHocVien />
    </a-modal>
    <div class="ninjadasj-datatable">
      <TableWrapper class="table-data-view table-responsive">
        <a-table
          v-if="rowSelection"
          :row-selection="rowSelections"
          :pagination="{ pageSize: 10, showSizeChanger: true }"
          :data-source="tableData"
          :columns="columns"
        />

        <a-table
          v-else
          :pagination="{ pageSize: 10, showSizeChanger: true }"
          :data-source="tableData"
          :columns="columns"
        />
      </TableWrapper>
    </div>
  </DataTableStyleWrap>
</template>
<style scoped>
.button-18 {
  align-items: center;
  background-color: #5352ed;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen,
    'Oxygen Sans', Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande',
    Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0 20px;
  text-align: center;
  touch-action: manipulation;
  margin: 0 10px;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
}

.button-18:hover,
.button-18:focus {
  background-color: #70a1ff;
  color: #ffffff;
}

.button-18:active {
  background: #70a1ff;
  color: rgb(255, 255, 255, 0.7);
}

.button-18:disabled {
  cursor: not-allowed;
  background: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.3);
}
</style>
