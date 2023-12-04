<script setup lang="ts">
import { InfoWraper, NavAuth, UserDropDown } from './auth-info-style';
// import Support from "./Support";
import Settings from './Settings.vue';
import Notification from './Notification.vue';
import Message from '@/layoutdemo/Message.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { LogoutOutlined } from '@ant-design/icons-vue';
import SearchBar from '@/layoutdemo/Search.vue';

const flag: any = 'english';
const { dispatch } = useStore();
const { push } = useRouter();
const SignOut = (e: any) => {
  e.preventDefault();
  push('/auth/login');
  dispatch('logOut');
};

const onFlagChangeHandle = (value: any) => {
  flag.value = value;
};
</script>

<template>
  <InfoWraper>
    <SearchBar />
    <Message />
    <Notification />
    <!-- <Settings /> -->
    <!-- <Support /> -->
    <div class="ninjadash-nav-actions__item ninjadash-nav-actions__language">
      <sdDropdown placement="bottomRight" :action="['click']">
        <template v-slot:overlay>
          <NavAuth>
            <router-link @click="() => onFlagChangeHandle('vi')" to="#">
              <img style="width: 20px" :src="'https://cdn-icons-png.flaticon.com/512/323/323319.png'" alt="" />
              <span>Vietnames</span>
            </router-link>
            <router-link @click="() => onFlagChangeHandle('jp')" to="#">
              <img style="width: 20px" :src="'https://cdn-icons-png.flaticon.com/512/197/197374.png'" alt="" />
              <span>English</span>
            </router-link>
            <router-link @click="() => onFlagChangeHandle('english')" to="#">
              <img style="width: 20px" :src="'https://cdn-icons-png.flaticon.com/512/4852/4852821.png'" alt="" />
              <span>Korean</span>
            </router-link>
            <router-link @click="() => onFlagChangeHandle('english')" to="#">
              <img style="width: 20px" :src="'https://cdn-icons-png.flaticon.com/512/552/552051.png'" alt="" />
              <span>Japanese</span>
            </router-link>
          </NavAuth>
        </template>
        <a to="#" class="ninjadash-nav-action-link">
          <img style="width: 20px" :src="'https://cdn-icons-png.flaticon.com/512/323/323319.png'" alt="" />
        </a>
      </sdDropdown>
    </div>

    <div class="ninjadash-nav-actions__item ninjadash-nav-actions__author">
      <sdPopover placement="bottomRight" action="click">
        <template v-slot:content>
          <UserDropDown>
            <div class="user-dropdown">
              <figure class="user-dropdown__info">
                <img :src="'/src/assets/img/avatar/chat-auth.png'" alt="" />
                <figcaption>
                  <sdHeading as="h5">Admin</sdHeading>
                  <p>Support Engineer</p>
                </figcaption>
              </figure>
              <ul class="user-dropdown__links">
                <li>
                  <a to="#"> <unicon name="user"></unicon> Profile </a>
                </li>
                <li>
                  <a to="#"> <unicon name="bell"></unicon> Help </a>
                </li>
              </ul>
              <a @click="SignOut" class="user-dropdown__bottomAction" href="#"> <LogoutOutlined /> Sign Out </a>
            </div>
          </UserDropDown>
        </template>
        <a to="#" class="ninjadash-nav-action-link">
          <a-avatar :src="'/src/assets/img/avatar/chat-auth.png'" />
          <span class="ninjadash-nav-actions__author--name">Admin</span>
          <unicon name="angle-down"></unicon>
        </a>
      </sdPopover>
    </div>
  </InfoWraper>
</template>
