import React, { useState, useEffect } from 'react';
import PostForm from '../components/postForm';
import axios from 'axios';


const Template = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8090/')
            .then(res => console.log(res))
    })

    return(
        <div>
            <h1>message board</h1>
            <PostForm />
        </div>
    );
}

export default Template;