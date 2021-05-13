import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../action/boardAction';

const PostForm = () => {
    
    const [ inputs, setInputs ] = useState({
        title: '',
        name: '',
        message: '',
        password: ''
    })
    const { title, name, message, password } = inputs
    const dispatch = useDispatch();

    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target
            setInputs({ ...inputs, [name]: value })
        },
        [inputs],
    )

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault()
            dispatch(addMessage(inputs))
            window.location.href = ('/')
        },
        [dispatch, inputs],
    ) 

    return(
        <form className="postform" onSubmit={ onSubmit }>
            <div className="form-title">
                <label htmlFor="title">
                    title
                </label>
                <input type="text" name="title" value={ title } onChange={ onChange } />
            </div>
            <div className="form-username">
                <label htmlFor="name">
                    name
                </label>
                <input type="text" name="name" value={ name } onChange={ onChange } />
            </div>
            <div className="form-password">
                <label htmlFor="name">
                    password
                </label>
                <input type="password" name="password" value={ password } onChange={ onChange } />
            </div>
            <div className="form-message">
                <label htmlFor="message">
                    message
                </label>
                <textarea in="message" name="message" value={ message } onChange={ onChange } />
            </div>
            <div className="form-button">
                <button type="submit">submit</button>
            </div>
        </form>
    );
}

export default PostForm;