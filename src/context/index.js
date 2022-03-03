import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const value = {
    data,
    setData,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      { children }
    </StarWarsContext.Provider>
  );
}
PlanetsProvider.propTypes = { children: PropTypes.string }.isRequired;

export default PlanetsProvider;
