import React from 'react';
import './App.css';
import './index.css';
import Table from './components/Table';
import PlanetsProvider from './context';

function App() {
  return (
    <PlanetsProvider>
      <span>Project Star Wars Planets </span>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
