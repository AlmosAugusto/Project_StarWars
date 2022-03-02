import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../Service/getPlanets';

export const StarWarsContext = createContext();

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    const response = await getPlanets();
    setData(response);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);
  const value = { data };
  return (
    <StarWarsContext.Provider value={ value }>
      { children }
    </StarWarsContext.Provider>
  );
}
PlanetsProvider.propTypes = { children: PropTypes.string }.isRequired;

export default PlanetsProvider;
