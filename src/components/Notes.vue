<script setup>
import { ref , onMounted } from 'vue'
import { getNormalPikachu , getShinyPikachu } from '../apis/getPokemons'
import WindowsHeader from '../components/WindowsHeader.vue'

// Default Note content
let note = {
    fileName: 'shiny_pikachu.txt',
    title: 'Shiny Pikachu!',
    text: 'Last day, I have seen a very rare Pikachu specimen. A shiny Pikachu! Easily recognizable due to its different color. Below, two pictures to highlight that difference:',
    source: 'Source: pr-chen.io/shiny-research'
}

// Reactive variables to display sprites
const normalPikachu = ref()
const shinyPikachu = ref()

onMounted(async() => {
    const getPika = await getNormalPikachu()
    normalPikachu.value = getPika
})

onMounted(async() => {
    const getPika = await getShinyPikachu()
    shinyPikachu.value = getPika
})
</script>

<template>
<!-- Dialog notes container -->
<!-- v3.1.0 new feature: backdrop:bg-transparent on dialog -->
<dialog class="dialog-ui" id="notes">

    <!-- Calls the WindowsHeader component -->
    <WindowsHeader>
        <template #app-icon>
            <i class="fa-solid fa-file-lines bg-clip-gradient file-gradient mr-2"></i>
        </template>

        <template #app-name>
            <p>{{ note.fileName }}</p>
        </template>
    </WindowsHeader>

    <!-- Note content -->
    <div class="flex flex-col p-4">
        <slot name="title">
            <h2 class="font-bold text-2xl mb-4">
                {{ note.title }}
            </h2>
        </slot>
        <slot name="text">
            <p>{{ note.text }}</p>
        </slot>

        <div class="flex justify-center">
            <div class="my-4 px-2 py-2">
                <slot name="img">
                    <img :src="normalPikachu" class="h-24" alt="normal pikachu" />
                </slot>
                <slot name="description">
                    <p class="text-center italic opacity-80">Normal</p>
                </slot>
            </div>

            <div class="my-4 px-2 py-2">
                <img :src="shinyPikachu" class="h-24" alt="shiny pikachu" />
                <p class="text-center italic opacity-80">Shiny</p>
            </div>
        </div>

        <p class="opacity-40 italic">
            {{ note.source }}
        </p>
    </div>
</dialog>
</template>