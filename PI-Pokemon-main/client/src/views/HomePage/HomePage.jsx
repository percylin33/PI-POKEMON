 import  { useEffect, useState } from "react";
 import { useDispatch,useSelector } from "react-redux";
// 
import { getPokemons, setFilters , sortPoke, searchPoke} from '../../redux/actions';

import Filtros from "../../Components/Filtros/Filtros";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CarsContainer from "../../Components/CarsContainer/CarsContainer";
import Order from "../../Components/Order/Order";
import Pagination from "../../Components/Pagination/Pagination";


const HomePage = () => {
   const dispatch = useDispatch();
   const pokemons = useSelector((state) => state.pokemons);
   const filters = useSelector((state) => state.filters);
   const sorting = useSelector((state) => state.sorting);

   useEffect(() => {
     dispatch(getPokemons());
   }, []);

   const handleSearch = (searchTerm) => {
     dispatch(searchPoke(searchTerm));
   };

   const handleFilter = (type, origin) => {
     dispatch(setFilters(type, origin));
   };

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
    <div>
      {/*  */}
      <SearchBar onSearch={handleSearch} />
       <Filtros onFilter={handleFilter} />
      <Order onSort={handleSort} /> 
      <CarsContainer pokemons={currentCars} filters={filters} sorting={sorting} />
    
      <Pagination  
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
       />
    </div>
  );
};

export default HomePage;