var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('member').orderBy('name','asc')
  .then(function(members){
    res.render('index', { member: members });
  })
});

module.exports = router;
