import { GET_POKEMONS, GET_POKEMON, ADD_CHARACTER } from "./actions";

const initialState ={
    pokemons: [],
    pokemon: {},
    character:[]
    
   
}

const rootReducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_POKEMONS:
            return {...state, pokemons: action.payload}
        case GET_POKEMON : 
            return {...state, pokemon: action.payload}
            
        case ADD_CHARACTER :
            return{...state,
                 character:  [...state.character, action.payload]
             

            }    

    default:
        return{...state}
    }    

}

export default rootReducer;