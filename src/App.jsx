import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import CampMap from './components/Map'


import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <main className="container">
        <CampMap />
    </main>
  </BrowserRouter>
);

export default App;
