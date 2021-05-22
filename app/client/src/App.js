import {  BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reduce from './reducers/rootReducer'
import Template from './layout/template'
import history from './history'
import './css/App.css'

function App() {

  const conposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
  const store = createStore(
    reduce, conposeEnhancer(applyMiddleware(reduxThunk))
    )

  return (
    <div>
      <Provider store={ store } history={ history }>
        <BrowserRouter>
          <Route path="/" component={ Template } />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;