
exports.up = async function(knex) {
  await knex.schema.table('tasks', tbl => {
      tbl.text('project')
  })
};

exports.down = async function(knex) {
  await knex.schema.table('tasks', tbl => {
      tbl.dropColumn('project')
  })
};
