/**
 * Created by Vimukthi Mudalige on 6/25/2017.
 */

require('rootpath')();
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));

// use JWT auth to secure the api
app.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));

// routes
app.use('/login', require('./app/controllers/login.controller'));
app.use('/register', require('./app/controllers/register.controller'));
app.use('/app', require('./app/controllers/app.controller'));
app.use('/api/users', require('./app/controllers/api/users.controller'));
app.use('/api/add_patient', require('./app/controllers/api/patient.controller'));

// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});

// start server
var server = app.listen(3000, function () {
    console.log('Server is running at localhost' + server.address().address + ':' + server.address().port);
});