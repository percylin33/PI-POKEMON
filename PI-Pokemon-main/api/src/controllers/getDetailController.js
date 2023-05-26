const axios = require("axios")

const detailController = async (id) => {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(data.name);
    
    const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;

    const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;

    const defending = data.stats.find(stat => stat.stat.name === 'defense').base_stat;

    const speed = data.stats.find(stat => stat.stat.name === 'speed').base_stat;


        const pokId = data.id;
        const pokName = data.name;
        const pokImage = data.sprites.other.dream_world.front_default;
        const pokLife = hp;
        const pokSttack = attack;
        const pokDefending = defending;
        const pokSpeed = speed;
        const pokHeight = data.height;
        const pokWeight = data.weight;


    
    return {pokName, pokId, pokImage, pokLife, pokSttack, pokDefending, pokSpeed, pokHeight, pokWeight}

}

module.exports = detailController;