import { GET_POKEMONS, GET_POKEMON, ADD_CHARACTER, SET_FILTERS, SORT_POKEMON , GET_TYPES } from "./actions";

const initialState ={
    pokemons: [],
    pokemon: {},
    character:[],
    types:[]
    
   
}

const rootReducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_POKEMONS:
            return {...state, pokemons: action.payload}
        case GET_POKEMON : 
            return {...state, pokemon: action.payload}
            
        case ADD_CHARACTER :
            return{...state,
                 character:  [...state.character, action.payload]}    

        case SET_FILTERS:
            return {
                  ...state,
                  filteredPokemons: action.payload,
                };
        case SORT_POKEMON:
                // Lógica para ordenar los pokemons según la opción seleccionada
                // ...
                // Retorna el estado actualizado con los pokemons ordenados
            return {
                  ...state,
                  sortedPokemons: action.payload,
                };

        case GET_TYPES:

        return{
            ...state,
            types: action.payload
        }

    default:
        return{...state}
    }    

}

export default rootReducer;