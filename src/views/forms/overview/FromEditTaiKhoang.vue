<script setup lang="ts">
import { VerticalFormStyleWrap } from './Style';
import { BasicFormWrapper } from '../../styled';
const props = defineProps({
  dataCurent: Object,
  isEdit: Boolean,
});
</script>

<template>
  <BasicFormWrapper>
    <VerticalFormStyleWrap>
      <a-form name="ninjadash_vertical-form-with-icon" layout="vertical">
        <a-form-item label="Tên đăng nhập">
          <a-input type="text" :value="dataCurent?.userName || ''" placeholder="input placeholder">
            <template #prefix>
              <unicon name="user" width="14"></unicon>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="Mật khẩu">
          <a-input type="password" value="@àcvsgwt++1" placeholder="input placeholder">
            <template #prefix>
              <unicon name="user" width="14"></unicon>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="Email">
          <a-input type="email" name="email" :value="dataCurent?.email || ''" placeholder="input placeholder">
            <template #prefix>
              <unicon name="envelope" width="14"></unicon>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item label="Số điện thoại">
          <a-input name="phone" :value="''" placeholder="with input password">
            <template #prefix>
              <unicon name="lock" width="14"></unicon>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="Multiple Select">
          <a-select mode="multiple" :value="dataCurent?.roles || []" placeholder="Please select">
            <a-select-option value="HocVien">Học Viên</a-select-option>
            <a-select-option value="Admin">Admin</a-select-option>
            <a-select-option value="Marketing">Marketing</a-select-option>
            <a-select-option value="TroGiang">Trợ Giảng</a-select-option>
          </a-select>
        </a-form-item>
        <a-row>
          <a-col :lg="24" :md="24" :xs="24">
            <sdButton style="width: 100%" class="btn-signin" type="primary"> Lưu </sdButton>
          </a-col>
        </a-row>
      </a-form>
    </VerticalFormStyleWrap>
  </BasicFormWrapper>
</template>
