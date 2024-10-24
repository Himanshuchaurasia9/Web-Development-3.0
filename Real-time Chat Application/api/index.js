import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 3036;

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  socket.on('join_room', ({ roomName }) => {
    socket.join(roomName);
  });

  socket.on('send_message', ({ room, user, message, time }) => {
    socket.to(room).emit('receive_message', { user, message, time });
  });
});

app.get('/', (_req, res) => {
  res.send('Server is running');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
