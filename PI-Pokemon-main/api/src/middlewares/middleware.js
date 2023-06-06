const axios = require("axios");
const { Pokemon, Tipo } = require("../db.js");

const info = async () => {
  const api = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30");
  const data = api.data;

  const bd = await Pokemon.findAll({
    include: {
      model: Tipo,
      attributes: ["type"],
      through: {
        attributes: [],
      },
    },
  });
 
  const bd2 = bd.map((ele) => {
    const tiposs = ele.tipos.map((el) => el.type);
  

    return {
      id: ele.id,
      idPoke: ele.idPoke,
      name: ele.name,
      type: tiposs,
      img: ele.imagen,
    };
  });

  let base = [...bd2, ...data.results];

  let pokemonInfo = [];
  for (let i = 0; i < base.length; i++) {
    if (!base[i]) return pokemonInfo;
    if (base[i].url) {
      const pokemon = await axios.get(base[i].url);
      const info = pokemon.data;

      pokemonInfo.push({
        id: info.id,
        name: info.name,
        type: info.types.map((t) => t.type.name),
        img: info.sprites.other.dream_world.front_default,
        
      });
    } else {
      pokemonInfo.push({
        id: base[i].id,
        idPoke: base[i].idPoke,
        name: base[i].name,
        type: base[i].type,
        img: base[i].img,
        
      });
    }
    
  }

  const poke = await Pokemon.findAll({ include: Tipo });
  pokemonInfo.push({ ...poke });

  return pokemonInfo;
};

const forName = async (name) => {
  try {
    const db = await Pokemon.findOne({
      where: {
        name: name,
      },
      include: {
        model: Tipo,
        attributes: ["type"],
        through: {
          attributes: [],
        },
      },
    });

    if (db) {
    
      const pokemonDb = [
        {
          id: db.id,
          idPoke: db.idPoke,
          name: db.name,
          type: db.tipos.map((ele) => ele.type),
          img: db.imagen,
        },
      ];
      return pokemonDb;
    } else {
      const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = api.data;
      const pokemonName = [
        {
          id: data.id,
          name: data.name,
          type: data.types.map((t) => t.type.name),
          img: data.sprites.other.dream_world.front_default,
        },
      ];
      return pokemonName;
    }
  } catch (error) {
    return [];
  }
};

const forId = async (id) => {
  try {
    const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = api.data;

    const pokemonId = {
      id: data.id,
      name: data.name,
      type: data.types.map((t) => t.type.name),
      img: data.sprites.other.dream_world.front_default,
      vida: data.stats[0].base_stat,
      fuerza: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      velocidad: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
    };

    return pokemonId;
  } catch (error) {}

  try {
    const db = await Pokemon.findByPk(id, { include: Tipo });
    const pokemonDb = {
      id: db.idPoke,
      name: db.name,
      type: db.tipos.map((t) => t.name),
      img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
      vida: db.vida,
      fuerza: db.fuerza,
      defensa: db.defensa,
      velocidad: db.velocidad,
      height: db.altura,
      weight: db.peso,
    };

    return pokemonDb;
  } catch (error) {
    return {};
  }
};

module.exports = {
  info,
  forName,
  forId,
};