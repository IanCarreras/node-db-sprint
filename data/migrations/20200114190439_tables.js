

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
          tbl.increments('id')
          tbl.text('resource_name', 100)
              .unique()
              .notNullable()
          tbl.text('description', 200)
      })
  
      .createTable('tasks', tbl => {
          tbl.increments('id')
          tbl.text('description', 200)
              .notNullable()
          tbl.text('notes', 200)
          tbl.boolean('completed')
              .notNullable()
              .defaultTo(false)
          tbl.integer('project_id')
              .notNullable()
              .references("id")
              .inTable("projects")
              .onDelete("CASCADE")
              .onUpdate("CASCADE")
      })

      .createTable('projects_resources', tbl => {
        tbl.increments('id')
        tbl.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
        tbl.integer('resource_id')
            .notNullable()
            .references('id')
            .inTable('resources')
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('tasks')
      knex.schema.dropTableIfExists('resources')
      knex.schema.dropTableIfExists('projects')
  };
  