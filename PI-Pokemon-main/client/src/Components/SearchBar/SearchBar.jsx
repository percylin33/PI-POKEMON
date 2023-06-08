 import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPoke } from "../../redux/actions";
import style from "./SearchBar.module.css";


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
        <input className={style.in} type="search" value={searchValue} onChange={handleChange} onKeyDown={handleKeyPress} />
       <button className={style.bt} onClick={onSearch}>ADD</button>
    

     </div>
   );
 };

export default SearchBar;