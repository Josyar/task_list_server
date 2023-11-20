const tasks = require("..tasks");

const Traer_ID_Tareas = (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);

    if (!task){
        res.status(404).send('Tarea no encontrada');
    } else {
        res.send(task);
    }
}
module.exports = Traer_ID_Tareas;