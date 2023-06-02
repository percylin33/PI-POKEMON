import {
  GET_POKEMONS,
  GET_POKEMON,
  ADD_CHARACTER,
  SET_FILTERS,
  SORT_POKEMON,
  GET_TYPES,
  GET_ORIGIN,
} from "./actions";

const initialState = {
  pokemons: [],
  pokemon: {},
  character: [],
  types: [],
  filterPoke: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filterPoke: action.payload,
      };
    case GET_POKEMON:
      return { ...state, pokemon: action.payload };

    case ADD_CHARACTER:
      return { ...state, filterPoke: action.payload };

    case SET_FILTERS:
      let poke = state.pokemons;

      const pokemomnfinter =
        action.payload === "All"
          ? poke
          : poke.filter((e) => e.type && e.type.includes(action.payload));

      return {
        ...state,
        filterPoke: pokemomnfinter,
      };

    case SORT_POKEMON:
      const data = state.filterPoke;
      const filData = data.filter(
        (e) => e.name !== undefined && e.fuerza !== undefined
      );
      const info = filData.sort((a, b) => {
        console.log(a, b);
        if (action.payload === "ascending") {
          return a.name.localeCompare(b.name);
        }
        if (action.payload === "decending") {
          return b.name.localeCompare(a.name);
        }
        if (a.fuerza < b.fuerza) {
          return action.payload === "ataqueMax" ? 1 : -1;
        }
        if (a.fuerza > b.fuerza) {
          return action.payload === "ataqueMin" ? 1 : -1;
        }
      });

      return {
        ...state,
        filterPoke: info,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case GET_ORIGIN:
      const orData = state.pokemons;
      let orde = [];
console.log(orData);
      if (action.payload === "1") {
        orde = orData.filter((e) => {
          // console.log(e.id);
          if (e.id !== undefined && typeof e.id === "number") {
            return e;
          }
        });
      }
      if (action.payload === "2") {
        orde = orData.filter((e) => {
          // console.log(e.id);
          if (e.id !== undefined && typeof e.id === "string") {
            return e;
          }
        });
      }
      if (action.payload === "All") {
       orde = state.pokemons;
      }

      console.log(orde);
      return {
        ...state,
        filterPoke: orde,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
