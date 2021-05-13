import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export const fetchList = () => async (dispatch) => {

  await axios.get('http://localhost:8090/')
    .then(res => dispatch({
      type: FETCH_DATA,
      payload: res.data
    }))

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

export const deleteMessage = (id) => async (dispatch) => {

  await axios.delete('http://localhost:8090/' + id, {

  })
    .then(res => {
      dispatch({
        type: DELETE_MESSAGE,
        payload: res
      })
    })

}
