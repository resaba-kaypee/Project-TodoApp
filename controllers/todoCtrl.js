const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Projects = mongoose.model('todos');
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {
  // read
  app.get('/todo', (req, res) => {
    Projects.find({}, (err, data) => {
      if (err) throw err;
      res.render('todo', {todos: data})
    });
  });

  // create
  app.post('/todo', urlencodedParser, (req, res) => {
    let newTodo = Projects(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  // delete
  app.delete('/todo/:item', function (req, res) {
    // delete the requested item from db
    Projects.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });
  // app.delete('/todo/:item', (req, res) => {
  //   Projects.findOneAndDelete({
  //     item: req.params.item
  //   }, (err, data) => {
  //     if (err) throw err;
  //     res.json(data)
  //   });
  // });


}