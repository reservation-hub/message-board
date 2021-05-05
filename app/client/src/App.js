import Template from './layout/template';
import {  BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './css/App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ Template } />
      </BrowserRouter>
    </div>
  );
}

export default App;