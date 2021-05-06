import React, { useState, useEffect } from 'react';
import PostForm from '../components/postForm';
import MessageList from '../components/messageList';
import axios from 'axios';


const Template = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8090/')
            .then(res => (setPosts(res.data), console.log(res)))
    }, [posts])

    return(
        <div>
            <h1>message board</h1>
            <PostForm />
            <MessageList posts={posts} />
        </div>
    );
}

export default Template;