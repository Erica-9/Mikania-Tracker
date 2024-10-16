<script setup>
const questions = ref([
    {
        id: 1,
        text: '小花蔓澤蘭是如何散播的？',
        answer: '它主要靠風、水及附著在動物身上來散播種子。',
        answerRevealed: false,
        visible: true,
    },
    {
        id: 2,
        text: '猜猜看⋯小花蔓澤蘭一天可以生長幾公分？',
        answer: '它每天可以生長到23公分！',
        answerRevealed: false,
        visible: false,
    },
    {
        id: 3,
        text: '小花蔓澤蘭的葉子是什麼形狀的呢？',
        answer: '心形或三角形。',
        answerRevealed: false,
        visible: false,
    },
    {
        id: 4,
        text: '猜猜看⋯平均一平方公尺可以容納多少小花蔓澤蘭的種子？',
        answer: '每平方公尺可容納約17萬粒種子。',
        answerRevealed: false,
        visible: false,
    },
]);

// 點擊顯示答案並顯示下一個問題
const revealAnswer = (index) => {
    questions.value[index].answerRevealed = true;
    if (index + 1 < questions.value.length) {
        questions.value[index + 1].visible = true;
    }
};
</script>
<template>
    <div>
        <Header />
        <div class="bg-background bg-cover bg-fixed pt-10 p-8 sm:p-16 h-[100vh] font-serif lg:flex-col">
            <div class="relative lg:flex lg:justify-between">
                <div>
                    <h1 class="wow animate__lightSpeedInLeft text-2xl pb-6 font-semibold">𓇗 小花蔓澤蘭的生長過程⋯</h1>

                    <!-- 遍歷所有問題 -->
                    <div
                        v-for="(question, index) in questions"
                        :key="question.id"
                        class="mb-6 flex flex-row items-center"
                    >
                        <!-- 顯示問題，如果 visible 為 true -->
                        <div v-if="question.visible" class="h-auto sm:h-12 sm:flex sm:flex-row items-center">
                            <h1 class="wow animate__slideInUp text-xl pb-3 items-center">{{ question.text }}</h1>

                            <!-- 答案卡的按鈕，點擊後顯示答案 -->
                            <button
                                v-if="!question.answerRevealed"
                                @click="revealAnswer(index)"
                                class="wow animate__flipInX bg-gray-200 p-3 rounded hover:bg-gray-300"
                            >
                                點擊翻開答案卡
                            </button>

                            <!-- 顯示答案 -->
                            <div v-if="question.answerRevealed">
                                <p class="wow animate__flipInX text-green-600 text-sm">{{ question.answer }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <video
                    src="@/assets/spread.mov"
                    class="w-[610px] h-auto sm:flex pb-12"
                    autoplay="true"
                    loop
                    muted="muted"
                ></video>

                <!-- <img src="@/assets/png/identify1.png" class="w-[350px] pt-[500px]" alt="" /> -->
            </div>
            <h1 class="wow animate__lightSpeedInLeft text-2xl pb-4 font-semibold">
                𓇗 小花蔓澤蘭是怎麼導致植物死亡的？帶來了什麼危害呢？
            </h1>

            <h1 class="wow animate__lightSpeedInLeft text-2xl pb-4 font-semibold">
                𓇗 如何分辨小花蔓澤蘭及其他植物呢？
            </h1>
            <div></div>
        </div>
    </div>
</template>

<style></style>
