var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var currentPort = process.env.PORT || 2100;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', (req, res) => {
  res.render('views/index');
});

app.get('/project_details', (req, res) => {
  console.log("in server.");
  res.render('views/project_details');
})

app.listen(currentPort, function(){
  console.log("Hello 2100");
});
