<template>
  <div style="height: calc(100vh - 125px); padding: 20px 30px; overflow-y: scroll">
    <a-row :gutter="[16, 10]">
      <a-col :span="17" :xxl="17" :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
        <div>
          <a-card style="border-radius: 20px; background-color: #0c4e99; color: white">
            <a-row>
              <a-col span="12">
                <h1 style="font-size: 30px; color: white">Các giải đấu vẫn đang diễn ra</h1>
                <p>Đừng quên tham gia đúng lịch nhé !!!</p>
              </a-col>
              <a-col span="12">
                <div>
                  <img src="./banner.png" style="margin: auto; display: block" />
                </div>
              </a-col>
            </a-row>
          </a-card>
        </div>
        <div style="margin-top: 10px">
          <h1 style="font-size: larger; font-weight: 600">Tổng quan giải đấu</h1>
          <a-row :gutter="[16, 10]">
            <a-col :span="8" :xxl="8" :xl="10" :lg="12" :md="24" :sm="24" :xs="24">
              <a-card class="card-overview" style="background-color: #369fff">
                <template #title>
                  <h1>Đang diễn ra</h1>
                </template>
                <img src="./bannerGoingOn.png" />
                <div style="display: flex; justify-content: end; align-items: center; margin-top: 20px">
                  <sdButton shape="circle" style="background-color: #e65a2b; color: white">
                    <span>Xem tất cả</span>
                  </sdButton>
                </div>
              </a-card>
            </a-col>
            <a-col :span="8" :xxl="8" :xl="10" :lg="12" :md="24" :sm="24" :xs="24">
              <a-card class="card-overview" style="background-color: #ff993a">
                <template #title>
                  <h1>Đã đăng kí</h1>
                </template>
                <img src="./bannerRegistered.png" />
                <div style="display: flex; justify-content: end; align-items: center; margin-top: 20px">
                  <sdButton shape="circle" style="background-color: #e65a2b; color: white">
                    <span>Xem tất cả</span>
                  </sdButton>
                </div>
              </a-card>
            </a-col>
            <a-col :span="8" :xxl="8" :xl="10" :lg="12" :md="24" :sm="24" :xs="24">
              <a-card class="card-overview" style="background-color: #ffd143">
                <template #title>
                  <h1>Đã diễn ra</h1>
                </template>
                <img src="./bannerTookPlace.png" />
                <div style="display: flex; justify-content: end; align-items: center; margin-top: 20px">
                  <sdButton shape="circle" style="background-color: #e65a2b; color: white">
                    <span>Xem tất cả</span>
                  </sdButton>
                </div>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :span="7" :xxl="7" :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
        <div>
          <a-card
            style="border-radius: 20px; background-color: #dae3ef; color: white; max-height: 520px; overflow-y: scroll"
          >
            <div style="display: flex; justify-content: space-between; align-items: center">
              <h1 style="font-size: larger; font-weight: 600; margin: 0">Giải đấu đang diễn ra</h1>
              <a href="">Xem tất cả</a>
            </div>
            <div style="margin-top: 20px">
              <a-card
                style="border-radius: 20px; background-color: #369fff; color: white; padding: 20px; margin-top: 10px"
                v-for="i in 10"
                :key="i"
              >
                <a-row>
                  <a-col :span="12">
                    <div style="display: flex; flex-direction: column; height: 100%">
                      <div style="flex: 1">
                        <h1 style="font-size: x-large; color: white; margin: 0">Ngày thứ 3 đen tối</h1>
                        <p>Bắt đầu: 9:00 26/11/2023</p>
                      </div>
                      <div style="display: flex; align-items: center; margin-bottom: 10px">
                        <a-avatar src="https://nemthuanviet.com/wp-content/uploads/2023/10/cho-long-xu-2.jpg">
                        </a-avatar>
                        <span style="margin-left: 10px; font-size: medium">Đang chờ</span>
                      </div>
                    </div>
                  </a-col>
                  <a-col :span="12">
                    <div style="display: flex; justify-content: end; width: 100%">
                      <unicon name="ellipsis-h" style="fill: white; cursor: pointer"></unicon>
                    </div>
                    <div style="display: flex; justify-content: end; width: 100%; margin-top: 10px">
                      <img src="./tower.png" style="max-height: 120px" />
                    </div>
                  </a-col>
                </a-row>
              </a-card>
            </div>
          </a-card>
        </div>
      </a-col>
    </a-row>
    <div style="margin-top: 10px">
      <h1 style="font-size: larger; font-weight: 600">Lịch thi đấu</h1>
      <CalendarComponent></CalendarComponent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CalendarComponent from './CalendarComponent.vue';
</script>

<style scoped>
.card-overview {
  border-radius: 20px;
}

.card-overview h1 {
  font-weight: 700;
  font-size: larger;
  color: white;
}

.card-overview img {
  max-height: 70px;
}
</style>
