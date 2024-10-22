<script setup>
const product = reactive([
    {
        id: 1,
        path: '@/assets/png/handcream.png',
        name: '護手霜',
    },
    {
        id: 2,
        path: '@/assets/png/shampoo.png',
        name: '洗髮精',
    },
    {
        id: 3,
        path: '@/assets/png/bodywash.png',
        name: '沐浴乳',
    },
    {
        id: 4,
        path: '@/assets/png/phytoncidin.png',
        name: '酚多精',
    },
]);
</script>
<template>
    <div>
        <Header />
        <div class="bg-background bg-repeat-y pt-10 p-8 sm:p-16 min-h-screen font-serif md:flex">
            <div class="relative">
                <h1 class="wow animate__lightSpeedInLeft text-2xl pb-6 font-semibold">
                    𓇗 如何利用小花蔓澤蘭製作醋液？
                </h1>
                <h1 class="wow animate__lightSpeedInLeft text-xl pb-16 font-semibold">製作流程：</h1>
                <div class="wow animate__zoomIn pb-16 sm:flex sm:flex-row sm:justify-around sm:items-center sm:gap-10">
                    <!-- <img src="@/assets/png/made.jpg" class="sm:h-[300px]" alt="" /> -->
                    <img src="@/assets/png/1.png" class="sm:h-[200px]" alt="" />
                    <img src="@/assets/png/2.png" class="sm:h-[200px]" alt="" />
                    <img src="@/assets/png/3.png" class="sm:h-[200px]" alt="" />
                </div>
                <div class="sm:flex sm:flex-row">
                    <h1 class="wow animate__lightSpeedInLeft text-2xl sm:pb-6 font-semibold">𓇗 其他產品</h1>
                    <p class="wow animate__lightSpeedInLeft text-sm sm:text-base pb-4 sm:p-2">
                        不想自己動手製作嗎？這裡也有其他不同類型的副產品介紹給你認識！
                    </p>
                </div>
                <div class="pb-6 flex flex-col sm:flex-row justify-between items-center gap-8">
                    <img v-for="item in product" :key="item.id" />
                    <img
                        path="@/assets/png/handcream.png"
                        class="wow animate__zoomIn rounded-3xl h-[250px] w-[250px] sm:h-[250px] sm:w-[300px]"
                        alt=""
                    />
                    <img
                        src="@/assets/png/shampoo.png"
                        class="wow animate__zoomIn rounded-3xl h-[250px] w-[250px] sm:h-[250px]"
                        alt=""
                    />
                    <img
                        src="@/assets/png/bodywash.png"
                        class="wow animate__zoomIn rounded-3xl h-[250px] w-[250px] sm:h-[250px]"
                        alt=""
                    />
                    <img
                        src="@/assets/png/phytoncidin.png"
                        class="wow animate__zoomIn rounded-3xl h-[250px] w-[250px] sm:h-[250px]"
                        alt=""
                    />
                </div>
                <h1 class="wow animate__lightSpeedInLeft text-2xl pb-6 font-semibold">
                    𓇗 如何利用小花蔓澤蘭製作醋液？
                </h1>
            </div>
        </div>
    </div>
</template>

<style></style>
