import { combineReducers } from 'redux'
import { boardReducer } from './boardReducer'
import { modalReducer } from './modalReducer'
import { defaultReducer } from './errorReducer'

const rootReducer = combineReducers({
  post: boardReducer,
  modal: modalReducer,
  error: defaultReducer
})


export default rootReducer