import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemon_database',
  state: () => ({
    
    pokemons: {
      pikachu: {
        name: 'Pikachu',
        img: '/src/assets/media/shiny_pikachu.png',
        id: 25
      },

      charizard: {
        name: 'Charizard',
        img: '/src/assets/media/shiny_charizard.png',
        id: 6
      },

      blastoise: {
        name: 'Blastoise',
        img: '/src/assets/media/shiny_blastoise.png',
        id: 9
      },

      mewtwo: {
        name: 'Mewtwo',
        img: '/src/assets/media/shiny_mewtwo.png',
        id: 150
      },

      venusaur: {
        name: 'Venusaur',
        img: '/src/assets/media/shiny_venusaur.png',
        id: 3
      },

      gyarados: {
        name: 'Gyarados',
        img: '/src/assets/media/shiny_gyarados.png',
        id: 130
      }
    }
  })
})
