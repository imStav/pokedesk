<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>
  <nav class="navbar">
    <div class="flex flex-row">
      <div class="flex mx-auto py-2">
        <RouterLink to="/">
          <i class="fa-brands fa-microsoft windows-home home-hover-effects"></i>
        </RouterLink>

        <RouterLink to="/folder" class="mx-4">
          <i class="fa-solid fa-folder bg-clip-gradient folder-gradient home-hover-effects"></i>
        </RouterLink>

        <RouterLink to="/pokedex" class="mr-4">
          <i class="fa-solid fa-tablet bg-clip-gradient pokedex-gradient home-hover-effects"></i>
        </RouterLink>
      </div>

      <div class="text-lg p-2 fixed right-0 wifi-hover">
        <i class="fa-solid fa-wifi bg-clip-gradient wifi-gradient" title="Pr Chen's Network"></i>
      </div>

    </div>
  </nav>
</header>

<RouterView />
</template>