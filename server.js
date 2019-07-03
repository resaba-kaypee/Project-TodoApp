require('./model/db');
const express = require('express');
const todoCtrl = require('./controllers/todoCtrl');
const port = process.env.PORT || 3000
const app = express();


app.use(express.static('./public'));

app.set('view engine', 'ejs');

todoCtrl(app);

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});