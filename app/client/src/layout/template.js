import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual  } from 'react-redux'
import { fetchList } from '../redux/action/boardAction'
import { openModal, hideModal } from '../redux/action/modalAction'
import Modal from '../components/modal/modal'
import Header from '../components/header'
import MessageList from '../components/messageList'
import Loading from '../components/Loading'

const Template = () => {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const { total, modal, loading, error } = useSelector(
    state => ({
      total: state.post,
      modal: state.modal.modal,
      loading: state.post.loading,
      error: state.error
    }), shallowEqual)
    console.log(total)
  
  const modalOpen = () => {
    dispatch(openModal())
    document.body.style.overflow = 'hidden'
  }
  
  const modalHide = () => {
    dispatch(hideModal())
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    dispatch(fetchList(page))
  }, [dispatch, page])


  return(
    <Fragment>
      <Header modalOpen={ modalOpen } />
      { modal && 
        <Modal modalHide={ modalHide } error={ error } /> 
      }
      { loading ? 
          <Loading /> : 
          <MessageList error={ error } /> 
      }
    </Fragment>
  )

}

export default Template