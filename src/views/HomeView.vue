<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
// import WindowsHeader from '../components/WindowsHeader.vue'
// import Notes from '../components/Notes.vue'

// function readNotes() {
//     let modal = document.querySelector('#notes')
//     modal.showModal()
// }

// const pikachuShiny = ref('/src/assets/media/shiny_pikachu.png')
</script>

<template>
<!--w-1/2 flex justify-center items-center mx-auto-->
<section class="w-1/2 flex justify-center items-center mx-auto h-screen text-slate-100">
    <!--grid grid-cols-2 gap-4 place-items-center-->
    <div class="flex flex-row">
        <div class="p-2 text-center border border-transparent hover:border hover:border-slate-400 hover:bg-[#6B728060] hover:border-opacity-50">
            <RouterLink to="/folder" class="cursor-default">
                <i class="fa-solid fa-folder text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400"></i>
                <p>Research</p>
            </RouterLink>
        </div>

        <!-- Work in progress -->
        <!-- <div class="p-2 text-center border border-transparent hover:border hover:border-slate-400 hover:bg-[#6B728060] hover:border-opacity-50" @click="readNotes">
            <i class="fa-solid fa-file-lines text-5xl bg-clip-gradient file-gradient"></i>
            <p>Shiny Theory</p>
        </div>

        <Notes /> -->
    </div>
</section>
</template>
