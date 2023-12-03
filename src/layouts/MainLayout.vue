<template>
    <nav-component />
    <swiper-componet class="mt-3" />
    <main-component />
    <footer-component />
</template>
<script setup>
import NavComponent from '@/components/NavComponent.vue';
import MainComponent from '@/components/MainComponent.vue'
import { defineAsyncComponent } from 'vue';

const SwiperComponet = defineAsyncComponent(() => /* webpackChunkName: "Swiper"*/ import('../components/SwiperComponent'))
const FooterComponent = defineAsyncComponent(() => /* webpackChunkName: "Footer"*/ import('../components/FooterComponent.vue'))

</script>
<style></style>