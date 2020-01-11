const db = require('../utils/db')

function find() {
    return db('projects').select()
}

async function add(data) {
    const [id] = await db('projects').insert(data)
    return db('projects').where({ id }).first()
}

module.exports = {
    find,
    add
}