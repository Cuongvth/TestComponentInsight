<template>
    <div>
      <a-modal v-model:visible="open" title="Tạo bài viết" @ok="handleOk">
        <template #footer>
          <a-button key="back" @click="handleCancel">Đóng</a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="handleOk"
            >Đăng</a-button
          >
        </template>
        <a-card>
          <a-row :gutter="8">
            <a-col :lg="12">
              <input @focus="handleFocus" @blur="handleBlur" class="input-tieude" placeholder="Tiêu đề" />
            </a-col>
            <a-col :lg="12">
              <a-select
                v-model:value="value"
                show-search
                placeholder="Chọn chủ đề"
                style="width:200px"
                :options="options"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
              ></a-select>
            </a-col>
          </a-row>
          <a-row :gutter="8">
            <a-col :lg="24">
            </a-col>
          </a-row>
        </a-card>
      </a-modal>
    </div>
  </template>
  <script lang="ts" setup>
  import { ref } from "vue";
  import type { SelectProps } from "ant-design-vue";
  const loading = ref<boolean>(false);
  const open = ref<boolean>(false);
  const showModal = () => {
    open.value = true;
  };
  const options = ref<SelectProps["options"]>([
    { value: "Hỏi đáp", label: "Hỏi đáp" },
    { value: "Dữ liệu & giải thuật", label: "Dữ liệu & giải thuật" },
    { value: "Ngôn ngữ lập trình", label: "Ngôn ngữ lập trình" },
    {value: "Trí tuệ nhân tạo", label: "Trí tuệ nhân tạo"},
    { value: "Python", label: "Python"},
    {value: "ReactJs", label: "ReactJs"}
  ]);
  const handleBlur = () => {
    console.log("blur");
  };
  const handleFocus = () => {
    console.log("focus");
  };
  const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
  
  const value = ref<string | undefined>(undefined);
  
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const handleOk = () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      open.value = false;
    }, 2000);
  };
  
  const handleCancel = () => {
    open.value = false;
  };
  
  defineExpose({
    showModal,
  });
  </script>
  <style scoped>
  .input-tieude:focus{
    outline: none;
  }
  .input-tieude{
    padding: 6px 16px;
    border: 1px rgb(219, 218, 218) solid;
    height: 100%;
  }
  </style>
  