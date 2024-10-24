# Real-time Chat Application

## Overview

The Real Time Chat Application is a simple chat application built using React.js, Node.js, Express, and Socket.IO. The application allows users to create rooms, join rooms, and send messages in real-time.

## Prerequisites

You'll need a few things to get started.

### Required

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

## Installation

1. Install the dependencies by running `npm install` in the root directory.

```bash
npm install
```

The postinstall script automatically installs dependencies for both the client and api after running the main npm install.

## Running the App

After installing dependencies, you can run both the client and server concurrently using the following command:

```bash
npm run dev
```

The client will run on `http://localhost:3000` and the server will run on `http://localhost:3036`.

## Project Structure

The project is divided into two main directories: `client` and `api`.

### Client

The `client` directory contains the frontend code for the application. This includes the React components, styles, and assets.

### API

The `api` directory contains the backend code for the application. This includes the server.

## Project Workflow

1. The client connects to the server using Socket.IO.
2. The client sends a request to the server to create a new room.
3. The server creates a new room and sends a response to the client.
4. The client joins the room and sends a message to the server.
5. The server broadcasts the message to all clients in the room.
6. The clients receive the message and display it in the chat window.

## Development

You can start the client and server separately by running the following commands:

```bash
npm run client
```

```bash
npm run api
```

This will start the client on `http://localhost:3000` and the server on `http://localhost:3036`.

## Dependencies

The project uses the following dependencies:

### Client

- [React](https://reactjs.org/)
- [Socket.IO Client](https://socket.io/docs/v4/client-api/)
- [React Scroll To Bottom](https://www.npmjs.com/package/react-scroll-to-bottom)

### API

- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/docs/v4/server-api/)
- [Cors](https://www.npmjs.com/package/cors)

### Dev Tools

- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Concurrently](https://www.npmjs.com/package/concurrently)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any ideas or suggestions.

## Future Enhancements

- Add user authentication
- Add support for sending images and files
- Add support for emojis
- Add support for private messaging

## Authors

- [Sanjay R](https://github.com/sanjay-ranganath)

## License

This project is open source and available under the [MIT License](LICENSE).
