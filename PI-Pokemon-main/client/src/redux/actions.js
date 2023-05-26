import axios from "axios";

export const GET_POKEMON = "GET_POKEMON"
export const GET_POKEMONS = "GET_POKEMONS";
export  const getPokemons = () => {
    return async function (dispatch) {
        const serverPoke  = await axios.get("http://localhost:3001/pokemons");

        const pokemons = serverPoke.data
        
        dispatch({
            type: GET_POKEMONS, payload: pokemons
        })
    }
 }
 export const getPokDetail = (id) =>{

    return async function (dispatch) {
        const serverPoke = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemon = serverPoke.data;
        dispatch({
            type: "GET_POKEMON", payload: pokemon
        })
    }


 }
 export default {getPokemons , GET_POKEMONS, getPokDetail ,GET_POKEMON }