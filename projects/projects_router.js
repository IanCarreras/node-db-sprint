const express = require("express")
const projectsModel = require("./projects_model")

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await projectsModel.find()
        projects.forEach(project => {
            project.completed === 0 ? project.completed = false : project.completed = true
        })
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await projectsModel.add(req.body)
        res.status(201).json(newProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router