<script setup>
import WindowsHeader from './WindowsHeader.vue'

function readNotes() {
    let modal = document.querySelector('#notes')
    modal.showModal()
}
</script>

<template>
<div class="folder-ui">
    <!-- Calls the WindowsHeader component -->
    <WindowsHeader>
        <template #app-icon>
            <i class="fa-solid fa-folder bg-clip-gradient folder-gradient mr-2"></i>
        </template>

        <template #app-name>
            <p>File explorer</p>
        </template>
    </WindowsHeader>

    <!-- Notes / files contained inside the folder -->
    <div class="flex justify-center px-20 my-8">
        <div class="text-center mx-2 p-2 folder-files-hover" @click="readNotes">
            <i class="fa-solid fa-file-lines text-5xl bg-clip-gradient file-gradient"></i>
            <p>shiny_pika</p>
            <p>chu</p>
        </div>

        <div class="text-center mx-2 p-2 folder-files-hover">
            <i class="fa-solid fa-file-image text-5xl bg-clip-gradient image-gradient"></i>
            <p>Physical</p>
            <p>differences</p>
        </div>
    </div>
</div>
</template>