const db = require('../utils/db')

function find() {
    return db('tasks').select()
}

async function add(data) {
    const [id] = await db('tasks').insert(data)
    return db('tasks').where({ id }).first()
}

module.exports = {
    find,
    add
}