const express = require('express');
const app = express();
const port = 3000;

//importando routers 
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

//declarando rutas especificas para los router
app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

//lista de tareas 
const tasks = [
    { id: 1, 
        isCompleted: false,
        description: "Aprender a manejar express"
    }, 
    { id: 2, 
        isCompleted: true, 
        description: "practicar mas react" 
    },
    { id: 3, 
        isCompleted: true, 
        description: "Alimentar mis tortugas" 
    }
];

//ruta para solicitar la lista en formato json
app.get('/tasks', (_req, res) => {
    res.json(tasks);
});

//iniciando el servidor
app.listen(port, () => {
    console.log(`El servidor escucha en el puerto http://localhost:${port}`);
});