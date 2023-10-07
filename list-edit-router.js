const express = require("express");
const listEditRouter = express.Router();

const handleInvalidRequest = require('./middlewares/manejador_error');
const createTask = require('./controladores/creador_Tareas')
const deleteTask = require('./controladores/borrar_Tareas')
const updateTask = require('./controladores/actualizar_Tareas')

listEditRouter.post('/creador_Tareas', handleInvalidRequest, createTask);

listEditRouter.delete('/borrar_Tareas/:id', deleteTask);

listEditRouter.put('/actualizar_Tareas/:id', handleInvalidRequest, updateTask);

module.exports = listEditRouter;