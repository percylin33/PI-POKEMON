
import React, {useState, useEffect } from "react";
import style from "./CarsContainer.module.css";
import Cars from "../Cars/Cars";
import carga from "../../access/carga.gif";

const CarsContainer = ({pokemons}) => {
  const [cargando, setCargando] = useState(true);
  console.log(pokemons);
    useEffect(()=> {
      console.log("efec" + pokemons);
      if (pokemons) {
        setTimeout(() => {
        setCargando(false);
        }, 500);
      }
    
  },[pokemons])
 
  return (
       <div>
          {
            cargando?(
              <div className={style.divIma}> 
                <img src={carga} alt="carga" />
              </div>
            ):(
              <div className={style.CarsContainer} >
             { pokemons.map((pokemons) => {
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
            )
          }


       </div>
          
  );
};

export default CarsContainer;