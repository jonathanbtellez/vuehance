<template>
    <h2 class="text-primary fs-3 fw-bold mt-3">
        Grid
    </h2>
    <div class="grid-container">
        <div v-for="picture, index in pictures" :key="picture.id" class="bg-image-card bg-image-card__grid" :class="classes[index]" :style="{ '--image': `url(${picture.urls.regular})` }"></div>
    </div>
</template>
<script setup>
import unsplashApi from '@/api/unsplash';
import { ref, onMounted } from 'vue';

const pictures = ref()

const classes = ref([
    'grid-header',
    'grid-menu',
    'grid-hero',
    'grid-main',
    'grid-extra',
    'grid-banner',
    'grid-image',
])

const fetch = async () => {
    try {
        const { data } = await unsplashApi('/photos', {
            params: {
                'per_page': 7
            }
        })
        pictures.value = data
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => fetch())
</script>
<style></style>