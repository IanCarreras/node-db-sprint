const express = require("express")
const tasksModel = require("./tasks_model")
const projectsModel = require('../projects/projects_model')

const router = express.Router()

router.get('/:id', async (req, res, next) => {
    try {
        const tasks = await tasksModel.find(req.params.id)
        const project = await projectsModel.findById(req.params.id)

        tasks.forEach(task => {
            task.completed === 0 ? task.completed = false : task.completed = true
        })
        const projectTasks = {
            project_name: project[0].project_name,
            project_description: project[0].description,
            tasks
        }
        res.json(projectTasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        if (!req.body.project_id) {
            res.status(400).json({ message: 'must provide a project id'})
        }
        const newTask = await tasksModel.add(req.body)
        res.status(201).json(newTask)
    } catch (err) {
        next(err)
    }
})

module.exports = router