var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 2100 || process.env.PORT;

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

app.listen(port, function(){
  console.log("Hello 2100");
});
