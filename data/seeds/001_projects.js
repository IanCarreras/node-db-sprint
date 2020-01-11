
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          project_name: 'project1'
        },
        {
          id: 2, 
          project_name: 'project2'
        },
        {
          id: 3, 
          project_name: 'project3'
        }
      ]);
    });
};
