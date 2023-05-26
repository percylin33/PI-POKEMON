const detailController = require("../controllers/getDetailController")

const getDetailPokHandler = async (req, res) => {
    try {
          const {id} = req.params;
      console.log(id);

    const  pokDetail = await detailController(id)

    res.status(200).json(pokDetail);
 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
   
}
 module.exports = getDetailPokHandler;