// importing express for web server and path for working with files
import express from 'express';
import path from 'path';
import {addUser, authenticateUser} from "./userAuth"
import { queryDatabase } from "./database"
import type { Project} from "./types"


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

// login route
server.post('/server/login', async (request, response) => {
  console.log(request.body)
  const username:string = request.body.username
  const email:string = request.body.email
  const password:string = request.body.password

  const success = await authenticateUser(username, email, password)

  let userId = await queryDatabase(`SELECT id FROM users WHERE username = '${username}'`)
  // return success and then the id to make url to forward to
  if (success) {response.json({status: "yes", userid: userId[0].id})}

  else {response.json({status: "no"})}

});


// get projects route
server.post('/server/get-projects', async (request, response) => {
  console.log(request.body)
  const userid: string = request.body.id

  const projects = await queryDatabase(`SELECT id, projectjson FROM projects WHERE userid = '${userid}'`)

  
  // return success and then the id to make url to forward to
  response.json(projects)

});

// create project route
server.post('/server/create-project', async (request, response) => {
  const project: Project = {
    projectTitle: request.body.projectTitle,
    projectDescription: request.body.projectDescription,
    componentsArray: []
  }
  const userid = request.body.id
  await queryDatabase(`INSERT INTO projects (userid, projectjson) VALUES (${userid}, '${JSON.stringify(project)}')`)
  response.json({status: "yes"})
})


// save project route
server.post('/server/save-project', async (request, response) => {
  
  const project: Project = {
    projectTitle: request.body.projectTitle,
    projectDescription: request.body.projectDescription,
    componentsArray: request.body.newComponents,
    id: request.body.projectId
  }
  const userid = request.body.id
  await queryDatabase(`UPDATE projects SET projectjson = '${JSON.stringify(project)}' WHERE id =${project.id}`)
  response.json({status: "yes"})
})



// if doesn't know what to do, gives them index.html
server.use((request, response) => {
  response.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// starts server to listen to incoming connections on port
server.listen(port, () => {
  console.log(`Server running`);
});