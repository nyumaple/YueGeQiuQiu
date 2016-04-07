
var express = require('express');
var signModule = require('./module/sign');
var bodyParser = require('body-parser');
var app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

//set the home page route
app.get('/', function (req, res) {

    // ejs render automatically looks in the views folder
    res.render('signin.html');
});

app.post('/module/sign', function(req, res) {

    console.log(req.body.uemail);
    signModule.sign['test']("");

});

app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});

