const express = require('express');
const cors = require('cors');
 const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function logRequests(request, response, next) {

  const {method, url} = request

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.log(logLabel)

  return next()
}


app.get("/repositories", logRequests ,(request, response) => {
  
  response.json({repositories})
  // TODO



});

app.post("/repositories", (request, response) => {
  // TODO

  //const likes = 0
 // const { id, title, url, techs, likes } = request.body
 const { title,  url, techs} = request.body
 const newProject = { id: uuid(), title, url, techs, likes: 0}
 repositories.push(newProject)

 //console.log(newProject)

return response.json({newProject})

});

app.put("/repositories/:id", (request, response) => {
  // TODO

  const { id } = request.params
  const {title, url, techs } =  request.body
 // console.log(id)
 const dados = repositories.findIndex(resposta => resposta.newProject.id = id)
 //const arrayAlt = repositories[dados]
 //console.log(arrayAlt)   
 //repositories[dados].map(resposta => resposta.newproject.title = title )
 repositories[dados].newProject.title = title
 repositories[dados].newProject.url = url
 repositories[dados].newProject.techs = techs

 return response.status(200).send('Opa deu certo')

});

app.delete("/repositories/:id", (request, response) => {
  // TODO

  const { id } = request.params
  
 // console.log(id)
 const dados = repositories.findIndex(resposta => resposta.newProject.id = id)

 repositories.splice(dados)

 return response.status(200).send('Registro excluidos!')

});

app.post("/repositories/:id/like", (request, response) => {
  // TODO

  const { id } = request.params
  //const {likes} = request.body
  const dados = repositories.findIndex(resposta => resposta.newProject.id = id)
  repositories[dados].newProject.likes = repositories[dados].newProject.likes + 1

  return response.status(200).send('Likes aumentados!')

});

module.exports = app;
