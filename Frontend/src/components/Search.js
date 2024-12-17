import React, { useState } from 'react';

function Search() {
  const [destination, setDestination] = useState('');

  const searchBuses = () => {
    // Add logic to search buses
  };

  return (
    <div>
      <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Search for buses" />
      <button onClick={searchBuses}>Search</button>
    </div>
  );
}

export default Search;
