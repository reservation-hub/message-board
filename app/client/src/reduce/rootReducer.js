import { combineReducers } from 'redux'
import boardReducer from './boardReducer'

const rootReducer = combineReducers({
  post: boardReducer
})


export default rootReducer