exports.seed = function(knex, Promise) {
  return knex('member').del()
    .then(function () {
      return Promise.all([
        knex('member').insert({name: 'Andy'}),
        knex('member').insert({name: 'Evan'}),        knex('member').insert({name: 'Zach'}),
        knex('member').insert({name: 'Chris'}),
        knex('member').insert({name: 'Lucy'})
      ]);
    });
};
