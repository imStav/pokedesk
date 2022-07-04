//Pikachu Shiny
export async function getPikachu() {
    try {
      const shinyPikachu = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  
      const res = await shinyPikachu.json()
  
      //Map() to be able to set and so return multiple values
      const pika = new Map()
      pika.set('name', res.name)
      pika.set ('sprite', res.sprites.other.home.front_shiny)
      pika.set ('id', res.id)

      console.log(res.sprites.other.home.front_shiny)
  
      return pika
    }
    catch (e) {console.log(e)}
}