/* This is a test 2 */

var express = require('express');
var app = express();

var util = require('./utils');
var mongoose = require('mongoose');

/**
 * Require databse configuration depending on environment
 */
var conf = {
  development: {
    servers: [['app01.company.com', 27017]],
    database: 'db_name',
    user: '',
    password: '',
    replicaSet: null,
  },
  production: {
    servers: [[process.env.DATABASE_IP, process.env.DATABASE_PORT]],
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    replicaSet: null,
  }
};
var options = {};

var connectionString = util.createConnectionString(conf['development']);


if (conf.replicaSet) {
  options.replset = conf.replicaSet;
}

mongoose.connect(connectionString, options);


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/health', function (req, res) {
  res.send('All good');
});

app.get('/health2', function (req, res) {
  res.send('All good2');
});

app.get('/database', function (req, res) {
  var Schema = mongoose.Schema;
  var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true }
  });

  var User = mongoose.model('User', userSchema);
  module.exports = User;

  User.find({}, function(err, users) {
    if (err) throw err;
       res.send(users);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
