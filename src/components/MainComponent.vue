<template>
    <swiper-componet />
    <router-view v-slot="{ Component }">
        <transition>
            <component :is="Component" />
        </transition>
    </router-view>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const SwiperComponet = defineAsyncComponent(() => import('../components/SwiperComponent'))
</script>
<style></style>