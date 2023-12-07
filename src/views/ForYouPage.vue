<template>
    <swiper-progress-component />
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
    const SwiperProgressComponent = defineAsyncComponent(() => /* webpackChunkName: "Swiper progress"*/ import('../components/SwiperProgressComponent'))
</script>