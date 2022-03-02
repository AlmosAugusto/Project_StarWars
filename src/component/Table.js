import React, { useContext } from 'react';
import { StarWarsContext } from '../context';

function Table() {
  const { data } = useContext(StarWarsContext);
  console.log(data);
  return (
    <div>
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
        {data.map((planet) => (
          <tr key="planets">
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
