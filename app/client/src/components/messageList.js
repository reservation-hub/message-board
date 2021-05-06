import React from 'react';
import Messages from './messages';

const MessageList = ({ posts }) => {

  return(
    <div>
      {posts.map((post, index) => (
        <Messages post={ post } key={ index } />
      ))}
    </div>
  );

}

export default MessageList;