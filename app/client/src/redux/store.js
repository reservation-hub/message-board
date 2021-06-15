import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'


const middleware = [thunk, logger]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose(applyMiddleware([]))
const store = createStore(
  rootReducer, composeEnhancer(applyMiddleware(...middleware))
)

export default store