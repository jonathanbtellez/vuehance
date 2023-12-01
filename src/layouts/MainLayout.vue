<template>
    <nav-component />
    <swiper-componet class="mt-3"/>
    <main-component/>
</template>
<script setup>
import NavComponent from '@/components/NavComponent.vue';
import MainComponent from '@/components/MainComponent.vue'
import { defineAsyncComponent } from 'vue';

const SwiperComponet = defineAsyncComponent(() => import('../components/SwiperComponent'))

</script>
<style></style>