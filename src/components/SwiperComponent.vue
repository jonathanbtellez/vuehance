<template>
    <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
        clickable: true,
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { defineComponent } from 'vue';
defineComponent({
    Swiper,
    SwiperSlide,
})
const modules = [Pagination, Navigation]

</script>
