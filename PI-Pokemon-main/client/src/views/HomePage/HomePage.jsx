 import  { useEffect, useState } from "react";
 import { useDispatch,useSelector } from "react-redux";

import { getPokemons, setFilters , sortPoke, searchPoke} from '../../redux/actions';

import Filtros from "../../Components/Filtros/Filtros";

import CarsContainer from "../../Components/CarsContainer/CarsContainer";
import Order from "../../Components/Order/Order";
import Pagination from "../../Components/Pagination/Pagination";

import styled from "./HomePage.module.css";
import ima from "../../access/pngegg.png";

const HomePage = () => {
   const dispatch = useDispatch();
   const pokemons = useSelector((state) => state.filterPoke);
   const filters = useSelector((state) => state.filters);
   const sorting = useSelector((state) => state.sorting);
   console.log(pokemons);
   useEffect(() => {
     dispatch(getPokemons());
   }, []);

  

  
  const [currentPage, setCurrentPage] =   useState(1);
  const carsPerPage = 12;

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = typeof pokemons === "object"? pokemons.slice(indexOfFirstCar, indexOfLastCar): [];

  const totalPages = Math.ceil(pokemons.length / carsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styled.conte}>
    <div className={styled.filOrIm}>
        <img className={styled.image}  src={ima} alt="Logo pokemon" />
    <div className={styled.conetFIlOr}>
    
       <Filtros  /> 
      <Order /> 
    
    </div> 

    </div>
      <CarsContainer pokemons={currentCars} filters={filters} sorting={sorting} />
    <br />
       <Pagination   
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
       />
       <br />
    </div>
  );
};

export default HomePage;