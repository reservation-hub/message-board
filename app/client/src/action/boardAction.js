import axios from 'axios'
import history from '../history'

export const FETCH_DATA = 'FETCH_DATA'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'


export const fetchList = () => async (dispatch) => {

  await axios.get('http://localhost:8090/')
    .then(res => {
      dispatch({
        type: FETCH_DATA,
        payload: res.data
        })
      })
}

export const addMessage = (messageData) => async (dispatch) => {

  await axios.post('http://localhost:8090/', { ...messageData })
    .then(res => {
      dispatch({
        type: ADD_MESSAGE,
        payload: res.data
      })
    })

}

export const deleteMessage = (_id, password) => async (dispatch) => {

  await axios.delete('http://localhost:8090/' + _id , 
  { data: { password: password } })
    .then(res => {
      dispatch({
        type: DELETE_MESSAGE,
        payload: res.data
      })
    })

}
