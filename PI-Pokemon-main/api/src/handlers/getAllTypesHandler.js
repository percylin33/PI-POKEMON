const axios = require("axios")
const db = require("../db")
const {Type} = require("../db")
const getAllTypesHandler = async(req, res) => {
  
    try {
        const types = await Type.findAll();
        
        
        
        if (types.length === 0) {
            const {data} =  await axios.get("https://pokeapi.co/api/v2/type"  )
            const newTypes = data.results.map(type => ({ name: type.name }));

            
            console.error(newTypes);
            await Type.bulkCreate(newTypes)
            res.status(200).json(newTypes)
        }else{
            res.status(200).json("ya se")
        }

               //console.log();
    } catch (error) {
       res.status(400).json({error: error.message}) 
    }
}

module.exports = getAllTypesHandler