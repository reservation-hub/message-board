import moment from 'moment'
import useInput from '../utils/useInput'

const Messages = ({ posts, onDelete, error }) => {

  const [value, setvalue] = useInput({
    password: ''
  })
  const checkActive = value.password.length < 6 ? true : false
  const hasError = error.data && error.data.id === posts._id

  return(
    <div className="message-box">
      <div className="message-info">
        <span className="message-title">
          {posts.title}
        </span>
        <div className="line"></div>
        <span className="message-name">
          name
          <div className="indata">
           {posts.name}
          </div>
        </span>
        <span className="date">
          { moment(posts.createdAt).format('Y/M/D') }Posted
        </span>
        <div className="delete-area">
        <form>
          <input 
            type="password" 
            name="password"
            placeholder="input delete password"
            autoComplete="off"
            onChange={ setvalue } 
            value={ value.password } 
          />
        </form>
        <button 
          onClick={ () => onDelete(posts._id, value.password) } 
          disabled={ checkActive } >
            delete
          </button>
      </div>
      </div>
      <div className="message-body">
        <span className="message-dt">
          {posts.message}
        </span>
      </div>
      { hasError &&
        <span className="err-msg"> {error.data.message} </span> 
      }
    </div>
  )
}

export default Messages;