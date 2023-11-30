<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const data = [
  {
    id: 1,
    name: 'React Basic 1',
    tag: [
      { value: 'components', label: 'Components' },
      { value: 'props', label: 'Props' },
    ],
    lever: 'Dễ',
    require: true,
    status: 'correct',
  },
  {
    id: 2,
    name: 'React Basic 2',
    tag: [
      { value: 'components', label: 'Components' },
      { value: 'props', label: 'Props' },
    ],
    lever: 'Dễ',
    require: false,
    status: 'wrong',
  },
  {
    id: 3,
    name: 'React Basic 3',
    tag: [
      { value: 'components', label: 'Components' },
      { value: 'props', label: 'Props' },
    ],
    lever: 'Dễ',
    require: true,
    status: 'wrong',
  },
  {
    id: 4,
    name: 'React Basic 4',
    tag: [
      { value: 'components', label: 'Components' },
      { value: 'props', label: 'Props' },
    ],
    lever: 'Dễ',
    require: false,
    status: 'incomplete',
  },
  {
    id: 5,
    name: 'React Basic 5',
    tag: [
      { value: 'components', label: 'Components' },
      { value: 'props', label: 'Props' },
    ],
    lever: 'Dễ',
    require: false,
    status: 'incomplete',
  },
  {
    id: 6,
    name: 'React Basic 6',
    tag: [
      { value: 'components', label: 'Components' },
      { value: 'props', label: 'Props' },
    ],
    lever: 'Dễ',
    require: false,
    status: 'incomplete',
  },
];
const result = ref<any[]>(data);

const priority = ref('all');
const status = ref('all');
const learning = ref('all');

const lstpriority = [
  { value: 'all', label: 'Tất cả' },
  { value: 'mandatory', label: 'Bắt buộc làm' },
  { value: 'not_mandatory', label: 'Không bắt buộc làm' },
];

const lststatus = [
  { value: 'all', label: 'Tất cả' },
  { value: 'correct', label: 'Đúng' },
  { value: 'wrong', label: 'Sai' },
  { value: 'incomplete', label: 'Chưa hoàn thành' },
];

const lstlearning = [
  { value: 'all', label: 'Tất cả' },
  { value: 'intro_react', label: 'Giới thiệu React' },
  { value: 'components', label: 'Components' },
  { value: 'props', label: 'Props' },
  { value: 'use_state', label: 'Hook useState' },
  { value: 'use_effect', label: 'Hook useEffect' },
  { value: 'use_ref', label: 'Hook useRef' },
  { value: 'memo', label: 'Hook memo' },
  { value: 'use_callback', label: 'Hook useCallback' },
  { value: 'use_memo', label: 'Hook useMemo' },
  { value: 'use_context', label: 'Hook useContext' },
];

const filterData = () => {
  result.value = data;
  if (priority.value === 'mandatory') {
    result.value = result.value.filter((c) => c.require);
  } else if (priority.value === 'not_mandatory') {
    result.value = result.value.filter((c) => !c.require);
  }

  if (status.value !== 'all') {
    result.value = result.value.filter((c) => c.status === status.value);
  }

  if (learning.value !== 'all') {
    result.value = result.value.filter((c) => c.tag.map((c: any) => c.value).includes(learning.value));
  }
};

const current = ref(1);
const pagination_total = (data.length % 5 === 0 ? data.length / 5 : Math.floor(data.length / 5) + 1) * 10;
</script>

<template>
  <a-row :gutter="[16, 10]">
    <a-col :span="1" :xxl="1" :xl="1" :lg="1" :md="0" :sm="0" :xs="0"> </a-col>
    <a-col :span="22" :xxl="22" :xl="22" :lg="22" :md="24" :sm="24" :xs="24">
      <h2 style="margin-top: 10px">Bài tập</h2>
      <a-row :gutter="[16, 10]">
        <a-col :span="18" :xxl="18" :xl="16" :lg="14" :md="24" :sm="24" :xs="24">
          <a-list item-layout="horizontal" :data-source="result.slice((current - 1) * 5, current * 5)">
            <template #renderItem="{ item }">
              <div class="exercise_item">
                <router-link
                  :to="`/hocvien/khoahoc/${useRoute().params.idKhoaHoc}/monhoc/${useRoute().params.idMonHoc}/baitap/${
                    item.id
                  }/lambaitap`"
                >
                  <a-list-item>
                    <template #actions>
                      <div class="flex-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/2234px-Star%2A.svg.png"
                          alt=""
                          width="30"
                          v-if="item.require"
                          style="margin-right: 20px"
                        />
                        <sdButton size="default" shape="circle" type="primary">
                          <span>Làm bài</span>
                          <unicon name="arrow-right"></unicon>
                        </sdButton>
                      </div>
                    </template>
                    <a-list-item-meta style="border: 0">
                      <template #title>
                        <a-tag
                          color="green"
                          style="
                            padding: 5px 10px;
                            display: flex;
                            justify-content: center;
                            max-width: 50px;
                            border-radius: 10px;
                          "
                        >
                          {{ item.lever }}
                        </a-tag>
                        <h3>{{ item.name }}</h3>
                      </template>
                      <template #description>
                        <a-tag
                          color="blue"
                          v-for="tag in item.tag.map((c : any) => (c.label))"
                          :key="tag"
                          style="padding: 5px 10px; border-radius: 10px"
                          >{{ tag }}</a-tag
                        >
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                </router-link>
              </div>
            </template>
          </a-list>
          <div style="margin-top: 10px; display: flex; justify-content: center">
            <a-pagination v-model:current="current" :total="pagination_total" show-less-items />
          </div>
        </a-col>
        <a-col :span="6" :xxl="6" :xl="8" :lg="10" :md="24" :sm="24" :xs="24">
          <h3>Filter</h3>
          <p>Ưu tiên</p>
          <a-radio-group v-model:value="priority" @change="filterData">
            <a-radio :value="item.value" v-for="item in lstpriority" :key="item.value" style="width: 100%">{{
              item.label
            }}</a-radio>
          </a-radio-group>
          <p>Tình trạng</p>
          <a-radio-group v-model:value="status" @change="filterData">
            <a-radio :value="item.value" v-for="item in lststatus" :key="item.value" style="width: 100%">{{
              item.label
            }}</a-radio>
          </a-radio-group>
          <p>Phần học</p>
          <a-radio-group v-model:value="learning" @change="filterData">
            <a-radio :value="item.value" v-for="item in lstlearning" :key="item.value" style="width: 100%">{{
              item.label
            }}</a-radio>
          </a-radio-group>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="1" :xxl="1" :xl="1" :lg="1" :md="0" :sm="0" :xs="0"> </a-col>
  </a-row>
</template>

<style scoped>
.flex-center {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.exercise_item {
  border-radius: 20px;
  border: 2px solid #f0f0f0;
  margin-bottom: 10px;
  background-color: #a4c2ce;
  padding: 5px 50px;
}

.exercise_item:hover {
  background-color: #21498c;
}

.exercise_item:hover h3 {
  color: white;
}

.fiLpOL.fiLpOL {
  background: #297d9f !important;
}
</style>
