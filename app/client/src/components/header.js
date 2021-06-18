const Header = ({ modalOpen }) => {

  return(
    <div className="header-area">
      <h1 className="title">
        Message board
      </h1>
        <button 
          className="modal-button" 
          onClick={ () => modalOpen() }>
            Add Message
        </button>
    </div>
  )

}

export default Header