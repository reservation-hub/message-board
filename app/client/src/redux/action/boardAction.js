import axios from 'axios'
import { 
  FAILURE, 
  LOADING, 
  FETCH_DATA,
  ADD_MESSAGE,
  DELETE_MESSAGE
} from './types'


export const fetchList = () => async (dispatch) => {

  dispatch({ type: LOADING })
  return await axios.get('http://localhost:8090/')
    .then(res => {
      dispatch({
        type: FETCH_DATA,
        loading: false,
        payload: res.data
        })
      })
    .catch(e => console.log(e))
      
}

export const addMessage = (messageData) => async (dispatch) => {

  await axios.post('http://localhost:8090/', { ...messageData })
    .then(res => {
      dispatch({
        type: ADD_MESSAGE,
        payload: res.data
      }, 
      window.location.replace('/'))
    })
    .catch(e => {
      dispatch({
        type: FAILURE,
        payload: e.response
      })
    })

}

export const deleteMessage = (_id, password) => async (dispatch) => {

  return await axios.delete('http://localhost:8090/' + _id , 
  { data: { password: password } })
    .then(res => {
      dispatch({
        type: DELETE_MESSAGE,
        payload: res.data
      }, 
      window.location.replace('/'))
    })
    .catch(e => {
      dispatch({
        type: FAILURE,
        payload: e.response
      })
    })

}
