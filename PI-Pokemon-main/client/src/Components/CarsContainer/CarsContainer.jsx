
import React from "react";
import style from "./CarsContainer.module.css";
import Cars from "../Cars/Cars";


const CarsContainer = ({pokemons}) => {
console.log(pokemons);
  return (
    <div className={style.CarsContainer}>
      
      {pokemons.map((pokemons) => {
        return (
          <Cars
            key={pokemons.id}
            id={pokemons.id}
            image={pokemons.img}
            name={pokemons.name}
            types={pokemons.type && pokemons.type.join(", ")}
          />
          
        );
      })}

    </div>
  );
};

export default CarsContainer;