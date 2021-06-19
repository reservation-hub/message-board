const Header = ({ modalOpen }) => {

  return(
    <header className="header-area">
      <h1 className="title">
        Message board
      </h1>
        <button 
          className="modal-button" 
          onClick={ () => modalOpen() }>
            Add Message
        </button>
    </header>
  )

}

export default Header