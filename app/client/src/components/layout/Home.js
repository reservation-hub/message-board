import React, { 
  useEffect, 
  useState 
} from 'react'
import { 
  useSelector, 
  useDispatch, 
  shallowEqual  
} from 'react-redux'
import { fetchList } from '../../redux/action/boardAction'
import { hideModal } from '../../redux/action/modalAction'
import Modal from '../modal/modal'
import MessageList from '../messages/messageList'
import Loading from '../common/Loading'
import Pagination from '../common/pagination'
import useInput from '../../utils/useInput'

const Home = () => {

  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  const { total, modal, loading, error } = useSelector(
    state => ({
      total: state.post,
      modal: state.modal.modal,
      loading: state.post.loading,
      error: state.error
    }), shallowEqual)

  
  const [ inputs, setInputs ] = useInput({
    title: '',
    name: '',
    password: '',
    message: ''
  })  
  
  const modalHide = () => {
    dispatch(hideModal())
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    dispatch(fetchList(page))
  }, [dispatch, page])

  return(
    <React.Fragment>
      { modal && 
        <Modal 
          modalHide={ modalHide } 
          error={ error }
          inputs={ inputs }
          dataSet={ setInputs } 
        /> 
      }
      { loading ? 
          <Loading /> : 
          <MessageList 
            error={ error } 
            posts={ total.posts } 
          /> 
      }
      <Pagination totalPage={ total.total } paginate={ setPage } page={ page } />
    </React.Fragment>
  )

}

export default Home