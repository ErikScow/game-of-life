import React, { useState } from 'react';
import './App.css';

import Grid from './components/Grid'
import Info from './components/Info'

function App() {
  return (
    <div className="app">
      <Grid/>
      <Info/>
    </div>
  );
}

export default App;
