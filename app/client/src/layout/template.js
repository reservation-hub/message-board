import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual  } from 'react-redux'
import { fetchList, deleteMessage } from '../redux/action/boardAction'
import { openModal, hideModal } from '../redux/action/modalAction'
import Modal from '../components/modal/modal'
import Header from '../components/header'
import MessageList from '../components/messageList'

const Template = () => {

  const dispatch = useDispatch()

  const { posts, modal, loading, error } = useSelector(
    state => ({
      posts: state.post.posts,
      modal: state.modal.modal,
      loading: state.post.loading,
      error: state.error
    }), shallowEqual)

    console.log(posts)

  const modalOpen = () => {
    dispatch(openModal())
    document.body.style.overflow = "hidden";
  }
  
  const modalHide = () => {
    dispatch(hideModal())
    document.body.style.overflow = "unset";
  }

  const onDelete = useCallback(
    (_id, password) => {
      dispatch(deleteMessage(_id, password))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(fetchList())
  }, [dispatch])

  return(
    <>
      <Header modalOpen={ modalOpen } />
      { modal && <Modal modalHide={  modalHide } error={ error } /> }
      { loading ? <p>loading</p> : 
        <MessageList 
          posts={ posts } 
          onDelete={ onDelete } 
          error={ error } 
        /> 
      }
    </>
  )

}

export default Template