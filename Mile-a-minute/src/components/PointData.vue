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
            <button>選擇圖片</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Default Title',
        },
        content: {
            type: String,
            default: 'Default Content',
        }
    }
}
</script>
<style>
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

.FindLayout button {
    font-weight: bold;
    background-color: green;
    color: white;
    padding: 10px;
    border-radius: 10px;
}
</style>