<template>
    <div style="padding: 60px 0">
      <Main>
        <a-row :gutter="25">
          <a-col :lg="19">
            <a-row :gutter="25">
              <a-col :span="16" :offset="4">
                <a-card
                  style="
                    padding: 10px;
                    background-color: rgb(244, 242, 240);
                    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                  "
                >
                  <a-row :gutter="8">
                    <a-col :lg="2">
                      <img
                        style="width: 40px; height: 40px; border-radius: 50%"
                        src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/397245588_1864474314013986_1357014628649150998_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sP5MJ36zAuwAX8uCOPM&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCThltKIzzyXYMj7nlGJITwqMJd3z2bavFkgB2PYJSjXg&oe=6552B5C6"
                      />
                    </a-col>
                    <a-col :lg="22">
                      <a-button
                        style="
                          background-color: white;
                          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                        "
                        type="text"
                        block
                        shape="round"
                        >Bạn đang nghĩ gì thế</a-button
                      >
                    </a-col>
                  </a-row>
                  <!-- :icon="h(CameraOutlined)" -->
                  <a-card style="margin-top: 30px;">
                    <a-row :gutter="8">
                      <a-col :lg="12">
                        <a-button
                          style="
                            background-color: white;
                            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                          "
                          type="text"
                          block
                        >
                          <img
                            style="width: 24px; margin-right: 10px"
                            src="../../assets/img/hinhanh-icon.png"
                          />
                          Hình ảnh
                        </a-button>
                      </a-col>
                      <a-col :lg="12">
                        <a-button
                          style="
                            background-color: white;
                            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                          "
                          type="text"
                          block
                        >
                          <img
                            style="width: 24px; margin-right: 10px"
                            src="../../assets/img/matcuoi.png"
                          />
                          Cảm xúc
                        </a-button>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-card>
                <a-card
                  v-for="baiViet in dsBaiViet"
                  :key="baiViet.id"
                  style="
                    margin-top: 40px;
                    background-color: rgb(244, 242, 240);
                    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                  "
                >
                  <a-card style="padding: 10px 20px; border-radius: 10px">
                    <a-row :gutter="8">
                      <a-col :lg="2" style="display: flex; align-items: center">
                        <img
                          style="width: 40px; border-radius: 50%"
                          :src="baiViet.avatar"
                          alt=""
                        />
                      </a-col>
                      <a-col :lg="20">
                        <h3 style="margin-top: 8px; margin-bottom: 0; font-weight: bold">
                          {{ baiViet.tenNguoiDang }}
                        </h3>
                        <p>{{ baiViet.thoiGianDang }}</p>
                      </a-col>
                      <a-col :lg="2">
                        <button
                          class="baiViet-right"
                          style="border: none; background-color: white; font-size: 20px"
                        >
                          <unicon name="ellipsis-h"></unicon>
                        </button>
                      </a-col>
                      <div class="noi-dung-chinh">
                        <h2 class="tieu-de" style="margin: 10px 0">
                          {{ baiViet.tieuDe }}
                        </h2>
                        <p
                          class="noi-dung"
                          style="margin: 10px 0; font-size: 18px;"
                          v-html="baiViet.noiDung"
                        ></p>
                        <div class="anhbaiviet" style="margin: 20px 0">
                          <img :src="baiViet.anhBaiViet" />
                        </div>
                        <a-space style="justify-content: flex-end">
                          <ul style="display: flex" class="ninjadash-blog__meta">
                            <li
                              class="ninjadash-blog__meta--item"
                              style="margin-right: 10px; display: flex"
                            >
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
                      </div>
                    </a-row>
                  </a-card>
                  <a-card style="border:none; padding: 10px 0; border-radius: 10px;">
                    <a-row :gutter="8">
                      <a-col :lg="12" style="padding-left: 44px; display:flex;">
                        <div style="display:flex">
                          <unicon name="heart"></unicon>
                        <p style="margin-bottom: 0; font-size: 18px; margin-left: 10px;">Yêu thích</p>
                        </div>
                      </a-col>
                      <a-col :lg="12" style="display:flex;">
                        <div style="display:flex">
                          <unicon name="comment-alt" width="20"></unicon>
                        <p style="margin-bottom: 0; font-size: 18px; margin-left: 10px;">Bình luận</p>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
  
                  <a-card >
                    <a-row >
                      <a-col
                        v-for="binhLuan in dsBinhLuan"
                        :key="binhLuan.id"
                        :span="16"
                        :lg="24"
                        style="
                        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
                          padding: 8px 16px; border-radius: 10px;
                        "
                      >
                        <div style="display: flex">
                          <div style="display: flex">
                            <div style="display:flex; align-items: center;">
                              <img
                                style="width: 36px; border-radius: 50%; "
                                :src="binhLuan.avatar"
                              />
                            </div>
                            <a-card style="background-color: rgb(244, 242, 240); padding: 8px 16px 8px 4px; margin-left: 10px; border-radius: 20px">
                              <strong style="font-size: 16px; margin-left: 10px">{{
                                binhLuan.tenNguoiDung
                              }}</strong>
                              <div style="padding-left: 20px">
                                {{ binhLuan.noiDungBinhLuan }}
                              </div>
                            </a-card>
                          </div>
                          <button style="border:none; background-color: white;"><unicon name="ellipsis-h"></unicon></button>
                        </div>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-card>
                <ModalTaoBaiViet ref="modalBaiVietRef" />
              </a-col>
            </a-row>
          </a-col>
  
          <a-col :lg="5" class="sticky">
            <div
              style="
                background-color: rgb(244, 242, 240);
                box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                padding: 10px 20px;
              "
            >
              <div>
                <h1>Thông tin học tập của bạn</h1>
                <a-row :gutter="8">
                  <a-col :lg="16"><b>Thời gian đã học:</b></a-col>
                  <a-col :lg="8"> 0 Tuần </a-col>
                </a-row>
                <a-row :gutter="8">
                  <a-col :lg="16"><b>Số buổi đã tham gia:</b></a-col>
                  <a-col :lg="8"> 0 Buổi </a-col>
                </a-row>
                <a-row :gutter="8">
                  <a-col :lg="16"><b>Số buổi nghỉ:</b></a-col>
                  <a-col :lg="8"> 0 Buổi </a-col>
                </a-row>
                <a-row :gutter="8">
                  <a-col :lg="16"><b>Số bài tập đã làm:</b></a-col>
                  <a-col :lg="8"> 0 Bài </a-col>
                </a-row>
                <a-row :gutter="8">
                  <a-col :lg="16"><b>Môn học hiện tại:</b></a-col>
                  <a-col :lg="8"> undefined </a-col>
                </a-row>
              </div>
              <br />
              <div>
                <h1>Danh mục</h1>
                <a-list bordered :data-source="data">
                  <template #renderItem="{ item }">
                    <a-list-item style="padding: 0">
                      <a-button
                        type="text"
                        style="text-align: start"
                        :icon="h(InstagramOutlined)"
                        block
                        >{{ item }}</a-button
                      >
                    </a-list-item>
                  </template>
                </a-list>
              </div>
            </div>
          </a-col>
        </a-row>
      </Main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { CameraOutlined, FrownOutlined, InstagramOutlined } from "@ant-design/icons-vue";
  import { Main } from "../styled";
  import { h } from "vue";
  
  const dsBaiViet = [
    {
      id: 1,
      tenNguoiDang: "Trần Minh Quân",
      avatar:
        "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/397245588_1864474314013986_1357014628649150998_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sP5MJ36zAuwAX8uCOPM&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCThltKIzzyXYMj7nlGJITwqMJd3z2bavFkgB2PYJSjXg&oe=6552B5C6",
      thoiGianDang: "11 tháng 11 lúc 11h53",
      tieuDe: "Fifa Online 4",
      noiDung: "Ae đá fifa online 4 không?",
      anhBaiViet:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KIisiZMiC8gXfo1XYbcxwh-A-dL1GtHKMg&usqp=CAU",
    },
    {
      id: 2,
      tenNguoiDang: "Nguyễn Thị Diệu My",
      avatar:
        "https://res-console.cloudinary.com/dacc055vz/thumbnails/v1/image/upload/v1699102146/eHl6LWFiY182MzgzNDcyNDE0NDE3ODE2NDZpbWFnZQ==/grid_landscape",
      thoiGianDang: "13 tháng 11 lúc 13h37",
      tieuDe: "Kiểm tra môn Công Nghệ Web",
      noiDung: "Nhóm của Nguyễn Thị Diệu My",
      anhBaiViet:
        "https://res-console.cloudinary.com/dacc055vz/thumbnails/v1/image/upload/v1699103721/eHl6LWFiY182MzgzNDcyNTcxOTYyNTkwMjdpbWFnZQ==/grid_landscape",
    },
  ];
  
  const dsBinhLuan = [
    {
      id: 1,
      avatar:
        "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/397245588_1864474314013986_1357014628649150998_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sP5MJ36zAuwAX8uCOPM&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCThltKIzzyXYMj7nlGJITwqMJd3z2bavFkgB2PYJSjXg&oe=6552B5C6",
      noiDungBinhLuan: "Hello",
      thoiGianBinhLuan: new Date(2023, 11, 13),
      tenNguoiDung: "Trần Minh Quân",
    },
  ];
  
  const data: string[] = [
    "Viết bài",
    "Giải đáp",
    "Dữ liệu & giải thuật",
    "Ngôn ngữ lập trình",
    "Bài tập hay",
    "Trí tuệ nhân tạo",
    "Python",
    "ReactJs",
  ];
  </script>
  
  <!-- <style scoped>
  ::v-deep .ant-btn {
    height: 100%;
    font-size: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  *{
    font-family: Arial, Helvetica, sans-serif;
  }
  .noi-dung-chinh {
    width: 100%;
  }
  .anhbaiviet img {
    width: 100%;
  }
  .sticky {
    font-size: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
  .set-icon {
    border: 1px solid black;
  }
  </style> -->
  <style scoped>
  ::v-deep .ant-btn {
    height: 100%;
    font-size: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  *{
    font-family: Arial, Helvetica, sans-serif;
  }
  .noi-dung-chinh {
    width: 100%;
  }
  .anhbaiviet img {
    width: 100%;
  }
  .sticky {
    font-size: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
  .set-icon {
    border: 1px solid black;
  }

  /* Responsive Styles */
  @media screen and (max-width: 1200px) {
    .sticky {
      font-size: 14px;
    }
    h1 {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 992px) {
    a-col {
      :lg="24";
    }
  }

  @media screen and (max-width: 768px) {
    .sticky {
      font-size: 13px;
    }
    h1 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 576px) {
    .sticky {
      font-size: 12px;
    }
    h1 {
      font-size: 14px;
    }
  }
</style>

  