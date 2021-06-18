import axios from 'axios'
import { 
  FAILURE, 
  LOADING, 
  FETCH_DATA,
  ADD_MESSAGE,
  DELETE_MESSAGE
} from './types'

const isLoading = () => {
  return { type: LOADING }
}
const isError = (err) => {
  return { type:FAILURE, payload: err.response }
}

export const fetchList = (page) => async (dispatch) => {

  dispatch(isLoading())
  try {
    const res = await axios.get(`http://localhost:8090/?page=${page}`)
    dispatch({ type: FETCH_DATA, payload: res.data.result.results, total: res.data.total }) 
  } catch (e) {
    dispatch(isError(e))
  }  
}

export const addMessage = (messageData) => async (dispatch) => {

  try {
    const res = await axios.post('http://localhost:8090/', { ...messageData })
    dispatch({ type: ADD_MESSAGE, payload: res.data })
    window.location.replace('/')
  } catch (e) {
    dispatch(isError(e))
  }
}

export const deleteMessage = (_id, password) => async (dispatch) => {

  try {
    const res = await axios.delete(`http://localhost:8090/${_id}`, { data: { _id: _id, password: password } })
    dispatch({ type: DELETE_MESSAGE, payload: res.data })
    window.location.replace('/')
  } catch (e) {
    dispatch(isError(e))
  }
}
