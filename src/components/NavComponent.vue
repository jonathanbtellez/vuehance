<template>
    <div class="border-bottom border-opacity-25">
        <header class="header">
            <div class="row px-3">
                <div class="col-auto cross-center-grid py-3">
                    <div>
                        <img src="/favicon.ico" alt="Vuehance logo">
                        <p class="d-inline fw-bold fs-5 m-0">hance</p>
                    </div>
                </div>
                <div class="col-auto d-flex flex-col">
                    <nav class="main-menu text-black-50 cross-center-grid  fw-bold">
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
                </div>
                <div class="col d-flex py-4 gap-3 justify-content-end">
                    <button class="border rounded-circle btn btn-outline-light"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <button class="rounded-circle py-1 btn btn-link">
                        <i class="fa-solid fa-bell"></i>
                    </button>
                    <button class="btn btn-outline-vh-info cross-center-grid text-primary px-2  fw-semibold rounded-pill">Iniciar
                        sesíon</button>
                    <button
                        class="btn btn-primary cross-center-grid text-vh-info px-2 fw-semibold rounded-pill">Registarse</button>
                </div>
            </div>
        </header>
    </div>
</template>
<script setup>

</script>
<style></style>