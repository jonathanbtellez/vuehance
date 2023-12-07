<template>
    <div class="swiper swiper__progress mt-3" id="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide__progress swiper-slide" v-for="picture in pictures" :key="picture.vue">
                <div class="bg-image-card rounded" :style="{ '--image': `url(${picture.urls.regular})` }"></div>
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination swiper-pagination__progress"></div>
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
        console.log(pictures.value);
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    new window.Swiper("#mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    fetch();
})

</script>
<style></style>