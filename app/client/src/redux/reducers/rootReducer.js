import { combineReducers } from 'redux'
import { boardReducer } from './boardReducer'
import { modalReducer } from './modalReducer'
import { errorReducer } from './errorReducer'

const rootReducer = combineReducers({
  post: boardReducer,
  modal: modalReducer,
  error: errorReducer
})


export default rootReducer