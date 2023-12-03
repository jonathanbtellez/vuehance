<template>
    <div class="container cross-center-grid">
        <div class="d-flex  flex-wrap  justify-content-center my-4 gap-3">
            <button v-for="tag in category.tags" :key="tag.name" class="tag-btn shadow-sm">{{ tag }}</button>
        </div>
        <h2 style="font-size: 4rem; font-weight: 900;">{{ category.title }}</h2>
        <div class="w-50 fs-4">
            <p>{{ category.description }}</p>
        </div>
        <button href="#"
            class="d-flex align-items-center gap-1 border-0 bg-white w-50 justify-content-center text-secondary">
            <i class="fa-solid fa-magnifying-glass icon"></i> Buscar todos los productos de {{ category.title }}</button>

            <button class="btn btn-sm btn-primary rounded-pill mt-3">Seguir {{ category.title }}</button>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';


const store = useStore()

const category = computed(() => store.getters['getCategory'])



</script>
<style></style>