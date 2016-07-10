/* This is a test 2 */

var express = require('express');
var app = express();

var util = require('./utils');
var mongoose = require('mongoose');

/**
 *  * Require databse configuration depending on environment
 *   */
var conf = {
  development: {
    servers: [['app01.company.com', 17026]],
    database: 'projects',
    user: 'projects_reader',
    password: 'secret',
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

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/wize', function (req, res) {
  res.send('Hola ');
});

app.get('/health', function (req, res) {
  res.send('All good');
});


var taskSchema = mongoose.Schema();

app.get('/database', function (req, res) {
  mongoose.connect(connectionString, options);

  var Task = mongoose.model('task', taskSchema);

  Task.find(function (err, tasks) {
    if (err) return console.error(err);
    mongoose.connection.close()
    res.send(tasks);
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
