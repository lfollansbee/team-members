exports.seed = function(knex, Promise) {
  return knex("member").del()
};
