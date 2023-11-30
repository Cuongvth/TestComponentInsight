<template>
  <div>
    <sdButton size="default" shape="circle" type="primary" @click="showModal">
      <span>Đăng kí</span><span> </span>
      <unicon name="arrow-right" width="14"></unicon>
    </sdButton>
    <a-modal title="Đăng ký học" v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
      <p>Khóa học {{ props.courseName }}</p>
      <a-radio-group v-model:value="selectedCourse" vertical>
        <a-radio v-for="course in courseOptions" :key="course.name" :value="course">
          <span>{{ course.name }}</span>
          <span> - </span>
          <span>Giá: {{ course.price.toLocaleString('vi-VN') }} đ</span>
          <p>{{ course.description }}</p>
        </a-radio>
      </a-radio-group>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  courseName: String;
  courseOptions: any[];
}>();

const emits = defineEmits(['register']);

const visible = ref(false);
const selectedCourse = ref(null);

const showModal = () => {
  visible.value = true;
};

const handleOk = () => {
  if (selectedCourse.value) {
    emits('register', selectedCourse.value);
  }
  visible.value = false;
};

const handleCancel = () => {
  visible.value = false;
};
</script>
