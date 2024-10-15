<script setup>
import { onMounted } from 'vue';

function loadTGOSScript() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src =
            'http://api.tgos.tw/TGOS_API/tgos?ver=2&AppID=x+JLVSx85Lk=&APIKey=in8W74q0ogpcfW/STwicK8D5QwCdddJf05/7nb+OtDh8R99YN3T0LurV4xato3TpL/fOfylvJ9Wv/khZEsXEWxsBmg+GEj4AuokiNXCh14Rei21U5GtJpIkO++Mq3AguFK/ISDEWn4hMzqgrkxNe1Q==';
        script.charset = 'utf-8';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function main() {
    const mapDiv = document.getElementById('TGMap'); //地圖元件
    // mapDiv.style.border = '2px solid #4d7c0f';
    const map = new TGOS.TGOnlineMap(mapDiv, TGOS.TGCoordSys.EPSG3857 /*坐標系統-台灣*/, {
        navigationControl: false,
        scaleControl: false,
        mapTypeControl: false, //不顯示地圖類型控制項
    });
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);
    //設定網頁顯示層級
    centerControlDiv.index = 1;
    //將控制項放到TOP_CENTER
    map.controls[TGOS.TGControlPosition.TOP_CENTER].push(centerControlDiv);

    map.setZoom(3); //設定地圖初始畫面縮放層級
    addMarkerClusters();
}
function CenterControl(controlDiv, map) {
    //設定中心點座標
    var lonlatCenter = new TGOS.TGPoint(120.5, 23.5);
    //建立控制項UI
    var controlUI = document.createElement('div');
    //取得座標系統
    var mSRS = map.getCoordSys();

    //將控制項內容加至UI控制項內
    controlUI.appendChild(controlText);
}

const pMap = ref(null);
function InitWnd() {
    const pOMap = document.getElementById('TGMap');
    pMap.value = new TGOS.TGOnlineMap(pOMap, TGOS.TGCoordSys.EPSG3826);
}
function setMapType(type) {
    if (pMap.value) {
        pMap.value.setMapTypeId(type); // 設定目前地圖的地圖類型
    }
}
function getMapType() {
    if (pMap.value) {
        alert('目前地圖類型為 ' + pMap.value.getMapTypeId()); // 取得目前地圖的地圖類型
    }
}

function addMarkerClusters() {}

// 使用 Vue 的 onMounted 來初始化地圖
onMounted(() => {
    loadTGOSScript()
        .then(() => {
            main(); // TGOS API 加載完成後初始化地圖
        })
        .catch((err) => {
            console.error('TGOS API 加載失敗', err);
        });
    InitWnd();
});
</script>

<template>
    <Header />
    <div class="bg-background min-h-screen flex justify-center flex-row pt-10 p-8">
        <div class="m-0" onload="InitWnd();">
            <div id="TGMap" class="md:w-full w-full h-[700px] border-gray-500"></div>
            <br />
            <button onclick="setMapType('TGOSMAP');">台灣通用電子地圖</button>
            <button onclick="setMapType('F2IMAGE');">福衛二號衛星影像</button>
            <button onclick="setMapType('NLSCMAP');">台灣通用電子地圖</button>
            <button onclick="setMapType('ROADMAP');">福衛混和地圖</button>
            <button onclick="setMapType('HILLSHADE');">地形暈渲圖</button>
            <button onclick="setMapType('HILLSHADEMIX');">地形暈渲混和地圖</button>
            <button onclick="setMapType('SEGISMAP');">統計區MAP</button><br />
            <button onclick="getMapType();">取得地圖類型</button>
        </div>
    </div>
</template>

<style></style>
