import Template from './layout/template';
import {  BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import React from 'react';
import reduxThunk from 'redux-thunk'
import './css/App.css';
import reduce from './reduce/rootReducer'


function App() {

  const conposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
  const store = createStore(
    reduce, conposeEnhancer(applyMiddleware(reduxThunk))
    )

  return (
    <div>
      <Provider store={ store }>
        <BrowserRouter>
          <Route path="/" component={ Template } />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;