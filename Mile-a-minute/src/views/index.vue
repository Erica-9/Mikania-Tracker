<script setup>
import { onMounted } from 'vue';
import PointData from '../components/PointData.vue';
import data from '@/assets/data.json';
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
const messageBox = [],
    mClusters = [];

let lastMessageBox = null,
    heatmap = null,
    fill = null,
    markers = null;
const districtInput = ref(null);
const pMap = ref(null);

function main() {
    const mapDiv = document.getElementById('TGMap'); //地圖元件
    // mapDiv.style.border = '2px solid #4d7c0f';
    const map = new TGOS.TGOnlineMap(mapDiv, TGOS.TGCoordSys.EPSG3826 /*坐標系統-台灣*/, {
        navigationControl: false,
        scaleControl: false,
        mapTypeControl: false, //不顯示地圖類型控制項
    });

    map.setZoom(3); //設定地圖初始畫面縮放層級
    pMap.value = map;
}
function createMarkers() {
    // let markers = []; //開啟新陣列
    // // Very dense data
    // for (let m = 0; m < data.lengh; m++) {
    //     let pt = TGOS.WGS84toTWD97(data[m].X, data[m].Y);
    //     let position = new TGOS.TGPoint(pt.x, pt.y);
    //     let marker = new TGOS.TGMarker(pMap.value, position); //新增標記點
    //     markers.push(marker); //將新增之標記點加入到陣列的最後面，並回傳陣列的新長度
    // }
    // return markers;
    let magnitude = 500;
    const markersdtat = []; //開啟新陣列
    // Very dense data
    for (let m = 0; m < magnitude / 2; m++) {
        let lon = random(120.8, 121.4); //隨機新增標記點的X座標範圍
        let lat = random(24.2, 24.5); //隨機新增標記點的Y座標範圍
        let pt = TGOS.WGS84toTWD97(lon, lat);
        let position = new TGOS.TGPoint(pt.x, pt.y);
        let marker = new TGOS.TGMarker(pMap.value, position); //新增標記點
        markersdtat.push(marker); //將新增之標記點加入到陣列的最後面，並回傳陣列的新長度
    }
    // Dense data
    for (let m = 0; m < magnitude / 8; m++) {
        let lon = random(120, 120.5);
        let lat = random(22.5, 23.6);
        let pt = TGOS.WGS84toTWD97(lon, lat);
        let position = new TGOS.TGPoint(pt.x, pt.y);
        let marker = new TGOS.TGMarker(pMap.value, position);
        markersdtat.push(marker);
    }
    // Sparse data
    for (let m = 0; m < magnitude / 10; m++) {
        let lon = random(120.5, 121.28);
        let lat = random(23.5, 24);
        let pt = TGOS.WGS84toTWD97(lon, lat);
        let position = new TGOS.TGPoint(pt.x, pt.y);
        let marker = new TGOS.TGMarker(pMap.value, position);
        markersdtat.push(marker);
    }
    // Very Sparse data
    for (let m = 0; m < magnitude / 20; m++) {
        let lon = random(120.2, 121);
        let lat = random(23, 23.5);
        let pt = TGOS.WGS84toTWD97(lon, lat);
        let position = new TGOS.TGPoint(pt.x, pt.y);
        let marker = new TGOS.TGMarker(pMap.value, position);
        markersdtat.push(marker);
    }
    markers = markersdtat;
    addMarkerClusters();
}

function addMarkerClusters() {
    const mCluster = new TGOS.TGMarkerCluster(pMap.value, markers, {});
    mCluster.setMaxZoom(10);
    mCluster.setVisible(true);
    mCluster.setSearchBounds(30);
    mCluster.redrawAll(true);
    mClusters.push(mCluster);
    clearHeatmap();
    districtInput.value = '';
}

function addMarker() {
    clearMarkerClusters();
    const propsData = {
        title: '123', // 动态传入标题
        content: '456', // 动态传入内容
    };
    const app = createApp(PointData, propsData);

    // 创建一个容器来存放渲染的内容
    const container = document.createElement('div');

    // 将 PointData 组件挂载到容器中
    app.mount(container);
    const htmlContent = container.innerHTML;
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(pMap.value);
        markers[i].setVisible(true);

        messageBox.push(
            new TGOS.TGInfoWindow(htmlContent, new TGOS.TGPoint(markers[i].position.x, markers[i].position.y), {
                pixelOffset: new TGOS.TGSize(5, -30), //InfoWindow起始位置的偏移量, 使用TGSize設定, 向右X為正, 向上Y為負
                zIndex: 99, //視窗堆疊順序
            })
        );
    }

    for (let i = 0; i < markers.length; i++) {
        TGOS.TGEvent.addListener(markers[i], 'click', function () {
            lastMessageBox?.close();
            messageBox[i].open(pMap.value);
            lastMessageBox = messageBox[i];
        });
    }
    districtInput.value = '';
}

