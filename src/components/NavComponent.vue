<template>
    <header class="header border-bottom border-opacity-25">
        <div class="px-3 pt-3 pt-md-0 d-md-flex gap-lg-3">
            <div class="cross-center-grid d-flex justify-content-start gap-3">
                <div class="btn-bars" id="icon-bars"></div>
                <div class="">
                    <img src="/favicon.ico" alt="Vuehance logo">
                    <p class="d-inline fw-bold fs-5 m-0">hance</p>
                </div>
            </div>
            <div class="col main-menu d-md-flex justify-content-end">
                <nav class="col-auto cross-center-grid fw-bold d-lg-flex gap-3 main-menu__content" id="menu">
                    <router-link :to="{name:'foryou'}" class="main-menu__item cross-center-grid text-vh-primary">Para
                        ti</router-link>
                    <router-link :to="{name:'discover'}"
                        class="main-menu__item cross-center-grid text-vh-primary">Descubrir</router-link>
                    <router-link :to="{name:'flexGrid'}" class="main-menu__item cross-center-grid text-vh-primary">Flex - Grid</router-link>
                    <a href="#" class="main-menu__item cross-center-grid text-vh-primary">Archivos</a>
                    <a href="#" class="main-menu__item cross-center-grid text-vh-primary">Vacantes</a>
                </nav>
                <div class="w-100 gap-3 py-2 d-md-flex justify-content-end">
                    <div>
                        <button class="border rounded-circle btn btn-outline-light"><i
                                class="fa-solid fa-magnifying-glass"></i></button>
                        <button class="rounded-circle py-1 btn btn-link">
                            <i class="fa-solid fa-bell"></i>
                        </button>
                    </div>
                    <div class="d-flex justify-content-center gap-3 mt-3 mt-md-0">
                        <button
                            class="btn btn-outline-vh-info cross-center-grid text-primary px-2  fw-semibold rounded-pill">Iniciar
                            sesíon</button>
                        <button
                            class="btn btn-primary cross-center-grid text-vh-info px-2 fw-semibold rounded-pill">Registrase</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const btn = document.getElementById('icon-bars')

    btn.addEventListener('click', event => {
        event.target.classList.toggle('active')
        document.querySelector('#menu').classList.toggle('show')
    })
})

</script>
