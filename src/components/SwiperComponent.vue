<template>
    <div class="mySwiper">
        <div class="swiper" id="mySwiper">
            <div class="swiper-wrapper">
                <div v-for="item, index in data" :key="item.title" class="swiper-slide">
                    <template v-if="index === categoryIndex">{{ setCategory(item) }}</template>
                    <div class="bg-image cross-center-grid" :style="{ '--image': `url(${item.image})` }">
                        <span class="fw-bold">{{ item.title }}</span>
                    </div>
                </div>
            </div>
            <i class="fa-solid fa-angle-left shadow px-3 py-2"></i>
            <i class="fa-solid fa-angle-right shadow px-3 py-2"></i>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import data from '@/helpers/data'
import { useStore } from 'vuex';
const store = useStore()
const categoryIndex = ref(null)

const setCategory = (category) => {
    store.commit('setCategory', category)
}


onMounted(() => {
    new window.Swiper("#mySwiper", {
        simulateTouch: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        slidesPerView: 7,
        spaceBetween: 15,
        loop: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 640px
            920: {
                slidesPerView: 7,
                spaceBetween: 20
            }
        },
        navigation: {
            dynamicBullets: true,
            nextEl: ".fa-angle-right",
            prevEl: ".fa-angle-left",
        },
        on: {
            slideChange: function () {
                categoryIndex.value = this.realIndex
            },
            // click: function (swiper) {
            //     console.log(swiper)
            //     categoryIndex.value = swiper.clickedIndex
            // },
        }
    })
})
</script >