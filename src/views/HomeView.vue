<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<section class="home-view-layout">
    <div class="flex flex-row">
        <div class="home-single-folder">
            <RouterLink to="/folder" class="cursor-default">
                <i class="fa-solid fa-folder text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400"></i>
                <p>Research</p>
            </RouterLink>
        </div>
    </div>
</section>
</template>
