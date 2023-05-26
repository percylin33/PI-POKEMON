const axios = require("axios")

const pokAllController = async () =>{
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=12`);

  const pokemons = data.results;
  const pokemonsPromises = pokemons.map(pokemon => axios.get(pokemon.url));

  const pokemonsResponses = await Promise.all(pokemonsPromises);
  const pokemonsData = pokemonsResponses.map(response => {
     const pokemon = response.data;
    
     const name = pokemon.name;
     const types = pokemon.types.map(type => type.type.name);
     const image = pokemon.sprites.other.dream_world.front_default
    //  console.log( image);
      

     return { name, types, image };
  });
   return pokemonsData
}

module.exports = pokAllController;