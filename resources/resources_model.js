const db = require('../utils/db')

function find() {
    return db('resources').select()
}

async function add(data) {
    const [id] = await db('resources').insert(data)
    return db('resources').where({ id }).first()
}

module.exports = {
    find,
    add
}