var mongoose = require('mongoose');

var connectionString = "mongodb://localhost/tasker";

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log('[MongoDB]: Connected');
});

mongoose.connection.on('disconnected', function(){
  console.log('[MongoDB]: Disconnected');
});

mongoose.connection.on('error', function(error){
  console.log('[MongoDB]: Error! Error! See below');
  console.log(error);
});
