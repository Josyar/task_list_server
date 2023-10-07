const tasks = require("../tasks");

const actualizarTareas = (req, res) => {
    const taskId = req.params.id;
    const {isCompleted, description} = req.body;
    const taskToUpdate = tasks.find(task => task.id === taskId);

    if (taskToUpdate) {
        taskToUpdate.isCompleted = isCompleted;
        taskToUpdate.description = description;

        res.send(`Tarea con ID ${taskId} actualizada.`)
    } else {
        res.status(404).send('Tarea no encontrada.')
    }
}

module.exports = actualizarTareas;