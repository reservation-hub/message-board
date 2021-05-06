import React, { useState, useCallback } from 'react';
import axios from 'axios';

const PostForm = () => {
    
    const [ inputs, setInputs ] = useState({
        title: '',
        name: '',
        message: ''
    })

    const onChange = useCallback((e) => {
            const { name, value } = e.target
            setInputs({ ...inputs, [name]: value })
        },
        [inputs]
    )

    const onSubmit = () => {
        axios.post("http://localhost:8090/", {
            title: inputs.title,
            name: inputs.name,
            message: inputs.message
        })
    }

    return(
        <form className="postform">
            <div className="form-title">
                <label htmlFor="title">
                    title
                </label>
                <input type="text" name="title" onChange={ onChange } />
            </div>
            <div className="form-username">
                <label htmlFor="name">
                    name
                </label>
                <input type="text" name="name" onChange={ onChange } />
            </div>
            <div className="form-message">
                <label htmlFor="message">
                    message
                </label>
                <textarea in="message" name="message" onChange={ onChange } />
            </div>
            <div className="form-button">
                <button onClick={ onSubmit } >submit</button>
            </div>
        </form>
    );
}

export default PostForm;