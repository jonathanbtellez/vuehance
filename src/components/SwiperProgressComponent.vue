<template>
    <div class="swiper swiper__progress mt-1" id="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide__progress swiper-slide" v-for="picture in pictures" :key="picture.vue"
                :style="{ '--image': `url(${picture.urls.regular})` }">
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination__progress"></div>
    </div>
    <div class="d-flex justify-content-between p-3">
        <div class="swiper-container__progress">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="cross-center-grid">
            <div class="swiper-pagination-fraction me-5 swiper-pagination__progress"></div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import unsplashApi from '@/api/unsplash';

const pictures = ref()

const fetch = async () => {
    try {
        const { data } = await unsplashApi('/photos')
        pictures.value = data
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    const fraction = new window.Swiper("#mySwiper", {
        pagination: {
            el: ".swiper-pagination-fraction",
            type: "fraction",
        }
    });
    new window.Swiper("#mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }).controller.control = fraction
    fetch();
})

</script>
<style></style>