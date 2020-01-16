const db = require('../utils/db')

function find(id) {
    return db('tasks').select().where({ project_id: id})
}

async function add(data) {
    const [id] = await db('tasks').insert(data)
    return db('tasks').where({ id }).first()
}

module.exports = {
    find,
    add
}