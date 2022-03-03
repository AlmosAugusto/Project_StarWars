import React, { useState, useEffect } from 'react';
import getPlanets from '../Service/getPlanets';

function Table() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPlanets, setfilteredPlanets] = useState([]);

  const fetchPlanets = async () => {
    const response = await getPlanets();
    setData(response);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);
  /* Com o auxilio deste video, conclui o requisito 2 --> https://www.youtube.com/watch?v=Q8JyF3wpsHc */
  useEffect(() => {
    setfilteredPlanets(
      data.filter((planet) => planet.name.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, data]);

  return (

    <div>
      <div>
        <label htmlFor="search">
          <input
            name="search"
            type="text"
            data-testid="name-filter"
            onChange={ (event) => setSearch(event.target.value) }
            placeholder="Digite um planeta"
          />
        </label>
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
