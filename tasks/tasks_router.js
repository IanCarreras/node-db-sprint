const express = require("express")
const tasksModel = require("./tasks_model")
const db = require("../utils/db")

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await tasksModel.find())
    } catch (err) {
        next(err)
    }
})

router.post('/:id', async (req, res, next) => {
    try {
        const newTask = await tasksModel.add(req.body)
        res.status(201).json(newTask)
    } catch (err) {
        next(err)
    }
})

module.exports = router