const { Router } = require("express");
const { Pokemon, Tipo } = require("../db.js");
const { info, forName, forId } = require("../middlewares/middleware.js");

const router = Router();

router.get("/", async (req, res) => {
  let { name, by } = req.query;
  let pokemonInfo = [];
  if (name) {
    name = name.toLowerCase();
    pokemonInfo = await forName(name);
    if (!pokemonInfo.length)
      return res.json({ info: "No se encontro el pokemon" });
    return res.json(pokemonInfo);
  }

  pokemonInfo = await info(by);
  if (!pokemonInfo.length) return res.json({ info: "No hay mas registros" });

  res.json(pokemonInfo);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pokemonInfo = await forId(id);
  if (!pokemonInfo.id) return res.json({ info: "No se encontro el pokemon" });
  res.json(pokemonInfo);
});


router.post("/", async (req, res) => {
  let { name, vida, imagen , fuerza, defensa, velocidad, altura, peso, tipos } =
    req.body;
    console.log(req.body);
  if (
    isNaN(Number(vida)) ||
    isNaN(Number(fuerza)) ||
    isNaN(Number(defensa)) ||
    isNaN(Number(velocidad)) ||
    isNaN(Number(altura)) ||
    isNaN(Number(peso))
  )
    return res.json({ info: "Alguno de los argumentos no es un numero" });

  if (!name) return res.json({ info: "El nombre es obligatorio" });

  const existe = await Pokemon.findOne({ where: { name: name } });
  if (existe) return res.json({ info: "El pokemon ya existe" });

  const pokemon = await Pokemon.create({
    name: name.toLowerCase(),
    vida: Number(vida),
    imagen: imagen,
    fuerza: Number(fuerza),
    defensa: Number(defensa),
    velocidad: Number(velocidad),
    altura: Number(altura),
    peso: Number(peso),
  });

  if (!tipos || !tipos.length) tipos = [1];
 
  await pokemon.addTipos(tipos);
  res.json({ info: "Pokemon creado" });
});

module.exports = router;
