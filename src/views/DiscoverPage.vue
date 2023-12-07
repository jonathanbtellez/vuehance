<template>
    <swiper-componet class="mt-3" />
    <category-componet />>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
const SwiperComponet = defineAsyncComponent(() => /* webpackChunkName: "Swiper"*/ import('../components/SwiperComponent'))
const CategoryComponet = defineAsyncComponent(() => /* webpackChunkName: "category"*/ import('../components/CategoryComponent'))
</script>
<style></style>