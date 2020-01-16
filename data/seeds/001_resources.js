
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: 'resource1'
        },
        {
          resource_name: 'resource2'
        },
        {
          resource_name: 'resource3'
        }
      ]);
    });
};
