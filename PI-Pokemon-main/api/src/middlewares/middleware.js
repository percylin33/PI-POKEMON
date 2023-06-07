const axios = require("axios");
const { Pokemon, Tipo } = require("../db.js");

const info = async () => {
  const api = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = api.data;

  const bdPromise = Pokemon.findAll({
    include: {
      model: Tipo,
      attributes: ["type"],
      through: {
        attributes: [],
      },
    },
  });

  const bd = await bdPromise;

  const bd2 = bd.map((ele) => {
    const tiposs = ele.tipos.map((el) => el.type);

    return {
      id: ele.id,
      idPoke: ele.idPoke,
      name: ele.name,
      type: tiposs,
      img: ele.imagen,
      fuerza:ele.fuerza
    };
  });

  let base = [...bd2, ...data.results];

  const pokemonInfo = await Promise.all(base.map(async (pokemon) => {
    if (!pokemon) return null;
    if (pokemon.url) {
      const apiPromise = axios.get(pokemon.url);
      const apiResponse = await apiPromise;
      const info = apiResponse.data;

      return {
        id: info.id,
        name: info.name,
        type: info.types.map((t) => t.type.name),
        img: info.sprites.other.dream_world.front_default,
        fuerza: info.stats[1].base_stat,
      };
    } else {
      return {
        id: pokemon.id,
        idPoke: pokemon.idPoke,
        name: pokemon.name,
        type: pokemon.type,
        img: pokemon.img,
        fuerza: pokemon.fuerza,
      };
    }
  }));
  

  const poke = await Pokemon.findAll({ include: Tipo });
  pokemonInfo.push({ ...poke });

  return pokemonInfo.filter((pokemon) => pokemon !== null);
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
      type: db.tipos.map((t) => t.type),
      img: db.imagen,
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