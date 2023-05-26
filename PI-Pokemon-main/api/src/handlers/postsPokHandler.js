const createPokemon =require("../controllers/postPokController")

const postsPokeHandler = async (req, res) => {
    try {
         const {name, image, life, attack, defending, speed, height, weight} = req.body;
      // console.log(name, image, life, attack, defending, speed, height, weight );
    
         const newpok = await createPokemon(name, image, life, attack, defending, speed, height, weight)

        res.status(200).json(" pokemon creado ");
    } catch (error) {
        res.status(400).json({error: error.message})
    }
   
 }
 
 module.exports = postsPokeHandler;