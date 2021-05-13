import React from 'react';
import PostForm from '../components/postForm';
import MessageList from '../components/messageList';

const Template = () => {

    return(
        <div>
            <h1>message board</h1>
            <PostForm />
            <MessageList />
        </div>
    );
}

export default Template;