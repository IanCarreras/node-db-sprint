const express = require('express');
const logger = require('./middleware/logger')
const notFound = require('./middleware/notFound')
const error = require('./middleware/error')
const projectsRouter = require('./projects/projects_router')
const resourcesRouter = require('./resources/resources_router')
const tasksRouter = require('./tasks/tasks_router')
const server = express()

server.use(logger())
server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

server.use(notFound())
server.use(error())

module.exports = server;