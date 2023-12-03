<template>
    <div>
        <div style="height: 300px;">
            <div class="bg-image-card rounded" :style="{ '--image': `url(${picture.urls.small})` }"></div>
        </div>
        <div class="mt-1 d-flex justify-content-between align-items-center">
            <div class="d-flex gap-2 align-items-center">
                <img :src="picture.user.profile_image.small" alt="User image" class="rounded-pill" />
                <p class="fw-bold fs-6 m-0">{{ picture.user.username }}</p>
            </div>
            <div class="d-flex gap-2 align-items-center">
                <div class="d-flex gap-2 align-items-center">
                    <i class="fa-regular fa-thumbs-up" style="opacity: .7;"></i>
                    <p class="m-0" style="opacity: .7; font-size: .9rem;">{{ picture.likes }}</p>
                </div>
                <div class="d-flex gap-2 align-items-center">
                    <i class="fa-regular fa-eye" style="opacity: .7;"></i>
                    <p class="m-0" style="opacity: .7; font-size: .9rem;">{{ picture.likes * 5 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    picture: { type: Object }
})
</script>