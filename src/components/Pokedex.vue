<script setup>
import { usePokemonStore } from '../stores/pokemons'
import WindowsHeader from './WindowsHeader.vue'

const getPoke = usePokemonStore()

let app = {
    name: 'Pokédex',
    category: 'Shiny'
}
</script>

<template>
<div class="pokedex-ui">
    <!-- Calls the WindowsHeader component -->
    <WindowsHeader>
        <template #app-icon>
            <img src="src/components/icons/pokeball.png"  class="w-4 h-4 mr-2 my-auto" alt="Pokédex app logo">
        </template>

        <template #app-name>
            <p>{{ app.name }}</p>
        </template>
    </WindowsHeader>

    <div class="flex flex-col m-8">
        <h2 class="font-bold text-2xl">Pr Chen's {{ app.name }}</h2>
        <p class="italic mb-4 px-3 py-1 w-min bg-blue-500 text-slate-200 rounded-md">#{{ app.category }}</p>

        <div class="grid grid-cols-3">
            <!-- Retrieving data from store trough a for loop -->
            <div v-for="pokemon in getPoke.pokemons" class="flex flex-col justify-center items-center text-center p-2">
                <p class="italic">{{ pokemon.name }}</p>
                <img :src="pokemon.img" class="w-24" alt="">
                <p class="opacity-50">#{{ pokemon.id }}</p>
            </div>
        </div>
    </div>
</div>
</template>