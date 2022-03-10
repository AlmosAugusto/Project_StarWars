import React, { useContext, useEffect, useState } from 'react';
import { StarWarsContext } from '../context';

const { data } = useContext(StarWarsContext);
console.log(data);

function Filters() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState('');

  console.log(filterByNumericValues);

  useEffect(() => {
    (filterByNumericValues.filter(
      (filterByNumericValue) => console.log(filterByNumericValue.column),
    ));
  }, [filterByNumericValues]);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <label htmlFor="value-filter">
        <input
          type="number"
          id="value-filter"
          value={ value }
          data-testid="value-filter"
          onChange={ (event) => setValue(event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilterByNumericValues({ column, comparison, value }) }
      >
        FILTRAR
      </button>
    </div>
  );
}
export default Filters;
