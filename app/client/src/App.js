import React from 'react'
import { Router, Route } from 'react-router-dom'
import Home from './components/layout/Home'
import Header from './components/layout/header'
import history from './utils/history'
import './sass/index.sass'

function App() {
  return (
    <React.Fragment>
      <Router history={ history }>
        <Header />
        <Route exact path='/' component={ Home } />
      </Router>
    </React.Fragment>
  );
}

export default App;