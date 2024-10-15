<script>
// const isOpen = ref(false);
// function open() {
//   isOpen.value = !isOpen.value;
// }
</script>
<template>
    <div class="bg-background h-20 sticky flex justify-between items-center shadow-md font-serif">
        <div class="flex gap-3 pl-10">
            <!-- <button
        @click="open"
        class="flex flex-col justify-center items-center md:hidden gap-1"
      >
        <div
          :class="[isOpen ? 'rotate-45 translate-y-1.5' : '']"
          class="h-0.5 w-5 bg-black rounded-sm duration-200"
        ></div>
        <div
          :class="[isOpen ? ' opacity-0' : '']"
          class="h-0.5 w-5 bg-black rounded-sm"
        ></div>
        <div
          :class="[isOpen ? '-rotate-45 -translate-y-1.5' : '']"
          class="h-0.5 w-5 bg-black rounded-sm duration-200"
        ></div>
      </button> -->
            <div>
                <router-link to="/"><img src="@/assets/png/蔓影追蹤.png" alt="logo" class="h-14" /></router-link>
            </div>
        </div>
        <ul class="flex justify-between gap-4 pr-10">
            <li><router-link to="/history-map">歷史地圖</router-link></li>
            <li><router-link to="/information-map">資料地圖</router-link></li>
            <li><router-link to="/">分辨蔓</router-link></li>
            <li><router-link to="/">蔓產品</router-link></li>
        </ul>
    </div>
</template>

<style></style>
