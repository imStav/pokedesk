<script setup>
import Folder from '../components/Folder.vue'
import Notes from '../components/Notes.vue'
</script>

<template>
<div class="folder view-layout">
    <!-- Calls the Folder component -->
    <Folder />

    <!-- Calls the Notes component -->
    <!-- Customizable on needs using slots -->
    <Notes>
        <template #title>
            
        </template>
        <template #text>
            
        </template>

        <template #img>
            
        </template>
        <template #description>
            
        </template>
    </Notes>
</div>
</template>