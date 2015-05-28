var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('../models/Tasks');

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  Task.find(function(error, tasks){
    res.json(tasks);
  });
});

//Get /api/tasks/:id
router.get('/:id', function(req, res, next){
  Task.findById(req.params.id, function(err, task){
    res.json(task);
  });
});

//POST /api/tasks
router.post('/', function(req, res, next){
  console.log(req.body);
  Task.create(req.body, function(err, task){
    res.json(task);
  });
});

//Update /api/tasks/:id
router.put('/:id', function(req, res, next){
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, req.body, function(err, task){
      res.json({ message: "you have update a task" });
  });
});

router.patch('/:id', function(req, res, next){
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, req.body, function(err, task){
      res.json({ message: "you have update a task" });
  });
});

//Delete /api/tasks/:id
router.delete('/:id', function(req, res, next){
  Task.findByIdAndRemove(req.params.id, req.body, function(err, task){
    res.send('your task has been deleted!')// always send back a response
  });
});

module.exports = router;
