import React, { useEffect } from 'react'
import ReactScrollToBottom from 'react-scroll-to-bottom';
import './App.css';

const Chat = ({ socket, userName, roomName }) => {
  const [message, setMessage] = React.useState('');
  const [messageList, setMessageList] = React.useState([]);

  const sendMessage = async () => {
    if (message !== '') {
      const messageData = {
        room: roomName,
        user: userName,
        message: message,
        time: new Date().getHours() + ':' + new Date().getMinutes(),
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setMessage('');
    }
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });

    return () => {
      socket.off('receive_message');
    }
  }, [socket]);

  return (
    <div className='window'>
      <div className='header'>
        <p>Real Time Chat</p>
      </div>
      <div className='body'>
        <ReactScrollToBottom className='container'>
          {messageList.map((message, index) => (
            <div
              key={index}
              className='message'
              id={userName === message.user ? 'outgoing' : 'incoming'}
            >
              <div className='content'>
                <p>{message.message}</p>
              </div>
              <div className='data'>
                <p id='time'>{message.time}</p>
                <p id='user'>{message.user}</p>
              </div>
            </div>
          ))}
        </ReactScrollToBottom>
      </div>
      <div className='footer'>
        <input
          type='text'
          placeholder='Enter your message'
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && sendMessage()}
          value={message}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat;
