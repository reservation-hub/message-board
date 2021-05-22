import { combineReducers } from 'redux'
import { boardReducer } from './boardReducer'
import { modalReducer } from './modalReducer'

const rootReducer = combineReducers({
  post: boardReducer,
  modal: modalReducer
})


export default rootReducer