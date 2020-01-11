const express = require("express")
const resourcesModel = require("./resources_model")
const db = require("../utils/db")

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await resourcesModel.find())
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newResource = await resourcesModel.add(req.body)
        res.status(201).json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router