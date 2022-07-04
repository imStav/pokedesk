const url = 'https://pokeapi.co/api/v2/pokemon/pikachu/'

//Retrieves data from RESTapi at pokeapi.co
export async function getNormalPikachu() {
  try {
      const pikapika = await fetch(url)
      const res = await pikapika.json()
      const pikachu = res.sprites.other.home.front_default
      
      return pikachu
  }
  catch (e) { console.log(e) }
}

//Retrieves data from RESTapi at pokeapi.co
export async function getShinyPikachu() {
  try {
      const pikapika = await fetch(url)
      const res = await pikapika.json()
      const pikachu = res.sprites.other.home.front_shiny
      
      return pikachu
  }
  catch (e) { console.log(e) }
}