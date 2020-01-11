
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1, 
          resource_name: 'resource1'
        },
        {
          id: 2, 
          resource_name: 'resource2'
        },
        {
          id: 3, 
          resource_name: 'resource3'
        }
      ]);
    });
};
