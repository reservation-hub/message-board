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

const Home = () => {

  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  const { posts, modal, loading, error } = useSelector(
    state => ({
      posts: state.post,
      modal: state.modal.modal,
      loading: state.post.loading,
      error: state.error
    }), shallowEqual)

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
        <Modal modalHide={ modalHide } error={ error } /> }
      { loading && <Loading /> }
      <MessageList error={ error } posts={ posts.posts } />
      { posts.total > 1 &&
          <Pagination 
            totalPage={ posts.total } 
            paginate={ setPage } 
            page={ page } 
            perPage={ null }
          /> }
    </React.Fragment>
  )

}

export default Home