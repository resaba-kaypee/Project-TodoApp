const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
  item: String
})

mongoose.model('todos', todoSchema);