import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './Chat';

const socket = io.connect('http://localhost:3036');

function App() {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [showChat, setShowChat] = useState(false);

  const disconnectRoom = () => {
    socket.disconnect();
  }

  const joinChat = () => {
    if (userName !== '' && roomName !== '') {
      socket.emit('join_room', { userName, roomName });
      setShowChat(true);
    }
  }

  return (
    <div className='App'>
      <h1>Real-time Chat Application</h1>

      {!showChat ? (
        <div className='join-chat-container'>
          <h3>Join Chat</h3>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter room name"
            onChange={(e) => setRoomName(e.target.value)}
          />
          <button onClick={joinChat}>Join Now</button>
        </div>
      ) : (
        <Chat socket={socket} userName={userName} roomName={roomName} />
      )}

      {showChat ? (
        <button
          onClick={() => {
            disconnectRoom();
            setShowChat(false);
          }}
          className='leave-chat'
        >
          Leave Chat
        </button>
      ) : (
        <></>
      )}
    </div >
  );
}

export default App;
