// importing express for web server and path for working with files
import express from 'express';
import path from 'path';

// object for handling requests and responses
const app = express();

// port
const port = 3000;

// serves built TSX from /client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// route handler for GET requests to /api/ping, responding 'pong'
app.get('/api/ping', (request, response) => {
  response.json({ message: 'pong' });
});

// if doesn't know what to do, gives them index.html
app.use((request, response) => {
  response.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// starts server to listen to incoming connections on port
app.listen(port, () => {
  console.log(`Server running`);
});