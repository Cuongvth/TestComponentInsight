<template>
    <div>
      <Main>
        <a-row :gutter="25">
          <a-col :lg="24">
            <a-row :gutter="25">
              <a-col :span="16" :offset="4" class="w-newsletter-page">
                <!-- <a-card class="header-input">
                  <a-row :gutter="8">
                    <a-col :xl="2" :lg="3" :md="4" :xs="5" :sm="4">
                      <img class="header-input-image"
                        src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/272894760_1441962499598505_5790021692436032782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHlx9qKoY3vv048CbrD4wwY_noQivS61cD-ehCK9LrVwAxlMcE3rqD_qxf0kBuV_c6t_qEEegNKc3txL7JETFCw&_nc_ohc=YF0lEx9LpioAX8aTOMi&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDPoBKlJrjkhOe5uOdYbrkqBkOWydeZAbWInbzhS_BSCg&oe=6558C132" />
                    </a-col>
                    <a-col :xl="22" :lg="21" :md="20" :xs="19" :sm="20">
                      <a-button class="set-background" type="text" block shape="round" @click="showModalTaoBaiViet">
                        <input class="input-baiviet" placeholder="Bạn đang nghĩ gì thế" />
                      </a-button>
                    </a-col>
                  </a-row>
  
                  <a-card class="header-item-bottom">
                    <hr style="opacity: 0.4; margin-bottom: 10px" />
                    <a-row :gutter="8">
                      <a-col :lg="12">
                        <a-button class="header-bottom" type="text" block>
                          <img class="header-select-image" src="@/assets/img/hinhanh-icon.png" />
                          Hình ảnh
                        </a-button>
                      </a-col>
                      <a-col :lg="12">
                        <a-button class="header-bottom" type="text" block>
                          <img class="header-select-camxuc" src="@/assets/img/matcuoi.png" />
                          Cảm xúc
                        </a-button>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-card> -->
                <a-card v-for="baiViet in dsBaiViet" :key="baiViet.id" class="baiviet-item">
                  <a-card class="card-baiviet">
                    <a-row :gutter="8">
                      <a-col :xl="22" :lg="22" :md="22" :sm="22" :xs="22" class="header-baiviet-item">
                        <img class="header-baiviet-item-img" :src="baiViet.avatar" alt="" />
                        <div class="d-block ml-10">
                          <h3 class="header-baiviet-nguoidang">
                            {{ baiViet.tenNguoiDang }}
                          </h3>
                          <p>{{ baiViet.thoiGianDang }}</p>
                        </div>
                      </a-col>
                      <a-col :xl="2" :lg="2" :md="2" :sm="2" :xs="2">
                        <button class="baiViet-right">
                          <unicon name="ellipsis-h"></unicon>
                        </button>
                      </a-col>
                      <div class="noi-dung-chinh">
                        <h2 class="tieu-de">
                          {{ baiViet.tieuDe }}
                        </h2>
                        <p class="noi-dung" v-html="baiViet.noiDung"></p>
                        <div class="anhbaiviet">
                          <img :src="baiViet.anhBaiViet" />
                        </div>
                        <a-space style="justify-content: flex-end">
                          <ul class="camxuc-item ninjadash-blog__meta">
                            <li class="camxuc-item-heart ninjadash-blog__meta--item">
                              <div class="set-index">
                                <p style="margin-right: 8px">70</p>
                                <unicon name="heart"></unicon>
                              </div>
                            </li>
                            <li class="ninjadash-blog__meta--item">
                              <div class="set-index">
                                <p style="margin-right: 8px">120</p>
                                <!-- <unicon name="file-alt"></unicon> -->
                                <unicon name="comment-alt" width="20"></unicon>
                              </div>
                            </li>
                          </ul>
                        </a-space>
                        <hr style="opacity: 0.4; margin-bottom: 14px" />
                        <a-row :gutter="8">
                          <a-col :lg="12" :xs="12" class="handle-heart">
                            <div class="handle-heart-item">
                              <unicon name="heart"></unicon>
                              <p class="camxuc-style">Yêu thích</p>
                            </div>
                          </a-col>
                          <a-col :lg="12" :xs="12" class="handle-comment">
                            <div class="handle-comment-item" @click="toggleComment">
                              <unicon name="comment-alt" width="20"></unicon>
                              <p class="camxuc-style">Bình luận</p>
                            </div>
                          </a-col>
                        </a-row>
                        <hr style="opacity: 0.4" />
  
                        <!-- Đoạn này tạo thẻ để nhập comment -->
                        <div class="comment-baiviet">
                          <a-row :gutter="8">
                            <a-col :xl="2" :lg="3" :xs="4" :md="3" :sm="4">
                              <img class="avatar-nguoibinhluan"
                                src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/272894760_1441962499598505_5790021692436032782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHlx9qKoY3vv048CbrD4wwY_noQivS61cD-ehCK9LrVwAxlMcE3rqD_qxf0kBuV_c6t_qEEegNKc3txL7JETFCw&_nc_ohc=YF0lEx9LpioAX8aTOMi&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDPoBKlJrjkhOe5uOdYbrkqBkOWydeZAbWInbzhS_BSCg&oe=6558C132" />
                            </a-col>
                            <a-col :xl="22" :lg="21" :xs="20" :md="21" :sm="20">
                              <a-button class="set-background" type="text" block shape="round">
                                <input class="input-baiviet" placeholder="Viết bình luận..." />
                              </a-button>
                            </a-col>
                          </a-row>
                          <!-- Đoạn này để hiển thị comment -->
                          <a-row :style="{ display: isCommentVisible ? 'block' : 'none' }" class="binhluan-list">
                            <a-col v-for="binhLuan in dsBinhLuan" :key="binhLuan.id" :span="24" :lg="24"
                              class="binhluan-item">
                              <div class="binhluan-card">
                                <div class="binhluan-card-item">
                                  <div class="binhluan-avatar">
                                    <img class="anhnguoibinhluan" :src="binhLuan.avatar" />
                                  </div>
                                  <a-card class="content-comment">
                                    <strong class="tennguoibinhluan">{{
                                      binhLuan.tenNguoiDung
                                    }}</strong>
                                    <div class="noidungbinhluan">
                                      {{ binhLuan.noiDungBinhLuan }}
                                    </div>
                                  </a-card>
                                </div>
                                <button class="handle-binhluan">
                                  <unicon name="ellipsis-h"></unicon>
                                </button>
                              </div>
                            </a-col>
                          </a-row>
                        </div>
                      </div>
                    </a-row>
                  </a-card>
                </a-card>
              </a-col>
            </a-row>
          </a-col>
          <ModalTaoBaiViet ref="modalBaiVietRef" />
  
        </a-row>
      </Main>
    </div>
  </template>
    
  <script setup lang="ts">
  import { CameraOutlined, FrownOutlined, InstagramOutlined } from '@ant-design/icons-vue';
  import { Main } from '../../styled';
  import { h, ref } from 'vue';
  import ModalTaoBaiViet from '@/views/dashboard/demoBangTin/modules/ModalTaoBaiViet.vue';
  const modalBaiVietRef = ref();
  const dsBaiViet = [
    {
      id: 1,
      tenNguoiDang: 'Trần Minh Quân',
      avatar:
        'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/272894760_1441962499598505_5790021692436032782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHlx9qKoY3vv048CbrD4wwY_noQivS61cD-ehCK9LrVwAxlMcE3rqD_qxf0kBuV_c6t_qEEegNKc3txL7JETFCw&_nc_ohc=YF0lEx9LpioAX8aTOMi&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDPoBKlJrjkhOe5uOdYbrkqBkOWydeZAbWInbzhS_BSCg&oe=6558C132',
      thoiGianDang: '2 giờ',
      tieuDe: 'Fifa Online 4',
      noiDung: 'Ae đá fifa online 4 không?',
      anhBaiViet:
        'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/278820931_1491738241287597_9043409823549188385_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEnXOMfwNpc59OHSWvPcnIlYHEtqbPstr5gcS2ps-y2vgtuwX6DDldhRgGdBBSW-z6RzR5tJk4quIUWZDxouPIK&_nc_ohc=myDR5y6Ro14AX9f5jE0&_nc_ht=scontent.fhan20-1.fna&oh=00_AfD56lOiu9sAbJPBirbGFAIcwjxcfuqTSp0WjVbttVF2wA&oe=6558B753',
    },
    {
      id: 2,
      tenNguoiDang: 'Nguyễn Thị Diệu My',
      avatar:
        'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/272894760_1441962499598505_5790021692436032782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHlx9qKoY3vv048CbrD4wwY_noQivS61cD-ehCK9LrVwAxlMcE3rqD_qxf0kBuV_c6t_qEEegNKc3txL7JETFCw&_nc_ohc=YF0lEx9LpioAX8aTOMi&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDPoBKlJrjkhOe5uOdYbrkqBkOWydeZAbWInbzhS_BSCg&oe=6558C132',
      thoiGianDang: '2 giờ',
      tieuDe: 'Kiểm tra môn Công Nghệ Web',
      noiDung: 'Nhóm của Nguyễn Thị Diệu My',
      anhBaiViet:
        'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/278820931_1491738241287597_9043409823549188385_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEnXOMfwNpc59OHSWvPcnIlYHEtqbPstr5gcS2ps-y2vgtuwX6DDldhRgGdBBSW-z6RzR5tJk4quIUWZDxouPIK&_nc_ohc=myDR5y6Ro14AX9f5jE0&_nc_ht=scontent.fhan20-1.fna&oh=00_AfD56lOiu9sAbJPBirbGFAIcwjxcfuqTSp0WjVbttVF2wA&oe=6558B753',
    },
  ];
  
  const dsBinhLuan = [
    {
      id: 1,
      avatar:
        'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/272894760_1441962499598505_5790021692436032782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHlx9qKoY3vv048CbrD4wwY_noQivS61cD-ehCK9LrVwAxlMcE3rqD_qxf0kBuV_c6t_qEEegNKc3txL7JETFCw&_nc_ohc=YF0lEx9LpioAX8aTOMi&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDPoBKlJrjkhOe5uOdYbrkqBkOWydeZAbWInbzhS_BSCg&oe=6558C132',
      noiDungBinhLuan: '[HN] BAP IT tuyển lập trình viên VueJS và ReactJS level Middle',
      thoiGianBinhLuan: new Date(2023, 11, 13),
      tenNguoiDung: 'Trần Minh Quân',
    },
    {
      id: 2,
      avatar:
        'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/272894760_1441962499598505_5790021692436032782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHlx9qKoY3vv048CbrD4wwY_noQivS61cD-ehCK9LrVwAxlMcE3rqD_qxf0kBuV_c6t_qEEegNKc3txL7JETFCw&_nc_ohc=YF0lEx9LpioAX8aTOMi&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDPoBKlJrjkhOe5uOdYbrkqBkOWydeZAbWInbzhS_BSCg&oe=6558C132',
      noiDungBinhLuan: 'Hello',
      thoiGianBinhLuan: new Date(2023, 11, 13),
      tenNguoiDung: 'Trần Minh Quân',
    },
  ];
  
  const data: string[] = [
    'Viết bài',
    'Giải đáp',
    'Dữ liệu & giải thuật',
    'Ngôn ngữ lập trình',
    'Bài tập hay',
    'Trí tuệ nhân tạo',
    'Python',
    'ReactJs',
  ];
  const isCommentVisible = ref(true);

  const toggleComment = () => {
    isCommentVisible.value = !isCommentVisible.value
  }
  
  const showModalTaoBaiViet = () => {
    modalBaiVietRef.value.showModal();
  };
  </script>
  
  <style scoped>
  ::v-deep .ant-btn {
    height: 100%;
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .header-baiviet-item {
    display: flex;
    align-items: center;
    margin-right: -16px
  }
  
  .camxuc-item {
    display: flex
  }
  
  .handle-comment {
    display: flex;
    justify-content: space-evenly
  }
  
  .header-baiviet-item-img {
    width: 40px;
    border-radius: 50%
  }
  
  .anhnguoibinhluan {
    width: 36px;
    border-radius: 50%
  }
  
  .noidungbinhluan {
    padding-left: 10px
  }
  
  .avatar-nguoibinhluan {
    width: 36px;
    height: auto;
    border-radius: 50%
  }
  
  .handle-binhluan {
    border: none;
    background-color: rgb(244, 242, 240)
  }
  
  .tennguoibinhluan {
    font-size: 16px;
    margin-left: 10px
  }
  
  .binhluan-avatar {
    display: flex;
    align-items: center
  }
  
  .camxuc-style {
    margin-bottom: 0;
    font-size: 18px;
    margin-left: 10px;
    cursor: pointer;
  }
  
  .binhluan-card-item {
    display: flex
  }
  
  .handle-comment-item {
    display: flex;
    cursor: pointer
  }
  
  .handle-heart {
    padding-left: 44px;
    display: flex;
    justify-content: space-evenly
  }
  
  .binhluan-item {
    padding: 8px 0;
    border-radius: 10px
  }
  
  .handle-heart-item {
    display: flex;
    cursor: pointer
  }
  
  .camxuc-item-heart {
    margin-right: 10px;
    display: flex
  }
  
  .binhluan-card {
    display: flex;
    justify-content: space-between
  }
  
  .header-baiviet-nguoidang {
    margin-top: 14px;
    margin-bottom: 0;
    font-weight: bold
  }
  
  .header-select-camxuc {
    width: 24px;
    margin-right: 10px
  }
  
  .content-comment {
    background-color: rgb(244, 242, 240);
    padding: 8px 16px 8px 4px;
  
    border-radius: 20px;
  }
  
  .header-input-image {
    width: 40px;
    border-radius: 50%
  }
  
  .header-input {
    padding: 10px;
    background-color: rgb(244, 242, 240);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 10px;
    border: 0.5px solid rgb(215, 211, 211);
  }
  
  .header-select-image {
    width: 24px;
    margin-right: 10px
  }
  
  .binhluan-list {
    display: none;
    margin-top: 10px
  }
  
  .card-baiviet {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgb(244, 242, 240);
    padding: 0 !important;
  
  }
  
  .input-baiviet:focus {
    outline: none;
    border: none;
  }
  
  .set-background {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px
  }
  
  .header-item-bottom {
    margin-top: 20px;
    background-color: rgb(244, 242, 240);
    border-radius: 10px;
  }
  
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .baiviet-item {
    margin-bottom: 40px;
    background-color: rgb(244, 242, 240);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 10px;
    border: 0.5px solid rgb(215, 211, 211);
  }
  
  .noi-dung-chinh {
    width: 100%;
  }
  
  .header-bottom {
    background-color: rgb(244, 242, 240);
    padding: 8px 16px;
  }
  
  .header-bottom:hover {
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  
  .anhbaiviet img {
    width: 100%;
    margin: 20px 0
  }
  
  .sticky {
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .set-index {
    display: flex;
  }
  
  h1 {
    font-size: 20px;
  }
  
  .baiViet-right:hover {
    cursor: pointer;
  }
  
  .baiViet-right {
    border: none;
    background-color: rgb(244, 242, 240);
    font-size: 20px;
  }
  
  .set-icon {
    border: 1px solid black;
  }
  
  .menu-right {
    background-color: rgb(244, 242, 240);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 10px 20px;
    position: fixed;
    border-radius: 10px;
    top: 100px;
  
  }
  
  .input-baiviet {
    width: 100%;
    border: none
  }
  
  .tieu-de {
    margin: 10px 0
  }
  
  .noi-dung {
    margin: 10px 0;
    font-size: 18px
  }
  
  .d-block {
    display: block;
  }
  .ml-10{
    margin-left: 0.625rem;
  }
  .w-newsletter-page{
    max-width: 41.25rem;
    min-width: 20rem;
    margin: auto;
  }
  @media only screen and (max-width:767px){
    .camxuc-style{
      font-size: 0.875rem;
    }
    .content-comment[data-v-e9d2c98c] {
      padding: 0;
    }
    .noi-dung-chinh .tieu-de{
      font-size: 0.875rem;
    }
    .noi-dung-chinh .noi-dung{
      font-size: 0.75rem;
    }
    [data-v-20d3b3a5] .ant-btn {
      font-size: 0.75rem;
    }
    .tennguoibinhluan{
      font-size: 0.875rem;
    }
    .noidungbinhluan{
      font-size: 0.75rem;
    }
  }
  </style>