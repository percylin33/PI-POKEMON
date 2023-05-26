const {Pokemon} = require("../db")

const createPokemon = async (name, image, life, attack, defending, speed, height, weight) => 
await Pokemon.create({name, image, life, attack, defending, speed, height, weight})
 


module.exports = createPokemon;