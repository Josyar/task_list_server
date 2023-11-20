const express = require('express');
const listViewRouter = express.Router();

const verifyParams = require('./middlewares/validador');
// const getCompletedTasks = require('./controllers/getCompleteTasks');
// const getInCompletedTasks = require('./controllers/getInCompleteTasks');
const getTasks = require('./controladores/traer_Tareas');
const getTaskId = require('./controladores/Traer_ID_Tareas') 

listViewRouter.get('/tasks/:Completed',verifyParams, getTasks);
listViewRouter.get('./controladores/Traer_ID_Tareas',getTaskId)

module.exports = listViewRouter;