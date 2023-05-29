// import style from "./CarsContainer.module.css";
// import Cars from "../Cars/Cars";
// import { useSelector } from "react-redux"
// const CarsContainer = () => {
// 	const arrayPokemons = useSelector(state=>state.pokemons)
 


//     return (
// 		<div className= {style.CarsContainer}>
//        { arrayPokemons.map(poke=> {
//             return <Cars
//             key = {poke.id}
//             id = {poke.id}
//             image = {poke.img}
//             name= {poke.name}
//             types=  {poke.type && poke.type.join(", ")}
            
//             />

//         })}
// 		</div>
//     )
// }

// export default CarsContainer;


import React, { useState } from "react";
import style from "./CarsContainer.module.css";
import Cars from "../Cars/Cars";
import { useSelector } from "react-redux";

const CarsContainer = () => {
  const arrayPokemons = useSelector((state) => state.pokemons);

  // Estado para controlar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Cantidad de cars a mostrar por página
  const carsPerPage = 12;

  // Cálculo del índice inicial y final de los cars a mostrar en la página actual
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = arrayPokemons.slice(indexOfFirstCar, indexOfLastCar);

  // Función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.CarsContainer}>
      {currentCars.map((poke) => {
        return (
          <Cars
            key={poke.id}
            id={poke.id}
            image={poke.img}
            name={poke.name}
            types={poke.type && poke.type.join(", ")}
          />
        );
      })}

      {/* Renderizado de los enlaces de paginación */}
      <div className={style.pagination}>
        {arrayPokemons.length > carsPerPage &&
          Array.from(
            { length: Math.ceil(arrayPokemons.length / carsPerPage) },
            (_, index) => (
              <button
                key={index}
                className={
                  index + 1 === currentPage ? style.activePage : style.page
                }
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
      </div>
    </div>
  );
};

export default CarsContainer;