<script setup lang="ts">
import { Main } from '../styled';
import { defineAsyncComponent, ref } from 'vue';

let value1 = ref('lucy');
const current1 = ref<number>(1);
const focus = () => {
    
};

const handleChange = (value: any) => {
   
};

const onChange = (date: any, dateString: any) => {
    
};
const SalesByLocation = defineAsyncComponent(() => import('./demoOne/SalesByLocationTable.vue'));
const pageRoutes = [
    {
        path: '/',
        breadcrumbName: 'Dashboard',
    },
    {
        path: '/hocvien/diemdanh',
        breadcrumbName: 'Demo Six',
    },
];
</script>

<template>
    <div class="Attendance-history">
        <Main>
            <a-row>
                <a-col :xs="24">
                    <sdCards title="Lịch sử điểm danh">
                        <a-row>
                            <div class="custom-card">
                                <p class="card-title">Tình trạng</p>
                                <SelectWrapperStyle>
                                    <a-select v-model:value="value1" @focus="focus" ref="select" @change="handleChange">
                                        <a-select-option value="jack">Đúng giờ</a-select-option>
                                        <a-select-option value="lucy">Muộn giờ</a-select-option>
                                        <a-select-option value="no">Không đến</a-select-option>
                                    </a-select>
                                </SelectWrapperStyle>
                            </div>
                            <div class="custom-card">
                                <p class="card-title">Từ ngày</p>
                                <DatePickerWrapper>
                                    <a-date-picker @change="onChange" class="padding-input-date" />
                                </DatePickerWrapper>
                            </div>
                            <div class="custom-card">
                                <p class="card-title">Đến ngày</p>
                                <DatePickerWrapper>
                                    <a-date-picker @change="onChange" class="padding-input-date" />
                                </DatePickerWrapper>
                            </div>

                        </a-row>
                        <div class="table-attendance">
                            <SalesByLocation />
                        </div>
                        <div class="pagination-style">
                            <a-pagination v-model:current="current1" show-quick-jumper :total="100" @change="onChange" />
                        </div>
                    </sdCards>

                </a-col>
            </a-row>
        </Main>
    </div>
</template>

<style>
.Attendance-history{
  font-family: Arial, Helvetica, sans-serif;
}
.Attendance-history .ant-card-head {
    border-bottom: 0px;
}
.Attendance-history .lmeiNC{
    padding-top: 20px;
}
.Attendance-history .ant-row {
    padding: 10px 0;
}

.Attendance-history .custom-card {
    margin-right: 20px;
}

.Attendance-history .card-title {
    margin-bottom: 5px;
}

.Attendance-history .padding-input-date {
    padding: 7px;
}

.Attendance-history .lmeiNC .ant-picker {
    border-color: #E3E6EF !important;
}

.Attendance-history .ant-picker {
    border-radius: 4px;
}

.Attendance-history .custom-card .ant-select {
    width: 180px;
}
.Attendance-history .custom-card .ant-picker {
    min-width: 180px;
}

.Attendance-history .table-attendance .dXRjFB .ant-card-body {
    padding: 0px !important;
}

.Attendance-history .table-attendance .dXRjFB .ant-card-head {
    display: none;
}

.Attendance-history .ant-table-container table>thead>tr:first-child th:first-child,
.Attendance-history .ant-table-container table>thead>tr:first-child th:last-child {
    border-top-left-radius: 4px;
}

.Attendance-history .table-attendance {
    margin-top: 20px;
}
.Attendance-history .ant-table-content{
    height: 300px;
    overflow: auto;
    scrollbar-width: thin;
}

.Attendance-history .ant-table-content .ant-table-thead {
    position: sticky;
    z-index: 1;
}
.Attendance-history .table-attendance thead th {
    position: sticky;
    top: 0;
    z-index: 1;
}

@media screen and (max-width: 600px) {
    .Attendance-history .jWOmVG h1 {
        font-size: 12px;
    }

    .Attendance-history .ant-table {
        font-size: 12px;
    }

    .Attendance-history .cYeWcq .ant-table {
        padding: 0px;
    }

    .Attendance-history .custom-card {
        margin-bottom: 10px;
    }

    .Attendance-history .card-title {
        margin-bottom: 0px;
    }
}

@media screen and (max-width: 400px) {
    .Attendance-history .custom-card .ant-select-selector {
        width: 180px;
    }
}

.Attendance-history .pagination-style {
    margin-top: 40px;
    text-align: right;
}
</style>