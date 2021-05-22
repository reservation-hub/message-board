import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../action/boardAction'
import '../css/postFrom.css'

const PostForm = () => {
    
    const [ inputs, setInputs ] = useState('')
    const [btnChange, setBtnChange] = useState(true)
    const { title, name, message, password } = inputs
    const dispatch = useDispatch()

    const onChange = useCallback(
        (e) => {
            e.preventDefault()
            const { name, value } = e.target
            setInputs({ ...inputs.value, [name]: value })
        },
        [inputs],
    )

    // const onBtnChange = () => {
    //     !title || !name || !message || !password ? setBtnChange(false) : setBtnChange(true)
    // }

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault()
            dispatch(addMessage(inputs))  
             window.location.href = ('/')
        },
        [dispatch, inputs],
    ) 

    return(
        <div>
            <h2 className="title">
                Add Message
            </h2>
            <form className="postform" onSubmit={ onSubmit }>
                <div className="form form-title">
                    <input 
                        type="text" 
                        name="title" 
                        autoComplete="off"
                        value={ title } 
                        onChange={ onChange }
                        placeholder="Message title" 
                    />
                </div>
                <div className="form form-username">
                    <input 
                        type="text" 
                        name="name" 
                        autoComplete="off"
                        value={ name } 
                        onChange={ onChange } 
                        placeholder="Input your name" 
                    />
                </div>
                <div className="form form-password">
                    <input 
                        type="password" 
                        name="password" 
                        autoComplete="off"
                        value={ password } 
                        onChange={ onChange } 
                        placeholder="Message password" 
                    />
                </div>
                <div className="form form-message">
                    <textarea 
                        name="message" 
                        value={ message } 
                        onChange={ onChange } 
                        placeholder="Message" 
                    />
                </div>
                <button 
                className="submit-button" 
                type="submit"
                >
                    submit
                </button>
            </form>
        </div>
    );
}

export default PostForm;