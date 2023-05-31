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
        <option value="ascending">Ascending Alphabetically</option>
        <option value="decending">Descending Alphabetically</option>
       
      </select>
      <button onClick={handleSort}>Sort</button>
    </div>
  );
};

export default Order;