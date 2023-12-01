<template>
    <div class="mySwiper">
        <div class="swiper" id="mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
            </div>
            <i class="fa-solid fa-angle-left shadow px-3 py-2"></i>
            <i class="fa-solid fa-angle-right shadow px-3 py-2"></i>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    new window.Swiper("#mySwiper", {
        slidesPerView: 7,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: ".fa-angle-right",
            prevEl: ".fa-angle-left",
        },
    });
})
</script >

                             