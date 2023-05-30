import React, { useState } from 'react';

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
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        {/* Agrega más opciones de tipo si es necesario */}
      </select>
      <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
        <option value="">All Origins</option>
        <option value="api">API</option>
        <option value="database">Database</option>
        {/* Agrega más opciones de origen si es necesario */}
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filtros;