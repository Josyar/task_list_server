const tasks = require("../tasks");


const creadorTareas = (req, res) => {
    const { id, isCompleted, description} = req.body;

    const newTask = {
        id,
        isCompleted,
        description
    }

    tasks.push(newTask)

    res.json(newTask)
}

module.exports = creadorTareas;