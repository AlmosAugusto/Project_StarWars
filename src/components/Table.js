import React, { useState, useEffect } from 'react';
import getPlanets from '../Service/getPlanets';

/* <-- Código feito pelo Moisés(intrutor da Trybe da turma 17), pego emm uma thread no Slack -->

function MeuComponenteIrado() {
  const [estado1, setEstado1] = useState('');
  const [estado2, setEstado2] = useState('');
  const [estado3, setEstado3] = useState('');

  useEffect(() => {
    // Quando meu estado1 for alterado posso fazer o que quiser aqui
    // Inclusive filtrar coisas ;)
  }, [estado1]);

  return (
    <>
      <input
        type="text"
        value={ estado1 }
        onChange={ ({ target }) => setEstado1(target.value) }
      />
      <input
        type="text"
        value={ estado2 }
        onChange={ ({ target }) => setEstado2(target.value) }
      />
      <input
        type="text"
        value={ estado3 }
        onChange={ ({ target }) => setEstado3(target.value) }
      />
    </>
  );
} */

function Table() {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filteredPlanets, setfilteredPlanets] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [columnFilter, setColumnFilter] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  console.log(filterByNumericValues);
  // console.log(filteredPlanets);
  console.log(columnFilter);

  const fetchPlanets = async () => {
    const response = await getPlanets();
    setData(response);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  /* Com o auxilio deste video, conclui o requisito 2 --> https://www.youtube.com/watch?v=Q8JyF3wpsHc */
  useEffect(() => {
    setfilteredPlanets(data.filter(
      (planet) => planet.name.toLowerCase().includes(filterByName.toLowerCase()),
    ));
  }, [filterByName, data]);

  useEffect(() => {
    filterByNumericValues.forEach((filterByNumericValue) => {
      if (filterByNumericValue.comparison === 'maior que') {
        setfilteredPlanets(filteredPlanets.filter((planet) => (
          Number(planet[column]) > Number(filterByNumericValue.value))));
      } if (filterByNumericValue.comparison === 'igual a') {
        setfilteredPlanets(filteredPlanets.filter((planet) => (
          Number(planet[column]) === Number(filterByNumericValue.value))));
      } if (filterByNumericValue.comparison === 'menor que') {
        setfilteredPlanets(filteredPlanets.filter((planet) => (
          Number(planet[column]) < Number(filterByNumericValue.value))));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  /* Requisito 3
  useEffect(() => {
    setfilteredPlanets(data.filter(
      (planet) => {
        if (comparison === 'maior que') {
          return (Number(planet[column]) > Number(value));
        } if (comparison === 'igual a') {
          return (Number(planet[column]) === Number(value));
        } if (comparison === 'menor que') {
          return (Number(planet[column]) < Number(value));
        } return null;
      },
    ));
  }, [filterByNumericValues]); */

  useEffect(() => {
    filterByNumericValues.forEach((filterByNumericValue) => {
      if (filterByNumericValue.column === column) {
        setColumnFilter(columnFilter.filter((filter) => (
          filter !== filterByNumericValue.column)));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  return (

    <div>
      <div>
        <label htmlFor="filterByName">
          <input
            name="filterByName"
            type="text"
            data-testid="name-filter"
            onChange={ (event) => setFilterByName(event.target.value) }
            placeholder="Digite um planeta"
          />
        </label>
        <div>
          <select
            data-testid="column-filter"
            onChange={ (event) => setColumn(event.target.value) }
          >
            {columnFilter.map((coluna) => <option key={ coluna }>{coluna}</option>)}
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
            onClick={ () => setFilterByNumericValues(
              [...filterByNumericValues, { column, comparison, value }],
            ) }
          >
            FILTRAR
          </button>
        </div>
      </div>
      <table border="2px solid black">
        <tr>
          <th>Nome</th>
          <th>Perído de Rotação</th>
          <th>Perído de Órbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Tipo de Terreno</th>
          <th>Superfície da Água </th>
          <th>População </th>
          <th>Filmes</th>
          <th>Data de Criação</th>
          <th>Data de Edição</th>
          <th>URL</th>
        </tr>
        {filteredPlanets.map((planet) => (
          <tr key={ planet }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Table;
