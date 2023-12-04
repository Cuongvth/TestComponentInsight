<script setup lang="ts">

</script>

<template>
    <div class="user-short-item">
        <div style="position: relative;">
            <div class="user-container">
                <img src="https://afamilycdn.com/150157425591193600/2023/11/26/543-202309220822411-1701016951671307565591.jpg"
                    style="height: 40px; width: auto;" alt="">
            </div>
            <div class="online">
                <span
                    style="background-color: green; height: 11px; width: 11px; display: block;  border-radius: 50%;"></span>
            </div>

        </div>
        <div class="info"><span>Thập lương</span></div>
    </div>
</template>

<style scoped>
.user-short-item {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    height: 52px;
}

.user-short-item:hover {
    cursor: pointer;
    background-color: beige;
}

.user-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    height: 40px;
    margin-left: 8px;
    width: 40px;
}

.online {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 15px;
    background-color: #ffffff;
    width: 15px;
    position: absolute;
    bottom: -4px;
    right: 0px;
}

.info {
    margin-left: 12px;

}

.info span {
    font-family: Open Sans, sans-serif !important;
    font-size: 16px;
    color: #3f414d;
    font-weight: 400;
}
</style>