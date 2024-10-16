<script setup>
const questions = ref([
    {
        id: 1,
        text: '猜猜看⋯小花蔓澤蘭一天可以生長幾公分？',
        answer: '它每天可以生長約12公分！',
        answerRevealed: false,
        visible: true,
    },
    {
        id: 2,
        text: '小花蔓澤蘭的葉子是什麼形狀的呢？',
        answer: '小花蔓澤蘭的葉子是心形的。',
        answerRevealed: false,
        visible: false,
    },
    {
        id: 3,
        text: '猜猜看⋯平均一平方公尺可以容納多少小花蔓澤蘭的種子？',
        answer: '每平方公尺可容納約17萬粒種子。',
        answerRevealed: false,
        visible: false,
    },
    {
        id: 4,
        text: '小花蔓澤蘭是如何散播的？',
        answer: '它主要靠風和水來散播種子。',
        answerRevealed: false,
        visible: false,
    },
]);
// 當前顯示的問題 id
// const currentQuestion = ref(1);
// const answerRevealed = ref(false);

// // 取得當前問題
// const currentQuestionData = computed(() => questions.value.find((q) => q.id === currentQuestion.value));

// // 點擊顯示答案
// const revealAnswer = (index) => {
//     questions.value[index].answerRevealed = true;
// };
// const nextQuestion = () => {
//     if (currentQuestion.value < questions.value.length) {
//         currentQuestion.value += 1;
//         answerRevealed.value = false;
//     }
// };

// 點擊顯示答案並顯示下一個問題
const revealAnswer = (index) => {
    questions.value[index].answerRevealed = true;
    if (index + 1 < questions.value.length) {
        questions.value[index + 1].visible = true;
    }
};
</script>
<template>
    <Header />
    <div class="bg-background pt-10 p-8 h-[100vh] font-serif">
        <h1 class="text-2xl pb-6 font-semibold">小花蔓澤蘭的生長過程⋯</h1>

        <!-- 遍歷所有問題 -->
        <div v-for="(question, index) in questions" :key="question.id" class="mb-6 flex flex-row items-center">
            <!-- 顯示問題，如果 visible 為 true -->
            <div v-if="question.visible" class="h-12 flex flex-row items-center">
                <h1 class="text-xl pb-3">{{ question.text }}</h1>

                <!-- 答案卡的按鈕，點擊後顯示答案 -->
                <button
                    v-if="!question.answerRevealed"
                    @click="revealAnswer(index)"
                    class="bg-gray-200 p-3 rounded hover:bg-gray-300"
                >
                    點擊翻開答案卡
                </button>

                <!-- 顯示答案 -->
                <div v-if="question.answerRevealed" class="mt-3">
                    <p class="text-green-600">{{ question.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
