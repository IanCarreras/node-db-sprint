exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.text('project_name', 100)
                .unique()
                .notNullable()
            tbl.text('description', 200)
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false)
        })

        .createTable('resource', tbl => {
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

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resource')
    .dropTableIfExists('projects')
};
