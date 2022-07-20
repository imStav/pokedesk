<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<!-- This code crafts the window heading bar for every apps / files -->
<div class="app-header app-header-style">
    <div class="flex items-center mx-4">
        <slot name="app-icon" />
        <slot name="app-name" />
    </div>

    <div class="place-self-end flex items-center">
        <i class="fa-regular fa-window-minimize self-start px-4"></i>
        <i class="fa-regular fa-square-full text-sm px-4"></i>

        <!-- Close btn -->
        <RouterLink to="/" class="cursor-default">
            <i class="fa-solid fa-xmark text-xl hover:text-neutral-100 hover:bg-red-600 px-4 rounded-tr-md"></i>
        </RouterLink>
    </div>
</div>
</template>