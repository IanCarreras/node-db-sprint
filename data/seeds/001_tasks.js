
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1, 
          description: 'description1'
        },
        {
          id: 2, 
          description: 'description2'
        },
        {
          id: 3, 
          description: 'description3'
        }
      ]);
    });
};
