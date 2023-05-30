import React, { useState } from 'react';

const Order = ({ onSort }) => {
  const [option, setOption] = useState('');

  const handleSort = () => {
    onSort(option);
  };

  return (
    <div>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="">No Sorting</option>
        <option value="name"></option>
        <option value="attack">Attack</option>
        {/* Agrega más opciones de ordenamiento si es necesario */}
      </select>
      <button onClick={handleSort}>Sort</button>
    </div>
  );
};

export default Order;