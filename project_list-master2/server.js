var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/project_details', (req, res) => {
  console.log("in server.");
  res.render('project_details');
})

app.get('/secondary', (req, res) => {
  console.log("in server.");
  res.render('secondary');
})

app.listen(2100, function(){
  console.log("Hello 2100");
});
