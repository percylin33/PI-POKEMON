
const  axios = require("axios");
const {Pokemon} = require("../db")
const pokAllController = require("../controllers/pokAllController")
const getAllPokHandler = async (req, res) => {
 
       const {name} = req.query;
           try {
      if(name){         
          const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
         const pokemonApi = {
            name: data.name,
            type: data.types.map((type) => type.type.name),
            image: data.sprites.other.dream_world.front_default,
         }
         const dbPokemon = await Pokemon.findOne({ name: { $regex: new RegExp(`^${name}$`, "i") } });
         console.log("dbPoken");
          if (pokemonApi) {              
            res.status(200).json(pokemonApi)
            
         }else if (dbPokemon) {           
            console.log("dbPokemon");         
              res.status(200).json(dbPokemon)      
                }  else{             
                   res.status(404).json({ message: "No se encontró ningún Pokemon con ese nombre." });

         }
      } else{         
          const pokPage = await pokAllController();
          res.status(200).json(pokPage);
      }
      
   } catch (error) {       console.log("perra");
      res.status(400).json({error: error.message});    }
}

module.exports = getAllPokHandler;

      
      //  //console.log(Pokemon);
     
      //  if (!name) {
      //    const pokPage = await pokAllController();

      //    res.status(200).json(pokPage);
      //  } else {

       
      //    //console.log("dbPokemon"); 

      //    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      //    const pokemonApi = {
      //       name: data.name,
      //       type: data.types.map((type) => type.type.name),
      //       image: data.sprites.other.dream_world.front_default,
      //    }
      //    const regex = new RegExp(`^${name}$`, "i");
      //    const dbPokemon =  pokemonData.find(pokemon => regex.test(pokemon.name));

      //    if (dbPokemon) {
      //       // console.log("dbPokemon");
      //     res.status(200).json(dbPokemon)
      //    }else if (pokemonApi) {
      //       res.status(200).json(pokemonApi)
           
      //    }  else{
      //        res.status(404).json({ message: "No se encontró ningún Pokemon con ese nombre." });

      //    }
         
      //  }

