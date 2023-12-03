<template>
    <div class="container cross-center-grid">
        <div class="d-flex  flex-wrap  justify-content-center my-4 gap-3 flex-column flex-md-row">
            <button v-for="tag in category.tags" :key="tag.name" class="tag-btn shadow-sm"
                :class="activeTag === tag ? 'tag-btn--active' : ''" @click="fetch(tag)">{{ tag }}</button>
        </div>
        <h2 class="category-title">{{ category.title }}</h2>
        <div class="w-50 category-text">
            <p>{{ category.description }}</p>
        </div>
        <button href="#"
            class="d-flex align-items-center gap-1 border-0 bg-white w-50 justify-content-center text-secondary">
            <i class="fa-solid fa-magnifying-glass icon"></i> Buscar todos los productos de {{ category.title }}</button>

        <button class="btn btn-sm btn-primary rounded-pill mt-3">Seguir {{ category.title }}</button>
    </div>
    <template v-if="!isLoading">
        <template v-if="pictures">
            <template v-if="pictures.results.length > 0">
                <div class="w-100 p-3 d-flex flex-wrap pictures-container">
                    <card-component class="card-container p-1 mt-4" v-for="result in pictures.results" :key="result.id"
                        :picture="result" />
                </div>
            </template>
            <template v-else>
                <p class="w-50 fs-4 m-auto mt-5">
                    En el momento no hay resultados para esta busqueda
                </p>
            </template>
        </template>
        <template v-else>
            <p class="w-50 fs-4 m-auto mt-5">
                Algo salio mal por favor pruebe con otra categoria o enlace
            </p>
        </template>
    </template>
    <template v-else>
        <div class="cross-center mt-5">
            <div class="loader"></div>
        </div>
    </template>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed, onMounted, defineAsyncComponent, ref, watch } from 'vue';
import unsplashApi from '@/api/unsplash.js'
const CardComponent = defineAsyncComponent(() => /* webpackChunkName: "Category"*/import('./CardComponent.vue'))

const store = useStore()

const category = computed(() => store.getters['getCategory'])

const activeTag = ref()

const isLoading = ref(false)

const pictures = ref(null)
onMounted(async () => {
    fetch()
})

watch(category, async (newCategory) => {
    if (newCategory) fetch()
})



const fetch = async (tag = null) => {
    isLoading.value = true
    let query = ''

    if (!tag) {
        query = category.value.title
        activeTag.value = "Todas las categorias"
    }

    if (tag) {

        if (tag.includes('Todas')) {
            query = category.value.title
            activeTag.value = "Todas las categorias"
        } else {
            query = tag
            activeTag.value = tag
        }
    }

    try {
        const { data } = await unsplashApi('/search/photos', {
            params: {
                query,
                per_page: 16

            }
        })
        pictures.value = data
        isLoading.value = false
    } catch (error) {
        console.error(error)
        isLoading.value = false
    }
}

</script>