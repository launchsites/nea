// importing express for web server and path for working with files
import express from 'express';
import path from 'path';
import {addUser} from "./userAuth"

// object for handling requests and responses
const server = express();

// port
const port = 3000;

server.use(express.json());

// serves built TSX from /client/dist
server.use(express.static(path.join(__dirname, '../client/dist')));

// sign up route
server.post('/server/sign-up', async (request, response) => {
  console.log(request.body)
  const username:string = request.body.username
  const email:string = request.body.email
  const password:string = request.body.password
  
  const success = await addUser(username, email, password)

  if (success) {response.json({status: "yes"})}
  else {response.json({status: "no"})}
  
});


// if doesn't know what to do, gives them index.html
server.use((request, response) => {
  response.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// starts server to listen to incoming connections on port
server.listen(port, () => {
  console.log(`Server running`);
});