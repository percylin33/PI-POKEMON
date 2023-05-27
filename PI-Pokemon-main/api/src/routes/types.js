const { Router } = require("express");
const fetch = require("node-fetch");
const { Tipo } = require("../db.js");

const router = Router();

router.get('/', async (req, res) => {
    const api = await fetch('https://pokeapi.co/api/v2/type');
    const types = await api.json();
    for( t of types.results ) {
        const existe = await Tipo.findOne({where: { name: t.name }})
        if(existe) return res.json(await Tipo.findAll())
        await Tipo.create({ name: t.name})
    }
    res.json(await Tipo.findAll());
})



module.exports = router;