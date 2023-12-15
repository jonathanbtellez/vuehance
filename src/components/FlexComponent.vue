<template>
    <h2 class="text-primary fs-3 fw-bold mt-3">
        Flexbox
    </h2>
    <div class="mx-3 d-flex flex-wrap gap-3">
        <CardFlexComponent class="flex flex__start rounded">
            <div v-for="picture in pictures" :key="picture.id" class="bg-image-card bg-image-card__flex rounded"
                :style="{ '--image': `url(${picture.urls.regular})` }"></div>
        </CardFlexComponent>
        <CardFlexComponent class="flex flex__end rounded">
            <div v-for="picture in pictures" :key="picture.id" class="bg-image-card bg-image-card__flex rounded"
                :style="{ '--image': `url(${picture.urls.regular})` }"></div>
        </CardFlexComponent>
        <CardFlexComponent class="flex flex__center rounded">
            <div v-for="picture in pictures" :key="picture.id" class="bg-image-card bg-image-card__flex rounded"
                :style="{ '--image': `url(${picture.urls.regular})` }"></div>
        </CardFlexComponent>
        <CardFlexComponent class="flex flex__stretch rounded">
            <div v-for="picture in pictures" :key="picture.id" class="bg-image-card bg-image-card__flex rounded"
                :style="{ '--image': `url(${picture.urls.regular})` }"></div>
        </CardFlexComponent>
        <CardFlexComponent class="flex flex__baseline rounded">
            <div v-for="picture in pictures" :key="picture.id" class="bg-image-card bg-image-card__flex rounded"
                :style="{ '--image': `url(${picture.urls.regular})` }"></div>
        </CardFlexComponent>
    </div>
</template>
<script setup>
import { defineAsyncComponent, ref, onMounted } from 'vue';
const CardFlexComponent = defineAsyncComponent(() => import('./CardFlexComponent.vue'))
import unsplashApi from '@/api/unsplash';

const pictures = ref()

const fetch = async () => {
    try {
        const { data } = await unsplashApi('/photos', {
            params: {
                'per_page': 3
            }
        })
        pictures.value = data
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => fetch())
</script>
