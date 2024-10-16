<script></script>
<template>
    <div class="bg-background h-20 sticky flex justify-between items-center shadow-md font-serif">
        <div class="flex gap-3 sm:pl-10 pl-0">
            <div>
                <router-link to="/"><img src="@/assets/png/MT.png" alt="logo" class="h-20 w-28" /></router-link>
            </div>
        </div>
        <ul class="flex justify-between sm:gap-4 gap-2 sm:pr-10 pr-3">
            <li><router-link to="/history-map">歷史地圖</router-link></li>
            <li><router-link to="/">資料地圖</router-link></li>
            <li><router-link to="/identify">分辨蔓</router-link></li>
            <li><router-link to="/product">蔓產品</router-link></li>
        </ul>
    </div>
</template>

<style></style>
