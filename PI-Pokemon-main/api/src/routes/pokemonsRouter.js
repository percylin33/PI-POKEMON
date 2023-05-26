const getAllPokHandler= require("../handlers/getAllPokHandler")
const getDetailPokHandler = require("../handlers/getDetailPokHandler");
const postsPokHandler =require("../handlers/postsPokHandler")


const {Router } = require("express");

const pokemonsRouter = Router();
pokemonsRouter.get("/",getAllPokHandler);
pokemonsRouter.get("/:id",getDetailPokHandler )
pokemonsRouter.post("/",postsPokHandler)


module.exports = pokemonsRouter;
