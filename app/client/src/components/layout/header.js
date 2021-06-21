import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/action/modalAction'
import { cleanError } from '../../redux/action/boardAction'

const Header = () => {

  const dispatch = useDispatch()

  const modalOpen = () => {
    dispatch(cleanError())
    dispatch(openModal())
    document.body.style.overflow = 'hidden'
  }

  return(
    <header className="header-area">
      <h1 className="title">
        Message board
      </h1>
        <button 
          className="modal-button" 
          onClick={ modalOpen }>
            Add Message
        </button>
    </header>
  )

}

export default Header