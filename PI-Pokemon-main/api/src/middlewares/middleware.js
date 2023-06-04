const fetch = require("node-fetch");
const { Pokemon, Tipo } = require("../db.js");

const info = async (by) => {
  const api = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
  const data = await api.json();
  const bd = await Pokemon.findAll(
    { include:{ 
      model: Tipo,
      attributes: ["type"],
      through:{
        attributes:[],
      }
  
    }  });
    const bd2= bd.map((ele)=>{
      const tiposs=  ele.tipos.map((el)=> el.type);
      console.log(tiposs);
      return{
        id: ele.id,
        idPoke: ele.idpoke,
        name: ele.name,
        type: tiposs,
        img: ele.img

      }
    })

  let base = [...bd2, ...data.results];

  if (by === "2") {
    base = [...bd];
  } else if (by === "1") {
    base = [...data.results];
  }

  let pokemonInfo = [];
  for (i = 0; i < base.length; i++) {
    if (!base[i]) return pokemonInfo;
    if (base[i].url) {
      const pokemon = await fetch(base[i].url);
      const info = await pokemon.json();

      pokemonInfo.push({
        id: info.id,
        name: info.name,
        type: info.types.map((t) => t.type.name),
        img: info.sprites.other.dream_world.front_default,
        fuerza: info.stats[1].base_stat,
      });
    } else {
      pokemonInfo.push({
        id: base[i].id,
        idPoke: base[i].idPoke,
        name: base[i].name,
        type: base[i].type,
        fuerza: base[i].fuerza,
        img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
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
          attributes:[]
        }
      }
    });
    if (db) {
      console.log(db);
      const pokemonDb = [
        {
          id: db.id,
          idPoke: db.idPoke,
          name: db.name,
          type: db.tipos.map((ele)=> ele.type),
          img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
        },
      ];
      return pokemonDb;
    } else {
      const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await api.json();
      const pokemonName = [
        {
          id: data.id,
          name: data.name,
          type: data.types.map((t) => t.type.name),
          img: data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
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
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await api.json();

    const pokemonId = {
      id: data.id,
      name: data.name,
      type: data.types.map((t) => t.type.name),
      img: data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
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
