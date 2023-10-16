const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./tasks');

//importando routers 
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");
app.use(express.json());

//declarando rutas especificas para los router
app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);


//ruta para solicitar la lista en formato json
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

//iniciando el servidor
app.listen(port, () => {
    console.log(`El servidor escucha en el puerto http://localhost:${port}`);
});

