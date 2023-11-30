<script setup lang="ts">
import { UserBioBox } from '../myProfile/overview/style';
import { faFacebookF, faDribbble, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Main } from '../../styled';
import SingleChat from './SingleChat.vue';
import { useStore } from 'vuex';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
const title = 'Khai báo biến cơ bản';
</script>

<template>
  <sdPageHeader
    title="Chat box"
    :routes="[
      {
        path: '/',
        breadcrumbName: 'Hoc vien',
      },
      {
        path: '/',
        breadcrumbName: 'Chat box',
      },
    ]"
    class="ninjadash-page-header-main"
  >
  </sdPageHeader>
  <Main>
    <a-row :gutter="30">
      <a-col :xxl="7" :lg="10" :xs="24" v-if="$route.params.id">
        <UserBioBox>
          <sdCards headless>
            <article class="user-info">
              <sdHeading as="h5" class="user-info__title"
                ><p style="font-size: larger">{{ title }}</p></sdHeading
              >
              <a-button>Xem video hướng dẫn</a-button>
            </article>
            <address class="user-info">
              <sdHeading as="h4" class="user-info__title">{{ 'đề bài' }}</sdHeading>
              <p>
                Khai báo ba số nguyên a, b, c. Ba số thực d,e,f. Ba ký tự g,h,i . Gán mỗi biến bởi một giá trị phù hợp.
              </p>
            </address>
            <div class="user-info">
              <sdHeading as="h4" class="user-info__title">Code</sdHeading>
              <div style="background-color: rgba(0, 0, 0, 0.717); padding: 10px; border-radius: 5px">
                <code style="color: white">
                  private readonly IStudentService _studentService; private readonly IAcademicYearService
                  _academicYearService; private readonly ISubjectService _subjectService;
                </code>
              </div>
            </div>
            <div class="user-info">
              <sdHeading as="h4" class="user-info__title">Chức năng bổ trợ</sdHeading>
              <divs style="display: flex; justify-content: flex-start; gap: 2%"
                ><a-button>Bài tập tương tự</a-button> <a-button>Kiến thức liên quan</a-button></divs
              >
            </div>
          </sdCards>
        </UserBioBox>
      </a-col>
      <a-col :xxl="$route.params.id ? 17 : 24" :lg="$route.params.id ? 14 : 24" :xs="24">
        <SingleChat />
      </a-col>
    </a-row>
  </Main>
</template>

<style scoped>
.ps {
  height: 495px;
}
</style>
