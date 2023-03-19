import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navigation from './Navigation';
import ProjectGrid from './ProjectGrid';
function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={ <ProjectGrid /> } />
      </Routes>
    </div>
  );
}

export default App;
