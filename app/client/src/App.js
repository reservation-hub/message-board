import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reduce from './redux/reducers/rootReducer'
import Template from './layout/template'
import history from './history'
import './css/App.css'

function App() {

  const middleware = [thunk]

  const conposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
  const store = createStore(
    reduce, conposeEnhancer(applyMiddleware(...middleware))
    )

  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route exact path='/' component={ Template } />
      </Router>
    </Provider>
  );
}

export default App;