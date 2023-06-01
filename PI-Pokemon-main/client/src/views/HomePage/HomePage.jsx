 import  { useEffect, useState } from "react";
 import { useDispatch,useSelector } from "react-redux";
// 
import { getPokemons, setFilters , sortPoke, searchPoke} from '../../redux/actions';

import Filtros from "../../Components/Filtros/Filtros";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CarsContainer from "../../Components/CarsContainer/CarsContainer";
import Order from "../../Components/Order/Order";
import Pagination from "../../Components/Pagination/Pagination";

import styled from "./HomePage.module.css";


const HomePage = () => {
   const dispatch = useDispatch();
   const pokemons = useSelector((state) => state.filterPoke);
   const filters = useSelector((state) => state.filters);
   const sorting = useSelector((state) => state.sorting);

   useEffect(() => {
     dispatch(getPokemons());
   }, []);

   const handleSearch = (searchTerm) => {
     dispatch(searchPoke(searchTerm));
   };

  //  const handleFilter = (type, origin) => {
  //    dispatch(setFilters(type, origin));
  //  };

   const handleSort = (option) => {
     dispatch(sortPoke(option));
   };

  
  const [currentPage, setCurrentPage] =   useState(1);
  const carsPerPage = 12;

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = pokemons.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(pokemons.length / carsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styled.conte}>
  
    <br />
      <SearchBar onSearch={handleSearch} />
       <Filtros  /> 
       {/* onFilter={handleFilter} */}
      <Order onSort={handleSort} /> 
    <br />
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