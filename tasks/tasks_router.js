const express = require("express")
const tasksModel = require("./tasks_model")

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const tasks = await tasksModel.find()
        tasks.forEach(task => {
            task.completed === 0 ? task.completed = false : task.completed = true
        })
        res.json(tasks)
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