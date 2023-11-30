<template>
    <div class="border-bottom border-opacity-25">
        <header class="header">
                <div class="row px-3 pt-3 pt-lg-0">
                <div class="col-md-auto cross-center-grid d-flex justify-content-start gap-3">
                    <div class="btn-bars" id="icon-bars"></div>
                    <div class="">
                        <img src="/favicon.ico" alt="Vuehance logo">
                        <p class="d-inline fw-bold fs-5 m-0">hance</p>
                    </div>
                </div>
                <div class="col main-menu d-flex ">
                    <nav class="col-auto cross-center-grid fw-bold d-flex gap-3 main-menu__content" id="menu">
                        <router-link to="foryou" class="main-menu__item cross-center-grid text-vh-primary">Para
                            ti</router-link>
                        <router-link to="discover"
                            class="main-menu__item cross-center-grid text-vh-primary">Descubrir</router-link>
                        <router-link to="hire"
                            class="main-menu__item cross-center-grid text-vh-primary">Contratar</router-link>
                        <router-link to="files"
                            class="main-menu__item cross-center-grid text-vh-primary">Archivos</router-link>
                        <router-link to="vacancies"
                            class="main-menu__item cross-center-grid text-vh-primary">Vacantes</router-link>
                    </nav>
                    <div class="col d-flex flex-column flex-lg-row gap-3 py-4 justify-content-end justify-lg-content-center">
                        <div>

                            <button class="border rounded-circle btn btn-outline-light"><i
                                    class="fa-solid fa-magnifying-glass"></i></button>
                            <button class="rounded-circle py-1 btn btn-link">
                                <i class="fa-solid fa-bell"></i>
                            </button>
                        </div>
                        <button
                            class="btn w-md-100 btn-outline-vh-info cross-center-grid text-primary px-2  fw-semibold rounded-pill">Iniciar
                            sesíon</button>
                        <button
                            class="btn btn-primary cross-center-grid text-vh-info px-2 fw-semibold rounded-pill">Registarse</button>
                    </div>
                </div>
            </div>
        </header>
    </div>
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
<style></style>