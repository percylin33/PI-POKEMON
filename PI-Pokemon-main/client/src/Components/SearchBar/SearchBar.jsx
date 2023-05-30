 import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPoke } from "../../redux/actions";


 const SearchBar = () => {
    const dispatch = useDispatch();
 
    const [searchValue, setSearchValue] = useState("");

    const onSearch = async () => {
      dispatch(searchPoke(searchValue));
    };

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        onSearch();
      }
    };

    const handleChange = (event) => {
      setSearchValue(event.target.value);
    };

    
   return (
     <div>
        <input type="search" value={searchValue} onChange={handleChange} onKeyDown={handleKeyPress} />
       <button onClick={onSearch}>Agregar</button>
    

     </div>
   );
 };

export default SearchBar;