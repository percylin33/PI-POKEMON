    import axios from "axios";

    export const GET_POKEMON = "GET_POKEMON"
    export const GET_POKEMONS = "GET_POKEMONS";
    export const ADD_CHARACTER = "ADD_CHARACTER";

    export  const getPokemons = () => {
        return async function (dispatch) {
            const serverPoke  = await axios.get("http://localhost:3001/pokemons");

            const pokemons = serverPoke.data
            
            dispatch({
                type: GET_POKEMONS, payload: pokemons
            })
        }
    }
    export const getPokemon = (id) =>{
        
        return async function (dispatch) {
            const serverPoke = await axios.get(`http://localhost:3001/pokemons/${id}`);
            const pokemon = serverPoke.data;
    
            dispatch({
                type: GET_POKEMON, payload: pokemon
                })
        }
    }

    export const searchPoke =  (name) => {

        return async (dispatch) => {
            console.log("hola search");
            try {
                const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
                const [data] = response.data;
                console.log(data );
        
                if (data.name) {
                dispatch({ type: ADD_CHARACTER, payload: data });
                } else {
                alert("Personaje no encontrado");
                }
                
            } catch (error) {
                alert("Error al obtener el personaje");
            }
        }
    }
    export default {getPokemons , GET_POKEMONS, getPokemon ,GET_POKEMON, searchPoke, ADD_CHARACTER }