function toggleHeatmap() {
    if (mClusters.length > 0) {
        for (let i = 0; i < mClusters.length; i++) {
            mClusters[i].removeMarkers(markers, true);
        }
    }
    markers.forEach((marker) => {
        marker.setVisible(false);
    }); // 清除标记点

    heatmap = new TGOS.TGHeatmapLayer({
        data: createHeatmapData(),
        map: pMap.value,
    });
    districtInput.value = '';
}

function buffer() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            const userLocation = new TGOS.TGPoint(194514.4929623585, 2624383.095935193); // TGOS 使用經度、緯度
            pMap.value.setCenter(userLocation); // 設置地圖中心為使用者位置
            pMap.value.setZoom(8);
            // 		// 使用者的位置作為地圖的中心點
            // 		// 調整地圖縮放至適合的級別
        });
    }
}

function createHeatmapData() {
    let data = [];
    markers.forEach((marker) => {
        let position = marker.getPosition();
        data.push(new TGOS.TGPoint(position.x, position.y));
    });
    return data;
}

function clearHeatmap() {
    if (heatmap) {
        heatmap.setOptions({ data: [] });
    }
}

function clearMarkerClusters() {
    if (mClusters.length > 0) {
        for (let i = 0; i < mClusters.length; i++) {
            mClusters[i].removeMarkers(markers, true);
        }
    }
    clearHeatmap(); // 清除热区
}

function random(min, max) {
    return Math.random() * (max - min + 0.3) + min;
}

function locateDistrict() {
    //加入行政區定位
    if (fill) {
        fill.setMap(null);
    }
    const locator = new TGOS.TGLocateService();
    locator.locateTWD97(
        {
            district: districtInput.value,
        },
        function (e, status) {
            if (status != TGOS.TGLocatorStatus.OK) {
                pMap.value.setZoom(3);
                return;
            }
            pMap.value.fitBounds(e[0].geometry.viewport);
            pMap.value.setZoom(pMap.value.getZoom());
            //調整畫面符合行政區邊界
            let pgn = e[0].geometry.geometry;
            //讀取行政區空間資訊
            fill = new TGOS.TGFill(pMap.value, pgn, {
                //將行政區空間資訊以面圖徵呈現
                fillColor: '#00AAAA',
                fillOpacity: 0.2,
                strokeColor: '#009090',
                strokeWeight: 5,
                strokeOpacity: 1,
            });
            addMarker();
        }
    );
}

// 使用 Vue 的 onMounted 來初始化地圖
onMounted(() => {
    loadTGOSScript()
        .then(() => {
            main(); // TGOS API 加載完成後初始化地圖
            createMarkers();
        })
        .catch((err) => {
            console.error('TGOS API 加載失敗', err);
        });
});
</script>

<template>
    <Header />
    <div class="bg-background flex justify-center flex-row pt-10 p-8 h-[100vh]">
        <div class="m-0">
            <div id="TGMap" class="TGMap"></div>
            <div class="useMap">
                <input style="width: 10%" id="district" v-model="districtInput" />
                <button @click="locateDistrict()">行政區定位 TWD97</button>
                <div class="mapButton">
                    <button @click="addMarkerClusters()">切換群聚標記點</button>
                    <button @click="addMarker()">切換標記點</button>
                    <button @click="toggleHeatmap()">切換熱區</button>
                    <button @click="buffer()">定位查詢</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.TGMap {
    width: 70vw;
    height: 50vh;
}

.m-0 {
    height: auto;
    position: relative;
}

.useMap {
    display: flex;
    width: 100%;
    position: absolute;
    top: 20px;
    left: 20px;
}

.mapButton {
    width: auto;
    display: flex;
    justify-content: left;
}

.useMap button {
    margin-left: 0.5vh;
    padding: 0.5vw;
    font-size: 2vh;
    font-weight: bold;
    border: 0.3vw solid rgb(11, 45, 23);
    background-color: white;
    border-radius: 5px;
}
</style>
