<template>
    <div class="info-window">
        分布數量
        <div class="ContentLayout">
            <div class="Content">
                <div class="ContentTitle">獎金</div>
                <div>{{ title }}</div>
            </div>
            <div class="Content">
                <div class="ContentTitle">觀測到紀錄比數</div>
                <div>{{ content }}</div>
            </div>
            <div class="Content">
                <div class="ContentTitle">地址</div>
                <div>{{ content }}</div>
            </div>
            <div class="Content">
                <div class="ContentTitle">附近收購單位</div>
                <div>{{ content }}</div>
            </div>
        </div>
        <div class="FindLayout">
            <div>
                <div class="FindTitle">蔓影辨識</div>
                <div class="FindTxt">
                    上傳你採集到的植物照片，告訴你是不是小花蔓澤蘭!
                </div>
            </div>
            <input id="upload" style="display: none;" type="file" @change="onFileChange()">
            <label type="button" for="upload" class="Choose">
                選擇圖片
            </label>
        </div>
        <!-- 顯示 ImageData 的值，幫助調試 -->
        <div v-if="ImageData">
            <p>已選擇的圖片檔案: {{ ImageData.name }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// 接收父層傳入的 props
const props = defineProps({
    title: {
        type: String,
        default: 'Default Title',
    },
    content: {
        type: String,
        default: 'Default Content',
    }
});

const ImageData = ref(null); // 儲存圖片資料
const apiUrl = "https://my-api.plantnet.org/v2/identify/all";
const apiKey = "2b10xeOhz25YY8Qt5USglwtZze";

// 處理圖片選擇變更
const onFileChange = async (event) => {
    console.log("觸發 onFileChange");
    const file = event.target.files[0];
    if (file) {
        ImageData.value = file;
        console.log("選擇的檔案:", file.name); // 檢查檔案名稱

        const formData = new FormData();
        formData.append("images", file); // 添加選擇的圖片
        formData.append("organs", "auto"); // 相關器官

        const queryParams = {
            "include-related-images": false,
            "no-reject": false,
            "nb-results": 10,
            lang: "zh",
            "api-key": apiKey,
        };

        try {
            const response = await axios.post(`${apiUrl}?${new URLSearchParams(queryParams)}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("API 回應:", response.data);
        } catch (error) {
            console.error("API 請求錯誤:", error.response ? error.response.data : error.message);
        }
    } else {
        console.log("未選擇檔案");
    }
};
</script>

<style scoped>
.info-window {
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ContentLayout {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0 0;
    border-bottom: 3px solid green;
    border-top: 3px solid green;
}

.Content {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 10px;
    align-items: center;
}

.ContentTitle {
    font-weight: bold;
    padding: 10px;
    background-color: green;
    color: white;
    margin-right: 10px;
    width: auto;
    max-width: 10vw;
}

.FindLayout {
    margin-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.FindTitle {
    font-size: 2vw;
    font-weight: bold;
}

.FindTxt {
    font-size: 1vw;
}

.Choose {
    font-weight: bold;
    background-color: green;
    color: white;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
