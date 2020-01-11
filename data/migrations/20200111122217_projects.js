exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', tbl => {
            tbl.increments('id')
            tbl.text('project_name', 100)
                .unique()
                .notNullable()
            tbl.text('description', 200)
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false)
        })

        .createTable('resources', tbl => {
            tbl.increments()
            tbl.text('resource_name', 100)
                .unique()
                .notNullable()
            tbl.text('description', 200)
        })

        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.text('description', 200)
                .notNullable()
            tbl.text('notes', 200)
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false)
        })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resource')
    .dropTableIfExists('projects')
};
