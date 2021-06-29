import axios from 'axios'
import { 
  FAILURE, 
  LOADING, 
  FETCH_DATA,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
  CLEAN_ERROR,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT
} from './types'
import history from '../../utils/history'

const BASE_URL = 'http://localhost:8090'

const isLoading = () => {
  return { type: LOADING }
}
const isError = (err) => {
  return { type: FAILURE, payload: err.response  }
}
export const cleanError = () => {
  return { type: CLEAN_ERROR }
}

export const fetchList = (page) => async (dispatch) => {

  dispatch(isLoading())
  try {
    const res = await axios.get(`${ BASE_URL }/?page=${ page }`)
    dispatch({ type: FETCH_DATA, payload: res.data.result, total: res.data.total }) 
  } catch (e) {
    dispatch(isError(e))
  }  
}

export const addMessage = (messageData) => async (dispatch) => {

  try {
    const res = await axios.post( `${ BASE_URL }/`, { ...messageData })
    dispatch({ type: ADD_MESSAGE, payload: res.data })
    history.go('/')
  } catch (e) {
    dispatch(isError(e))
  }
}

export const editMessage = (_id, messageData) => async (dispatch) => {
  try {
    const res = await axios.patch(`${ BASE_URL }/${ _id }`, { ...messageData })
    dispatch({ type: EDIT_MESSAGE, payload: res.data })
  } catch (e) {
    dispatch(isError(e))
  }
}
export const deleteMessage = (_id, password) => async (dispatch) => {

  try {
    const res = await axios.delete(`${ BASE_URL }/${ _id }`, { 
      data: { _id: _id, password: password } })
    dispatch({ type: DELETE_MESSAGE, payload: res.data })
    history.go('/')
  } catch (e) {
    dispatch(isError(e))
  }
}

export const addComment = (postId, commentData) => async dispatch => {
  
  try {
    const res = await axios.post(`${ BASE_URL }/${ postId }/comment/`, { 
      ...commentData })
    dispatch({ type: ADD_COMMENT, payload: res.data })
    history.go('/')
  } catch (e) {
    console.log(e)
    dispatch(isError(e))
  }
}

export const editComment = (postId, commentId, commentData) => async dispatch => {

  try {
    const res = await axios.patch(`${ BASE_URL }/${ postId }/comment/${ commentId }`, { 
      ...commentData })
    dispatch({ type: EDIT_COMMENT, payload: res.data })
    history.go('/')
  } catch (e) {
    dispatch(isError(e))
  }
}

export const deleteComment = (postId, commentId, password) => async dispatch => {

  try {
    const res = await axios.delete(`${ BASE_URL }/${ postId }/comment/${ commentId }`, { 
      data: { password: password } })
    dispatch({ type: DELETE_COMMENT, payload: res.data })
    history.go('/')
  } catch (e) {
    dispatch(isError(e))
  }
}
