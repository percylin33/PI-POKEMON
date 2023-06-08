    import axios from "axios";


    export const GET_POKEMON = "GET_POKEMON"
    export const GET_POKEMONS = "GET_POKEMONS";
    export const ADD_CHARACTER = "ADD_CHARACTER";
    export const SET_FILTERS ="SET_FILTERS";
    export const SORT_POKEMON ="SORT_POKEMON";
    export const GET_TYPES = "GET_TYPES"
    export const GET_ORIGIN = "GET_ORIGIN"
    export const CREATE_POKE = "CREATE_POKE"

   

    export  const getPokemons = () => {
        return async function (dispatch) {
            try {
                const serverPoke  = await axios.get(`/pokemons`);
    
                const pokemons = serverPoke.data
                
                dispatch({
                    type: GET_POKEMONS, payload: pokemons
                })
                
            } catch (error) {
                alert("Error al obtener los pokemones");
            }
        }
    }
    
    export const getPokemon = (id) =>{
        
        return async function (dispatch) {
            try {
                
                const serverPoke = await axios.get(`/pokemons/${id}`);
                const pokemon = serverPoke.data;
    
                dispatch({
                     type: GET_POKEMON, payload: pokemon
                     })
            } catch (error) {
                alert("Error al obtener el pokemon");
            }
            
        }
    }

    export const searchPoke =  (name) => {

        return async (dispatch) => {
            try {
                const response = await axios.get(`/pokemons?name=${name}`);
                const data = response.data;
                
               return dispatch({ type: ADD_CHARACTER, payload: data });
             
            } catch (error) {
                alert("Error al obtener el personaje");
            }
        }
    }

    export const setFilters = ( payload) => {
          return {type:SET_FILTERS, payload }
      };

      
      
   export const sortPoke = (option) => {
     
         return {
          type: SORT_POKEMON,
       payload: option
     };
      };



    export const getTypes = ()=>{
        return async(dispatch)=>{
            try {
               const {data} = await axios.get(`/types`) 
               return dispatch({
                type: GET_TYPES,
                payload: data,
               })
            } catch (error) {
                alert("Error al obtener los tipos");
                
            }
        }
    } 

    export const getOrigin = (option) => {
        
        return {
            type:GET_ORIGIN,
            payload: option
        }
  
    }

    export const createPoke = (payload) => {
        return async function (dispatch) {
            try {
                let create = await axios.post("/pokemons", payload)
                return dispatch ( {
                    type:CREATE_POKE,
                    payload: create.data
                })
                
            } catch (error) {
                alert("Error al crear el pokemon");
                
            }
            
        }
    }

