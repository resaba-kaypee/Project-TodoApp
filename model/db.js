const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Projects';
const mongooseOptions = { useNewUrlParser: true };
require('./todo.model');

mongoose.connect(url, mongooseOptions, (err) => {
  if (err) console.log( `Failed to connect to db` + err); else console.log(`Connected to mongoDB`);
})


