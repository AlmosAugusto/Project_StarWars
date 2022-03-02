import React from 'react';
import './App.css';
import Table from './component/Table';
import PlanetsProvider from './context';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, Star Wars!</span>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
