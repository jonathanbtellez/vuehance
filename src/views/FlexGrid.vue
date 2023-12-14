<template>
    <div>
        <div class="cross-center mt-3 gap-3">
            <router-link :to="{ name: 'flex' }" class="tag-btn">Flex</router-link>
            <router-link :to="{ name: 'grid' }" class="tag-btn">Grid</router-link>
        </div>
        <transition>
            <RouterView />
        </transition>
    </div>
</template>
<script setup>

</script>
<style></style>