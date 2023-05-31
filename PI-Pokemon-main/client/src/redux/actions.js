    import axios from "axios";


    export const GET_POKEMON = "GET_POKEMON"
    export const GET_POKEMONS = "GET_POKEMONS";
    export const ADD_CHARACTER = "ADD_CHARACTER";
    export const SET_FILTERS ="SET_FILTERS";
    export const SORT_POKEMON ="SORT_POKEMON";
    export const GET_TYPES = "GET_TYPES"

    const url= "http://localhost:3001/";

    export  const getPokemons = () => {
        return async function (dispatch) {
            const serverPoke  = await axios.get(`${url}pokemons`);

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

    export const setFilters = (type, origin) => {
        return async(dispatch, getState) => {
         
          const { pokemons } = getState();
          let filteredPokemons = [];
      
          if (origin === "api") {
            filteredPokemons = pokemons.filter((poke) =>
              poke.type.includes(type)
            );
          }
      
          dispatch({
            type: SET_FILTERS,
            payload: filteredPokemons,
          });
        };
      };

      
      // Acción para ordenar los pokemons
   export const sortPoke = (option) => {
     // Lógica para ordenar los pokemons según la opción seleccionada
     // ...
        // Retorna la acción con la opción de ordenamiento
         return {
          type: SORT_POKEMON,
       payload: option
     };
      };



    export const getTypes = ()=>{
        return async(dispatch)=>{
            try {
               const {data} = await axios.get("http://localhost:3001/types") 
               return dispatch({
                type: GET_TYPES,
                payload: data,
               })
            } catch (error) {
                console.log(error.message);
                
            }
        }


        
    }

