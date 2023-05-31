import React, { useState } from 'react';
import { setFilters } from "../../redux/actions";

const Filtros = ({ onFilter }) => {
  const [type, setType] = useState('');
  const [origin, setOrigin] = useState('');

  const handleFilter = () => {
    onFilter(type, origin);
  };

  return (
    <div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Unknown</option>
        <option value="shadow">Shadow</option>
    
        {/* Agrega más opciones de tipo si es necesario */}
      </select>
      <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
        <option value="">All Origins</option>
        <option value="1">API</option>
        <option value="2">Database</option>
        {/* Agrega más opciones de origen si es necesario */}
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filtros;